<?php
    include 'conexao.php';

    $numeroCartao = $_POST["numeroCartao"];
    $nomeCartao = $_POST["nomeCartao"];
    $cpfCartao = $_POST["cpfCartao"];
    $validadeCartao = $_POST["validadeCartao"];
    $cvvCartao = $_POST["cvvCartao"];

    mysqli_query($con,"UPDATE cliente SET Numero_Cartao ='$numeroCartao', Nome_Cartao='$nomeCartao', Validade_Cartao='$validadeCartao', CVV='$cvvCartao' WHERE CPF = '$cpfCartao'");
?>