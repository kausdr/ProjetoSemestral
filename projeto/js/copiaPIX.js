var btnCopiar = document.querySelector('button#copiar')
btnCopiar.addEventListener('click',copiar)

function copiar(){
    var chavePix = document.querySelector('input#chavepix')

    chavePix.select();
    navigator.clipboard.writeText(chavePix.value);
}