<?php
if(session_id() == "") session_start();

$host = 'localhost';
$dbname = 'piweed';
$dbusername = 'root';
$dbpassword = '';

try {
    // Création de la connexion PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $dbusername, $dbpassword);

    // Configuration des options PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);//On définit le mode d'erreur de PDO sur Exception, et la maniere dont elles saffichent
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // echo "Connexion réussie à la base de données.";

    /*On capture les exceptions si une exception est lancée et on affiche
    les informations relatives à celle-ci*/
} catch (PDOException $e) {
    // Gestion des erreurs de connexion
    echo "Erreur de connexion : " . $e->getMessage();
    exit;
}

?>