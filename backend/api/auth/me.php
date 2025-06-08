<?php
require_once '../../functions/session.php';
$user = getCurrentUser();

if ($user) {
    echo json_encode(['status' => 'success', 'user' => $user]);
} else {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'message' => 'Unauthorized']);
}
?>