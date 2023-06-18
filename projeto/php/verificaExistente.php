<?php
    include "conexao.php";

    $existente = mysqli_query($con, "SELECT * FROM cliente");
    $i = 0;
    while($retorno = mysqli_fetch_assoc($existente)){
        $dados[$i]["cpf"] = $retorno["CPF"];
        $dados[$i]["email"] = $retorno["Email"];
        $dados[$i]["senha"] = $retorno["Senha"];
        $i++;
    }

    $objetoJSON = json_encode($dados);
    echo $objetoJSON;
?>