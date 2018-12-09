<?php
session_start();

$to = "m424242@gmail.com"; // Ваш Электронный адрес
$product = "Антена";

$name = stripslashes(htmlspecialchars($_POST['name']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));

if (empty($name) || empty($phone)) {
    echo '<h1 style="color:red;">Пожалуйста заполните все поля</h1>';
    echo '<meta http-equiv="refresh" content="2; url=http://' . $_SERVER['SERVER_NAME'] . '">';
} else {

    $subject = 'Заказ товара - Антена"' . $product . '"'; // заголовок письма
    $sender = "{$product} <noreply@{$_SERVER['HTTP_HOST']}>"; // Адрес отправителя
    $header = "Content-type:text/plain;charset=utf-8\r\nFrom: {$sender}\r\n";

    $message = "ФИО: {$name}\nКонтактный телефон: {$phone}\nТовар: {$product}\n\nСайт продажи: {$_SERVER['HTTP_HOST']}\nВремя покупки: " . date("m.d.Y H:i:s") . "\n\nИнформация о покупателе:\nIP покупателя: {$_SERVER['REMOTE_ADDR']}\nУстановленный язык: {$_SERVER['HTTP_ACCEPT_LANGUAGE']}\nБраузер и ОС: {$_SERVER['HTTP_USER_AGENT']}\nРеферер: {$_SESSION['server']['referer']}\n\nUTM-метки:\nutm_source= {$_SESSION['utms']['utm_source']}\nutm_medium= {$_SESSION['utms']['utm_medium']}\nutm_term= {$_SESSION['utms']['utm_term']}\nutm_content= {$_SESSION['utms']['utm_content']}\nutm_campaign={$_SESSION['utms']['utm_campaign']}";
    $success_url = 'form-ok.php?name=' . $name . '&phone=' . $phone . '';

    $verify = mail($to, $subject, $message, $header);
    if ($verify == 'true') {
        echo("<script>document.location.href = '{$success_url}';</script>");
        //header('Location: '.);
        echo '<h1 style="color:green;">Поздравляем! Ваш заказ принят!</h1>';
        exit;
    } else {
        echo '<h1 style="color:red;">Произошла ошибка!</h1>';
    }
}
?>
