<?php

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
    $stmt = $conn->query('SELECT * FROM your_table');
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Return HTML response
    echo '<html><head><title>Database Results</title></head><body><table>';
    echo '<tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>';
    foreach ($results as $row) {
        echo '<tr><td>' . $row['column1'] . '</td><td>' . $row['column2'] . '</td><td>' . $row['column3'] . '</td></tr>';
    }
    echo '</table></body></html>';
} catch(PDOException $e) {
    // Handle errors
    echo 'Error: ' . $e->getMessage();
}

?>
