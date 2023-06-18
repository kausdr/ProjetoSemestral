window.addEventListener('load',montaCard)

function montaCard(){
    fetch('../php/mostraProdutos.php',{
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
    
            var divQntdContainer = criaElemento('div','qntd-container')
            divBotoes.appendChild(divQntdContainer)
    
            var divQntd = criaElemento('div','divQntd')
            divQntd.setAttribute('id','qntd')
    
            var divBotoesQntd = criaElemento('div','botoesQntd')
            divBotoesQntd.setAttribute('id','botoesQntd')
    
            var botaoMais = criaBotao('add','botaoQntd','+')
            var botaoMenos = criaBotao('sub','botaoQntd','-')


    
            var botaoAdd = criaBotao('addCarrinho','addCarrinho','Adicionar <i class="fa-solid fa-cart-plus"></i>')
    
            var formElement = document.createElement('form')
            formElement.classList.add('formcarrinho')

            var inputElement = document.createElement('input')
            inputElement.setAttribute('type','text')
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

            divBotoesQntd.appendChild(botaoMais)
            divBotoesQntd.appendChild(botaoMenos)
    
            divBotoes.appendChild(divQntdContainer)
            divBotoes.appendChild(botaoAdd)
    
            divQntdContainer.appendChild(divQntd)
            divQntdContainer.appendChild(divBotoesQntd)
    
            divCard.appendChild(h1)
            divCard.appendChild(p)
            divCard.appendChild(formElement)
            divCard.appendChild(pPreco)
            divCard.appendChild(divBotoes)
        }

        var botoesAddCarrinho = document.getElementsByClassName('addCarrinho')

        for(var b =0; b<botoesAddCarrinho.length; b++){
            var btnAddCarrinho = botoesAddCarrinho[b]
            btnAddCarrinho.addEventListener('click',addCarrinho)
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

        var divQuantidade = document.getElementsByClassName('divQntd')

        var quantidade = 1
        for(var x =0; x<divQuantidade.length; x++){
            divQuantidade[x].innerHTML = quantidade
        }


        function addProduto(event){
            quantidade =  quantidade +1
            console.log(quantidade)
            var btnAdiconou = event.target
            var paiDoBotao = btnAdiconou.parentElement
            var voDoBotao = paiDoBotao.parentElement
            var qntdDiv = voDoBotao.querySelector('#qntd')
            qntdDiv.innerHTML = quantidade

            var botoesCard = voDoBotao.parentElement
            var card = botoesCard.parentElement

            var form = card.querySelector('.formcarrinho')
            var inputQntd = form.querySelector('#quantidadeProduto')
            inputQntd.innerHTML = qntdDiv.innerHTML
            inputQntd.value= qntdDiv.innerHTML
        }

        function subProduto(event){
            quantidade =  quantidade - 1
            console.log(quantidade)
            var btnAdiconou = event.target
            var paiDoBotao = btnAdiconou.parentElement
            var voDoBotao = paiDoBotao.parentElement
            var qntdDiv = voDoBotao.querySelector('#qntd')
            
            if(quantidade <=0){
                quantidade = 1
            }else{
                qntdDiv.innerHTML = quantidade
            }

            var botoesCard = voDoBotao.parentElement
            var card = botoesCard.parentElement

            var form = card.querySelector('.formcarrinho')
            var inputQntd = form.querySelector('#quantidadeProduto')
            inputQntd.innerHTML = qntdDiv.innerHTML
            inputQntd.value= qntdDiv.innerHTML

        }

        function addCarrinho(event){
            //vai mandar a quantidade
            //vai mandar id do produto cujo nome é h1

            //vai pegar a soma do total de ocorrencias na coluna quantidade*valor
            var btnAddCarrinho = event.target
            var botoesCard = btnAddCarrinho.parentElement
            var divCard = botoesCard.parentElement

            var qntdContainer = botoesCard.querySelector('.qntd-container')
            var qntdade = qntdContainer.querySelector('.divQntd')

            var h1 = divCard.querySelector('h1')
            var nome = h1.innerHTML
            var qnts = qntdade.innerHTML
            
            var form = divCard.querySelector('.formcarrinho')

            //enviar isso
            console.log(nome,qnts)
            console.log(form)

            var dados = new FormData(form)
            fetch('../php/insereCarrinho.php',{
                method: 'POST',
                body: dados
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