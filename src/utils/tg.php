<?php
$TOKEN  = 'ВАШ_TOKEN_ОТ_BOTFATHER';
$CHAT_ID = '-1001234567890'; // chat_id группы

$input = file_get_contents('php://input');
$data = json_decode($input, true);
if (!$data) $data = $_POST;

$name  = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$time  = trim($data['time'] ?? '');
$comment = trim($data['message'] ?? $data['comment'] ?? '');

$text = "📞 <b>Новая заявка на обратный звонок</b>\n\n"
      . "👤 Имя: " . ($name ?: "—") . "\n"
      . "📱 Телефон: " . ($phone ?: "—") . "\n"
      . "⏰ Время: " . ($time ?: "—") . "\n"
      . ($comment ? "\n📝 Комментарий: " . $comment : "");

$url = "https://api.telegram.org/bot{$TOKEN}/sendMessage";

$payload = [
  'chat_id' => $CHAT_ID,
  'text' => $text,
  'parse_mode' => 'HTML',
  'disable_web_page_preview' => true
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$res = curl_exec($ch);
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

header('Content-Type: application/json; charset=utf-8');
echo json_encode(['ok' => ($http >= 200 && $http < 300), 'http' => $http, 'tg' => $res]);
