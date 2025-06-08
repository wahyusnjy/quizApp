<?php
require_once '../../config/db.php';

$stmt = $pdo->query("SELECT id, title, code FROM quizzes ORDER BY id DESC");
$quizzes = $stmt->fetchAll();

echo json_encode(['status' => 'success', 'quizzes' => $quizzes]);
?>