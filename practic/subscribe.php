<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["email"])) {
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $date = date("Y-m-d H:i:s");
    $data = "Email: $email, Date: $date\n";
    $file = 'subscriptions.txt';
    file_put_contents($file, $data, FILE_APPEND);
    echo "success";
} else {
    echo "error";
}
?>
