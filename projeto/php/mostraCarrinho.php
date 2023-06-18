<?php
    // include "conexao.php";

    // $produtoCarrinho = mysqli_query($con, 'SELECT fk_Produto FROM carrinho');

    // $IDProduto = mysqli_fetch_array($produtoCarrinho);

    // $produtos = mysqli_query($con, "SELECT * FROM produto WHERE ID_Produto = '$IDProduto[0]'");

    // $i = 0;
    // while($retorno = mysqli_fetch_assoc($produtos)){
    //     $lista[$i]["nome"] = $retorno["Nome"];
    //     $lista[$i]["descricao"] = $retorno["Descricao"];
    //     $lista[$i]["valor"] = $retorno["Valor"];
    //     $i++;
    // }

    // $objetoJSON = json_encode($lista);
    // echo $objetoJSON;

    include "conexao.php";

    $produtos = mysqli_query($con, "SELECT * FROM produto p INNER JOIN carrinho c ON (p.ID_Produto = c.fk_Produto)");

    $i = 0;
    while($retorno = mysqli_fetch_assoc($produtos)){
        $lista[$i]["nome"] = $retorno["Nome"];
        $lista[$i]["descricao"] = $retorno["Descricao"];
        $lista[$i]["valor"] = $retorno["Valor"];
        $i++;
    }

    $objetoJSON = json_encode($lista);
    echo $objetoJSON;
?>