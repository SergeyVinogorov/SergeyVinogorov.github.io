<?php
	$user_name_main = $_POST['main-form-name'];
	$user_phone_main = $_POST['main-form-phone'];
	$to = "kronstein-spb@gmail.com";
	$subject = "Заявка с главной формы сайта";
	$message = "Имя: ".htmlspecialchars($user_name_main)."<br/> Сообщение: ".htmlspecialchars($user_phone_main). "Перезвоните мне, хочу кронштейн";
	$headers = "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: Тестовое письмо <Здесь почта домена>\r\n";
	mail($to, $subject, $message, $headers);
	exit();
?>