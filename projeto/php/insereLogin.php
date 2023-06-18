<?php
    include "conexao.php";

    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    mysqli_query($con, "INSERT INTO cliente(Nome, Sobrenome, CPF, Email, Senha) VALUES ('$nome', '$sobrenome', '$cpf', '$email', '$senha')");

?>