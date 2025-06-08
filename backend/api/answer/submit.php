<?php
require_once '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);
$participant_id = $data['participant_id'] ?? 0;
$quiz_id = $data['quiz_id'] ?? 0;
$answers = $data['answers'] ?? []; // question_id => answer_id

$score = 0;
foreach ($answers as $question_id => $answer_id) {
    $stmt = $pdo->prepare("SELECT is_correct FROM answers WHERE id = ?");
    $stmt->execute([$answer_id]);
    if ($stmt->fetchColumn()) {
        $score++;
    }
}

$stmt = $pdo->prepare("INSERT INTO results (participant_id, score) VALUES (?, ?)");
$stmt->execute([$participant_id, $score]);

echo json_encode(['status' => 'success', 'score' => $score]);
?>