 <?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$theme = $_POST['theme'];
$message = $_POST['message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sergej.vinogorov@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Ecgt[djdctv'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('sergej.vinogorov@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('vinogorich@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. 'тема письма ' .$theme. 'сообщение с сайта ' .message. 
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>


<?php
//Принимаем постовые данные

$name=$_POST['name'];
$phone=$_POST['phone'];
$theme=$_POST['theme'];
$message=$_POST['message'];

//Тут указываем на какой ящик посылать письмо
$to = "vinogorich@gmail.com";
//Далее идет тема и само сообщение
$subject = "Заявка с сайта";
$text = "Письмо отправлено из моей формы<br />
Имя: ".htmlspecialchars($name)."<br />
Телефон: ".htmlspecialchars($phone)."<br />
Тема: ".htmlspecialchars($theme)."<br />
Сообщение: ".htmlspecialchars($message);

$headers = "From: no-reply@zakazatj-veb-sayt.rf\r\nContent-type: text/html; charset=utf-8 \r\n";
mail ($to, $subject, $text, $headers);
header('Location: thanks.html');
exit;
?>