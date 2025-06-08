<?php
require_once '../../config/db.php';
require_once '../../functions/session.php';

$data = json_decode(file_get_contents("php://input"), true);
$code = $data['code'] ?? '';
$name = $data['name'] ?? '';
$user = getCurrentUser();

$stmt = $pdo->prepare("SELECT id FROM quizzes WHERE code = ?");
$stmt->execute([$code]);
$quiz = $stmt->fetch();

if (!$quiz) {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'message' => 'Invalid quiz code']);
    exit;
}

$quiz_id = $quiz['id'];
$user_id = $user['id'] ?? null;

if ($user) {
    $name = $user['name'];
}

$stmt = $pdo->prepare("INSERT INTO participants (name, quiz_id, user_id) VALUES (?, ?, ?)");
$stmt->execute([$name, $quiz_id, $user_id]);

$participant_id = $pdo->lastInsertId();
echo json_encode(['status' => 'success', 'participant_id' => $participant_id, 'quiz_id' => $quiz_id]);
?>