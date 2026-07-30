// 1. Clicar no teclado e aparecer no display -> pegar o teclado e o display
// Recomendação -> sempre começar com const, depois let e depois var

// Pegar pelo id -> pois pegamos exatamente o objeto que queremos e não outro parecido etc....
const display = document.querySelector('#display')
//alert(display.textContent) // para teste

const teclado = document.querySelector('.keys')

// Variáveis para as operações/ações da calculadora
let entradaAtual = '0'
let valorAnterior = null
let operador = null
let resultado

// Evento é um argumento que a função seta irá receber no clique
teclado.addEventListener('click', (evento) => {
    //display.textContent += evento.target.textContent // pega o texto de ONDE o evento aconteceu, se foi numa key numerica ou simbolo etc
    
    // Vendo e usando a propriedade dataset
    const botao = evento.target
    if(!botao) return // por segurança

    const digito = botao.dataset.digit
    const operacao = botao.dataset.op
    const acao = botao.dataset.action

    //alert(`${digito} - ${operacao} - ${acao}`) // para teste

    if (digito) {
        inserirDigito(digito)
        return // Para nao cair nos outros ifs -> pode usar else -> object calistenics
    }
    if (operacao) {
        registrarOperacao(operacao)
        return
    }
    if (acao) {
        executarAcao(acao)
        return
    }
})

// Função seta
const inserirDigito = digito => {
    // Caso o display esteja mostrando zero (0), ao digitar um número, remove o zero
    if(display.textContent === '0'){
        display.textContent = display.textContent.slice(0, -1)
    }
    display.textContent += digito
}

const registrarOperacao = operação => {
    entradaAtual = parseFloat(display.textContent)
    operador = operação
}

const executarAcao = acao => {
    // depende da ação
    switch (acao) {
        case 'clear':
            limpaDisplay()
            break
        case 'backspace':
            display.textContent = display.textContent.slice(0, -1)
            break
        case 'sign':
            display.textContent = -display.textContent
            break
        case 'equals':
            executaOperacao()
            break
    }
}

const executaOperacao = () => {
 
}

const limpaDisplay = () => {
    entradaAtual = 0
    display.textContent = entradaAtual
}