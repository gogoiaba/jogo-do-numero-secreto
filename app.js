//criando a lista de números
let listaDeNumerosSorteados = [];
//criando a variavel de limite de numeros no jogo
let numeroLimite = 100;
//criando o número secreto a partir da função no final
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto)
//criando a função para mudar o texto
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela ('p', `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto) {
        exibirTextoNaTela ('h1','Parabéns!!');
        //fazendo o texto de tentativas
        let palavraTentativas = tentativas == 1 ? 'tentiva' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        //reativar o botão 'novo jogo'
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'O número secreto é menor!');
                } 
        else {
        exibirTextoNaTela ('p', 'O número secreto é maior!');
        }
        tentativas++;
        limparCampo()        
    }
};
//função do gerador de número aleatório
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;
    if (quantidadeElementosLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    //se o numero escolhido já foi sorteado, gerar outro numero
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
    //se o numero ainda nao foi sorteado, colocar na lista pra nao ser sorteado de novo
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}