window.addEventListener('load',displayForm)

var pagarCartao = document.getElementById('cartao')
var pagarPIX = document.getElementById('pix')

pagarCartao.addEventListener('click',insereInfoCartao)
pagarPIX.addEventListener('click',insereInfoPIX)

    var formEscolher = document.querySelector('form.escolher')
    var formCartao = document.querySelector('form.cartao')
    var formPIX = document.querySelector('form.pix')
    var formEndereco = document.querySelector('form.endereco')

function displayForm(){
    formEscolher.style.display = 'flex'
    formCartao.style.display='none'
    formPIX.style.display='none'
    formEndereco.style.display='none'
}

function insereInfoCartao(){
    var formEscolher = document.querySelector('form.escolher')
    var formCartao = document.querySelector('form.cartao')

    formEscolher.style.display = 'none'
    formCartao.style.display = 'flex'
}

function insereInfoPIX(){
    var formEscolher = document.querySelector('form.escolher')
    var formPIX = document.querySelector('form.pix')

    formEscolher.style.display = 'none'
    formPIX.style.display = 'flex'
}

var btnFinalizarPix = document.querySelector('form.pix button#finalizar')
btnFinalizarPix.addEventListener('click',finalizarPix)

function finalizarPix(){
    window.location.href='../html/comprafinalizadaPIX.html'
}

var btnFinalizarCartao = document.querySelector('form.cartao button#finalizar')
btnFinalizarCartao.addEventListener('click',finalizarCartao)


function finalizarCartao(){
    var formCartao = document.getElementById('formCartao')
    var dados = new FormData(formCartao)

    fetch('../php/insereCartao.php',{
        method:'POST',
        body: dados
    }).then(function(){
        window.location.href='../html/comprafinalizadaCARTAO.html'
    })
}