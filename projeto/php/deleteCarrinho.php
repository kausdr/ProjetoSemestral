<?php
    include "conexao.php";

    $nome = $_POST["nomeProduto"];

    $produtoID = mysqli_query($con, "SELECT ID_Produto FROM produto WHERE Nome LIKE '$nome'");

    $row = mysqli_fetch_array($produtoID);

    $fk = mysqli_query($con, "SELECT ID_Carrinho FROM carrinho WHERE fk_Produto LIKE '$row[0]'");

    $ID = mysqli_fetch_array($fk);


    mysqli_query($con, "DELETE FROM carrinho WHERE ID_Carrinho LIKE '$ID[0]'");

?>