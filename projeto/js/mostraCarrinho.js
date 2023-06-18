window.addEventListener('load',montaCard)

function montaCard(){
    fetch('../php/mostraCarrinho.php',{
        method: 'GET'
    }).then(async function(resposta){
        var lista = await resposta.json()

        for(var i=0; i<lista.length;i++){
            var container = document.getElementsByClassName('container')[2]
            var divCard = criaElemento('div','card')
            container.appendChild(divCard)
    
            var h1 = document.createElement('h1')
            h1.setAttribute('name','nomeProduto')
            h1.innerHTML = lista[i]["nome"]
    
            var p = document.createElement('p')
            p.innerHTML = lista[i]["descricao"]
    
            var pPreco = document.createElement('p')
            pPreco.innerHTML = 'R$: '+lista[i]["valor"]
            pPreco.style.color = 'green'
            pPreco.style.fontWeight = 'bold'
    
            var divBotoes = criaElemento('div','botoesCard')
    

    
            var divQntd = criaElemento('div','divQntd')
            divQntd.setAttribute('id','qntd')

    
            var botaoAdd = criaBotao('removeCarrinho','removeCarrinho','Remover <i class="fa-solid fa-circle-xmark"></i>')
    
            var formElement = document.createElement('form')
            formElement.classList.add('formcarrinho')

            var inputElement = document.createElement('input')
            inputElement.setAttribute('type','text')
            inputElement.innerHTML = h1.innerHTML
            inputElement.setAttribute('name','nomeProduto')
            inputElement.value = h1.innerHTML
            inputElement.setAttribute('name','nomeProduto')

            var inputQntd = document.createElement('input')
            inputQntd.setAttribute('name','quantidadeProduto')
            inputQntd.setAttribute('id','quantidadeProduto')
            inputQntd.setAttribute('type','text')
            inputQntd.innerHTML = 1
            inputQntd.value = 1

            formElement.appendChild(inputElement)
            formElement.appendChild(inputQntd)

    

            divBotoes.appendChild(botaoAdd)
    
            divCard.appendChild(h1)
            divCard.appendChild(p)
            divCard.appendChild(formElement)
            divCard.appendChild(pPreco)
            divCard.appendChild(divBotoes)
        }

        var botoesAddCarrinho = document.getElementsByClassName('removeCarrinho')

        for(var b =0; b<botoesAddCarrinho.length; b++){
            var btnAddCarrinho = botoesAddCarrinho[b]
            btnAddCarrinho.addEventListener('click',removerCarrinho)
        }

        var botoesAdd = document.querySelectorAll('#add')

        for(var j =0; j<botoesAdd.length; j++){
            var btn = botoesAdd[j]
            btn.addEventListener('click',addProduto)
        }

        var botoesSub = document.querySelectorAll('#sub')

        for(var w =0; w<botoesSub.length; w++){
            var btnSub = botoesSub[w]
            btnSub.addEventListener('click',subProduto)
        }


        function removerCarrinho(event){
            //vai mandar a quantidade
            //vai mandar id do produto cujo nome é h1

            //vai pegar a soma do total de ocorrencias na coluna quantidade*valor
            var btnAddCarrinho = event.target
            var botoesCard = btnAddCarrinho.parentElement
            var divCard = botoesCard.parentElement


            var h1 = divCard.querySelector('h1')
            var nome = h1.innerHTML
            
            var form = divCard.querySelector('.formcarrinho')

            //enviar isso
            console.log(nome)
            console.log(form)
            console.log('oi tudo bem')

            var dados = new FormData(form)
            fetch('../php/deleteCarrinho.php',{
                method: 'POST',
                body: dados
            }).then(function(){
                divCard.remove()
            })



        }
    })
}


function criaBotao(id, classe, texto){
    var botao = document.createElement('button')
    botao.classList.add(classe)
    botao.setAttribute('id', id)
    botao.setAttribute('type', 'button')
    botao.innerHTML = texto
    return botao
}


function criaElemento(qual,classe){
    var elemento = document.createElement(qual)
    elemento.classList.add(classe)
    return elemento
}