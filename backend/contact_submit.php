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

require __DIR__ . '/db.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name         = trim($data['name'] ?? '');
$email        = trim($data['email'] ?? '');
$phone        = trim($data['phone'] ?? '');
$propertyType = trim($data['propertyType'] ?? '');
$budget       = trim($data['budget'] ?? '');
$message      = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $phone === '' || $propertyType === '' || $budget === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

try {
    $stmt = $pdo->prepare('INSERT INTO enquiries (name, email, phone, property_type, budget, message, created_at) VALUES (:name, :email, :phone, :property_type, :budget, :message, NOW())');
    $stmt->execute([
        ':name'          => $name,
        ':email'         => $email,
        ':phone'         => $phone,
        ':property_type' => $propertyType,
        ':budget'        => $budget,
        ':message'       => $message,
    ]);

    echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to save enquiry']);
}
