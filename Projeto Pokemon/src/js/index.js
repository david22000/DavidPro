
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartao = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){ 
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
function mostrarCartao(indiceCartao){
    cartao[indiceCartao].classList.add('selecionado');
}

//- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click', function (){

    if(cartaoAtual === cartao.length - 1) return;

    esconderCartaoSelecionado();
        cartaoAtual++
        mostrarCartao(cartaoAtual);  
})

btnVoltar.addEventListener('click', function (){

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();
        cartaoAtual--
        mostrarCartao(cartaoAtual);
       
        
        
})
