<?php
    include "conexao.php";

    $produtos = mysqli_query($con, 'SELECT * FROM produto');

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