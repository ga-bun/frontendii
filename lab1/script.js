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
let resultado = null

// Evento é um argumento que a função seta irá receber no clique
teclado.addEventListener('click', (evento) => {
    //display.textContent += evento.target.textContent // pega o texto de ONDE o evento aconteceu, se foi numa key numerica ou simbolo etc
    
    // Vendo e usando a propriedade dataset
    const botao = evento.target
    if(!botao) return // por segurança

    // Categorias de botões
    const digito = botao.dataset.digit // valor do botao digito
    const operacao = botao.dataset.op // valor do botao operacao
    const acao = botao.dataset.action // valor do botao action

    //alert(`${digito} - ${operacao} - ${acao}`) // para teste

    if (digito) {
        inserirDigito(digito)
        atualizarDisplay(entradaAtual)
        return // Para nao cair nos outros ifs -> pode usar else -> object calistenics
    }
    if (operacao) {
        registrarOperacao(operacao)
        return
    }
    if (acao) {
        executarAcao(acao)
        atualizarDisplay(entradaAtual)
        return
    }
})

// Função seta
const inserirDigito = digito => {
    
    // Se já tiver um ponto na entrada atual, ele não faz nada
    if (digito === '.' && entradaAtual.includes('.')) return
    
    // Caso o display esteja mostrando zero (0), ao digitar um número, remove o zero
    if(entradaAtual === '0' && digito !== '.'){
        entradaAtual = digito
        return
    }

    // Atualizar entradaAtual com o número digitado: concatena no entradaAtual
    entradaAtual += digito
}

// Função que só atualiza o display com o valor recebido
const atualizarDisplay = (entrada) => {
    display.textContent = entrada
}

const registrarOperacao = operação => {
    operador = operação
    valorAnterior = Number(entradaAtual)
    entradaAtual = '0'
}

const executarAcao = acao => {
    // Depende da ação
    switch (acao) {
        case 'clear':
            limparTudo()
            break
        case 'backspace':
            apagaUltimoDigito()
            break
        case 'sign':
            inverterSinal()
            break
        case 'equals':
            executaOperacao(operador)
            entradaAtual = String(resultado)
            break
    }
}

// Este clear limpa todas as coisas... não somente a entrada atual
const limparTudo = () => {
    entradaAtual = '0'
    valorAnterior = null
    operador = null
    resultado = null
}

const apagaUltimoDigito = () => {
    if(entradaAtual.length === 1){
        entradaAtual = '0'
        return
    }
    entradaAtual = entradaAtual.slice(0, -1) // O primeiro é inclusivo, o segundo nao é se coloca um número negativo, começa a contar de trás pra frente (tamanho -1)

    // entradaAtual.length > 1 ? entradaAtual.slice(0,-1) : '0'
}

const inverterSinal = () => {
    entradaAtual = -entradaAtual
}

const executaOperacao = (operacao) => {
    
    entradaAtual = Number(entradaAtual)
    alert(`Valor anterior: ${valorAnterior} - Entrada atual: ${entradaAtual} - Operador: ${operador}`) // para teste
    if(operacao === 'raiz' || operacao === 'porcento') {
        calcularUnaria(operacao) // tem somente um numero
        return
    }

    calcularBinaria(operacao) // tem dois numeros envolvidos na operacao
}

const calcularUnaria = (operacao) => {
    if (operacao === 'raiz') {
        resultado = Math.sqrt(valorAnterior)
        return
    }

    if (operacao === 'porcento') {
        resultado = valorAnterior / 100
        return
    }
}

const calcularBinaria = (op) => {
    operador = op
    switch (operador) {
        case 'adicao':
            resultado = valorAnterior + entradaAtual
            break
        case 'subtracao':
            resultado = valorAnterior - entradaAtual
            break
        case 'multiplicacao':
            resultado = valorAnterior * entradaAtual
            break
        case 'divisao':
            resultado = valorAnterior / entradaAtual
            break
    }
}