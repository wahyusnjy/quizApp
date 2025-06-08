<?php
require_once '../../config/db.php';
require_once '../../functions/session.php';
requireLogin();

$data = json_decode(file_get_contents("php://input"), true);
$quiz_id = $data['quiz_id'] ?? 0;
$question = $data['question'] ?? '';
$answers = $data['answers'] ?? []; // array of ['answer' => ..., 'is_correct' => true/false, 'explanation' => ...]

$stmt = $pdo->prepare("INSERT INTO questions (quiz_id, question) VALUES (?, ?)");
$stmt->execute([$quiz_id, $question]);
$question_id = $pdo->lastInsertId();

foreach ($answers as $a) {
    $stmt = $pdo->prepare("INSERT INTO answers (question_id, answer, is_correct, explanation) VALUES (?, ?, ?, ?)");
    $stmt->execute([$question_id, $a['answer'], $a['is_correct'], $a['explanation']]);
}

echo json_encode(['status' => 'success', 'question_id' => $question_id]);
?>