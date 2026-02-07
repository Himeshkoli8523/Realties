import { useState, useEffect } from 'react';

const Admin = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await fetch('http://localhost/backend/admin_get_data.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setEnquiries(data.data);
      } else {
        setError(data.error || 'Unknown error from server');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Failed to fetch data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };


  // Export enquiries as CSV
  const handleExport = () => {
    if (!enquiries.length) return;
    const header = Object.keys(enquiries[0]);
    const csvRows = [
      header.join(','),
      ...enquiries.map(row => header.map(field => `"${String(row[field]).replace(/"/g, '""')}"`).join(','))
    ];
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'enquiries.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  // Email file functionality
  const handleEmailFile = async () => {
    if (!enquiries.length) return;
    const email = prompt('Enter the recipient email address:');
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    // Prepare CSV content
    const header = Object.keys(enquiries[0]);
    const csvRows = [
      header.join(','),
      ...enquiries.map(row => header.map(field => `"${String(row[field]).replace(/"/g, '""')}"`).join(','))
    ];
    const csvContent = csvRows.join('\n');
    try {
      const response = await fetch('http://localhost/backend/email_file.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, csv: csvContent })
      });
      const result = await response.json();
      if (result.success) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email: ' + (result.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Error sending email: ' + err.message);
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;

  return (
    <div className="admin-panel p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel - Enquiries</h1>
      <div className="flex justify-end gap-4 mb-4">
        <button
          className="bg-accent text-dark px-4 py-2 rounded font-semibold shadow hover:bg-accent-light transition-colors"
          onClick={handleExport}
        >
          Export File
        </button>
        <button
          className="bg-primary text-white px-4 py-2 rounded font-semibold shadow hover:bg-secondary transition-colors"
          onClick={handleEmailFile}
        >
          Email File
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Property Type</th>
              <th className="py-2 px-4 border-b">Budget</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Created At</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{enquiry.id}</td>
                <td className="py-2 px-4 border-b">{enquiry.name}</td>
                <td className="py-2 px-4 border-b">{enquiry.email}</td>
                <td className="py-2 px-4 border-b">{enquiry.phone}</td>
                <td className="py-2 px-4 border-b">{enquiry.property_type}</td>
                <td className="py-2 px-4 border-b">{enquiry.budget}</td>
                <td className="py-2 px-4 border-b">{enquiry.message}</td>
                <td className="py-2 px-4 border-b">{enquiry.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;