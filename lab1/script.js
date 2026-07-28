// 1. Clicar no teclado e aparecer no display -> pegar o teclado e o display
// Recomendação -> sempre começar com const, depois let e depois var

// Pegar pelo id -> pois pegamos exatamente o objeto que queremos e não outro parecido etc....
const display = document.querySelector('#display')
//alert(display.textContent)

// JEITO ESTRANHO: fazer para cada botão....
// Adicionar um escutador de eventos em botão/teclado
// const botao7 = document.querySelector('[data-digit="7"]')

// botao7.addEventListener('click', () => {
//     display.textContent += botao7.textContent // pegando o conteúdo de botao7 e coloca em  display
// })

const teclado = document.querySelector('.keys')

let entradaAtual = 0
let valorAnterior = null
let operador = null
let resultado

// evento é um argumento que a função seta irá receber no clique
teclado.addEventListener('click', (evento) => {
    //display.textContent += evento.target.textContent // pega o texto de ONDE o evento aconteceu, se foi numa key numerica ou simbolo etc
    
    // Vendo e usando a propriedade dataset
    const botao = evento.target
    if(!botao) return // por segurança
    const digito = botao.dataset.digit
    const operacao = botao.dataset.op
    const acao = botao.dataset.action

    //alert(`${digito} - ${operacao} - ${acao}`)

    if (digito) {
        inserirDigito(digito)
        return // Para nao cair nos outros ifs -> pode usar else -> object calistenics
    }
    if (operacao) {
        //registrarOperacao(operacao)
        return
    }
    if (acao) {
        //executarAcao(acao)
        return
    }

})

// Função seta
const inserirDigito = digito => {
    display.textContent += digito
}
