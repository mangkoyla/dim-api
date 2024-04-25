<?php

// Membaca permintaan HTTP
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Handle GET request
if ($requestMethod === 'GET') {
    // Panggil fungsi atau kode untuk menangani GET request di sini
    handleGetRequest();
} else {
    // Handle other request methods (POST, PUT, DELETE) if needed
    http_response_code(405); // Method Not Allowed
    echo json_encode(array('error' => 'Method Not Allowed'));
}

function handleGetRequest() {
    // Set up connection credentials
    $dbhost = 'floppy.db.elephantsql.com';
    $dbname = 'sbabyxcc';
    $dbuser = 'sbabyxcc';
    $dbpass = 'HotqM-jeiT5J1w_icQBuaQCjRNo4ezwU';

    try {
        // Create connection
        $conn = new PDO("pgsql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Example query
        $stmt = $conn->query('SELECT * FROM proxies vmess');
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Return JSON response
        header('Content-Type: application/json');
        echo json_encode($results);
    } catch(PDOException $e) {
        // Handle errors
        header('Content-Type: application/json');
        http_response_code(500); // Internal Server Error
        echo json_encode(array('error' => $e->getMessage()));
    }
}

?>
