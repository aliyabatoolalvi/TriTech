
<?php
// Database connection parameters
$servername = "your_database_servername";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli("localhost", "root", " ", "tritech");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

// Close the database connection
$conn->close();
?>


