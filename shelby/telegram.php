<?php 
// https://api.telegram.org/bot5735509513:AAG_KSYHWA6rbXCct5qWqW2tGZ6NJZqut_8/getUpdates

$name = $_POST['u_name'];
$phone = $_POST['u_phone'];
$mess = $_POST['mess'];
$model = $_POST['u-model'];

$token = "5735509513:AAG_KSYHWA6rbXCct5qWqW2tGZ6NJZqut_8";
$chat_id = "-893363856";

$arr = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
    'Модель: ' => $model,
    'Мессенджер: ' => $mess
);


foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    
if ($sendToTelegram) {
    // header ('Location: https://audit.matrix-quest.ru/thnk.html');
    return true;
} else {
    echo 'Error';
}
?>