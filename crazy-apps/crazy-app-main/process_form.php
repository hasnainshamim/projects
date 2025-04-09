<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $service = htmlspecialchars(trim($_POST['service']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo "Please fill all required fields.";
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please enter a valid email address.";
        exit;
    }
    
    // Set recipient email
    $to = "info@crazyapps4u.com";
    
    // Set email subject
    $subject = "New Contact Form Submission - " . $service;
    
    // Build email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Service: $service\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Set email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo "<script>alert('Thank you! Your message has been sent.'); window.location.href = 'index.html';</script>";
    } else {
        http_response_code(500);
        echo "<script>alert('Oops! Something went wrong. Please try again later.'); window.location.href = 'index.html';</script>";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission. Please try again.";
}
?>