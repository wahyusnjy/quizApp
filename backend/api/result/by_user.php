<?php
require_once '../../config/db.php';
require_once '../../functions/session.php';
requireLogin();

$user = getCurrentUser();
$stmt = $pdo->prepare("SELECT r.id, q.title, r.score, r.created_at FROM results r JOIN participants p ON r.participant_id = p.id JOIN quizzes q ON p.quiz_id = q.id WHERE p.user_id = ? ORDER BY r.created_at DESC");
$stmt->execute([$user['id']]);
$results = $stmt->fetchAll();

echo json_encode(['status' => 'success', 'results' => $results]);
?>