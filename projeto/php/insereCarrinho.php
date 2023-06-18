<?php
    include "conexao.php";

    $nome = $_POST["nomeProduto"];
    $quantidade = $_POST["quantidadeProduto"];

    $produtoID = mysqli_query($con, "SELECT ID_Produto FROM produto WHERE Nome LIKE '$nome'");

    $row = mysqli_fetch_array($produtoID);

    $valor = mysqli_query($con, "SELECT Valor FROM produto WHERE ID_Produto LIKE '$row[0]'");



    
    $valorArray = mysqli_fetch_array($valor);

    $valorTotal = $valorArray[0]*$quantidade;

    mysqli_query($con, "INSERT INTO carrinho(fk_Produto, Valor, Quantidade, Total_Valor) VALUES ('$row[0]','$valorArray[0]','$quantidade', '$valorTotal')");

    echo 'id' . $row[0] . 'quantidade' . $quantidade . 'valor' . $valorArray[0] . 'valor total' . $valorTotal;

?>