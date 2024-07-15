<?php
$host = '127.0.0.1';
$db = 'my_project_nexus';
$user = 'root';
$pass = '';

// Set up DSN
$dsn = "mysql:host=$host;dbname=$db";

try {
    // Create a PDO instance
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
