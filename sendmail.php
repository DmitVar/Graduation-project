<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmaler/language/');
$mail->IsHTML(true);

$mail->setFrom('dmitvar.github.io', 'Мой сайт');

$mail->addAddress('dmitvar@gmail.com');
$mail->Subject = 'Привет!';

$body = '<h1>Новое письмо</h1>';
if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
	$body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['text']))){
	$body.='<p><strong>Text:</strong>'.$_POST['text'].'</p>';
}
$mail->Body = $body;

if(!$mail->send()){
	$massage = 'Ошибка';
} else {
	$massage = 'Данные отправлены!';
}

$response = ['message' => $massage];
header('Content-type: application/json');
echo json_encode($response);
?>