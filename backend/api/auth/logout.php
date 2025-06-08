<?php
require_once '../../functions/session.php';
session_destroy();
echo json_encode(['status' => 'success', 'message' => 'Logged out']);
?>