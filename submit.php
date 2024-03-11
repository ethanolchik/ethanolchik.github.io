<?php

echo "test";

if (isset($_POST['submit'])) {
  // Set recipient email address
  $to = "your_email@example.com";

  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Prepare email content
  $subject = "Portfolio form Submission from $name";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  // Set email headers (optional)
  $headers = "From: $email \r\n";
  $headers .= "Reply-To: $email \r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8 \r\n";

  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo "Your message has been sent successfully!";
  } else {
    echo "There was an error sending your message. Please try again later.";
  }
}

?>
