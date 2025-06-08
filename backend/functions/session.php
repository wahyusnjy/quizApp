<?php
session_start();
function getCurrentUser() {
    return $_SESSION['user'] ?? null;
}
function requireLogin() {
    if (!isset($_SESSION['user'])) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized']);
        exit;
    }
}
?>