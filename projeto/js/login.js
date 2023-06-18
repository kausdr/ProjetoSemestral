var botao = document.getElementById('entrar')
botao.addEventListener('click', fazerLogin)

function fazerLogin(){
    var form = document.getElementById('formLogin')
    var dados = new FormData(form)

    fetch('../php/verificaExistente.php',{
        method:'GET'
    }).then(async function(resposta){
        var dado = await resposta.json()

        var email =  form.querySelector('#email').value
        var senha = form.querySelector('#senha').value

        var emailExiste = false;
        var senhaExiste = false;

        for(var i=0; i<dado.length; i++){
            if(email == dado[i]["email"]){
                emailExiste = true;
                // se email existir em alguma linha do array, email Existe
            }
        }

        if(emailExiste){
            //procura o email no BD e verifica se a senha da mesma linha é igual a senha inserida
            console.log('email BLZ')
            fetch( '../php/verificaSenha.php',{
                method: 'POST',
                body: dados
            }).then(async function(response){
                var senhas = await response.json()
                for(var j=0; j<senhas.length;j++){
                    if(senha == senhas[j]["senha"]){
                        senhaExiste = true;
                    }
                }

                if(senhaExiste){
                    console.log('senha BLZ')
                    window.location.href='../html/paginaPrincipal.html'
                }else{
                    console.log('senha ERRADA')
                    erro('A senha está incorreta!')
                }
            })
            
        }else{
            //aviso de que email está errado ou não existe
            console.log('email NAO existe')
            erro('O E-mail está incorreto ou não existe!')
        }

    })
}


function erro(avisoErro){
    var container = document.getElementsByClassName('container')[3]
    var span = document.createElement('span')
    var form = document.getElementById('formLogin')
    span.classList.add('spanErro')

    container.insertBefore(span,form)
    span.innerHTML = ''
    span.innerHTML = avisoErro
}
