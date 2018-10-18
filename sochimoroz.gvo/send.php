<?php
//Принимаем постовые данные

$name=$_POST['name'];
$phone=$_POST['phone'];

//Тут указываем на какой ящик посылать письмо
$to = "princesochi@mail.ru";
//Далее идет тема и само сообщение
$subject = "Заявка с сайта";
$message = "Письмо отправлено из моей формы<br />
Имя: ".htmlspecialchars($name)."<br />
Телефон: ".htmlspecialchars($phone);
$headers = "From: no-reply@sochimoroz.ru\r\nContent-type: text/html; charset=utf-8 \r\n";
mail ($to, $subject, $message, $headers);
header('Location: thanks.html');
exit;
?>
