<?php
header('Content-Type: application/json');

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
    
    echo json_encode($results);
} catch(PDOException $e) {
    // Handle errors
    echo json_encode(array('error' => $e->getMessage()));
}
?>
