<?php
require_once '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);
$answer_id = $data['answer_id'] ?? 0;

$stmt = $pdo->prepare("SELECT is_correct, explanation FROM answers WHERE id = ?");
$stmt->execute([$answer_id]);
$result = $stmt->fetch();

if (!$result) {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'message' => 'Answer not found']);
    exit;
}

echo json_encode([
    'status' => 'success',
    'is_correct' => (bool) $result['is_correct'],
    'explanation' => $result['explanation']
]);
?>