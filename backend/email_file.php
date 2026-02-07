<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!isset($data['email'], $data['csv'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing email or csv data']);
    exit;
}

$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$csv = $data['csv'];

if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

// Prepare email
$subject = 'Enquiries Export CSV';
$boundary = md5(uniqid(time()));
$headers = "From: noreply@" . $_SERVER['SERVER_NAME'] . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

$message = "--$boundary\r\n";
$message .= "Content-Type: text/plain; charset=utf-8\r\n\r\n";
$message .= "Please find attached the exported enquiries CSV file.\r\n\r\n";
$message .= "--$boundary\r\n";
$message .= "Content-Type: text/csv; name=\"enquiries.csv\"\r\n";
$message .= "Content-Disposition: attachment; filename=\"enquiries.csv\"\r\n";
$message .= "Content-Transfer-Encoding: base64\r\n\r\n";
$message .= chunk_split(base64_encode($csv));
$message .= "--$boundary--";

if (mail($email, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email']);
}
