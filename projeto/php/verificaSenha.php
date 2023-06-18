<?php
    include "conexao.php";

    $email = $_POST["email"];

    $existente = mysqli_query($con, "SELECT Senha FROM cliente WHERE Email LIKE '$email'");

    $i = 0;
    while($retorno = mysqli_fetch_assoc($existente)){
        $dados[$i]["senha"] = $retorno["Senha"];
        $i++;
    }
    $objetoJSON = json_encode($dados);
    echo $objetoJSON;

?>
