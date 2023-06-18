var botao = document.getElementById('criar')
botao.addEventListener('click', cadastrar)

function cadastrar(){
    var form = document.getElementById('formCadastro')
    var dados = new FormData(form)

    fetch("../php/verificaExistente.php",{
        method: "GET"
    }).then(async function(resposta){
        var dado = await resposta.json()

        var cpf = document.getElementById('cpf').value
        var email = document.getElementById('email').value
        var cpfExiste = false;
        var emailExiste = false;

        for(var i=0;i<dado.length;i++){
            if(cpf==dado[i]["cpf"]){
                cpfExiste = true;
            }
            if(email==dado[i]["email"]){
                emailExiste = true;
            }
        }


        if(cpfExiste){
            //verifica se o cpf existe e manda um erro ou efetua o cadastro
            //insere span de erro pra mostrar os erros
            erro('Já existe uma conta vínculada a esse CPF.')
            console.log('cpf ja existe')
        }
        else if(emailExiste){
            //verifica se o email existe e manda um erro ou efetua o cadastro
            //muda span de erro pra mostrar os erros
            erro('Email já existe!')
            console.log('email ja existe')
        }else{
            //insere os dados da conta do usuário no BD
            console.log('nao tem')
            fetch("../php/insereLogin.php",{
                method: 'POST',
                body: dados
            }).then(function(){
                window.location.href='../html/index.html'
            })
        }
        
        
    })

    
}

function erro(avisoErro){
    var container = document.getElementsByClassName('container')[3]
    var span = document.createElement('span')
    var form = document.getElementById('formCadastro')
    span.classList.add('spanErro')

    container.insertBefore(span,form)
    span.innerHTML = ''
    span.innerHTML = avisoErro
}
