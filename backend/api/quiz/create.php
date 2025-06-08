<?php
require_once '../../config/db.php';
require_once '../../functions/session.php';
require_once '../../functions/helpers.php';

requireLogin();

$data = json_decode(file_get_contents("php://input"), true);
$title = $data['title'] ?? '';
$code = generateQuizCode();

$stmt = $pdo->prepare("INSERT INTO quizzes (title, code) VALUES (?, ?)");
$stmt->execute([$title, $code]);
$quiz_id = $pdo->lastInsertId();

echo json_encode(['status' => 'success', 'quiz_id' => $quiz_id, 'code' => $code]);
?>