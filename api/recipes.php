<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$db_file = '../recipe.db';
$db = new PDO("sqlite:$db_file");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Create table if not exists
$db->exec("CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    image_path TEXT NOT NULL
)");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    exit;
}

if ($method === 'GET') {
    $stmt = $db->query("SELECT * FROM recipes ORDER BY id DESC");
    $recipes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($recipes);
} 
elseif ($method === 'POST') {
    $name = $_POST['name'] ?? '';
    $ingredients = $_POST['ingredients'] ?? '';
    $instructions = $_POST['instructions'] ?? '';
    
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $upload_dir = '../assets/uploads/';
        $file_extension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
        $file_name = uniqid() . '.' . $file_extension;
        $target_path = $upload_dir . $file_name;
        
        if (move_uploaded_file($_FILES['image']['tmp_name'], $target_path)) {
            $image_path = 'assets/uploads/' . $file_name;
            
            $stmt = $db->prepare("INSERT INTO recipes (name, ingredients, instructions, image_path) VALUES (?, ?, ?, ?)");
            $stmt->execute([$name, $ingredients, $instructions, $image_path]);
            
            echo json_encode(["status" => "success", "message" => "Recipe added successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to move uploaded file"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No image uploaded or upload error"]);
    }
} 
elseif ($method === 'DELETE') {
    parse_str(file_get_contents("php://input"), $_DELETE);
    $id = $_GET['id'] ?? null;
    
    if ($id) {
        // Get image path to delete file
        $stmt = $db->prepare("SELECT image_path FROM recipes WHERE id = ?");
        $stmt->execute([$id]);
        $recipe = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($recipe) {
            $full_image_path = '../' . $recipe['image_path'];
            if (file_exists($full_image_path)) {
                unlink($full_image_path);
            }
            
            $stmt = $db->prepare("DELETE FROM recipes WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(["status" => "success", "message" => "Recipe deleted successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Recipe not found"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "ID required for deletion"]);
    }
}
?>
