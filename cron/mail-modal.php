<?php
	$user_name_modal = $_POST['call-me-name'];
	$user_phone_modal = $_POST['call-me-phone'];
	$to = "kronstein-spb@gmail.com";
	$subject = "Заявка с главной формы сайта";
	$message = "Имя: ".htmlspecialchars($user_name_name)."<br/> Сообщение: ".htmlspecialchars($user_phone_phone). "Перезвоните мне, хочу кронштейн заявка с модального окна";
	$headers = "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: Тестовое письмо <!Здесь почта домена!>\r\n";
	mail($to, $subject, $message, $headers);
	exit();
?>