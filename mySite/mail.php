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