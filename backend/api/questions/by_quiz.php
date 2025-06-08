<?php
require_once '../../config/db.php';

$quiz_id = $_GET['quiz_id'] ?? 0;

$stmt = $pdo->prepare("SELECT q.id as question_id, q.question, a.id as answer_id, a.answer, a.explanation FROM questions q JOIN answers a ON q.id = a.question_id WHERE q.quiz_id = ?");
$stmt->execute([$quiz_id]);
$rows = $stmt->fetchAll();

$questions = [];
foreach ($rows as $row) {
    $qid = $row['question_id'];
    if (!isset($questions[$qid])) {
        $questions[$qid] = [
            'question_id' => $qid,
            'question' => $row['question'],
            'answers' => []
        ];
    }
    $questions[$qid]['answers'][] = [
        'answer_id' => $row['answer_id'],
        'answer' => $row['answer'],
        'explanation' => $row['explanation']
    ];
}
echo json_encode(array_values($questions));
?>