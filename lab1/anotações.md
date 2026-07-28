Implementar o comportamento da calculadora em JavaScript;
1. Realizar as operações de soma, subtração, multiplicação, divisão, raíz quadrada, potenciação e porcentagem;
2. Exibir os valores da operação no display da calculadora;
3. Guardar as últimas 10 operações no histórico para serem reutilizadas.

---

variáveis:
    entradaAtual (display)
    operador
    valorAnterior
    resultado (acumulador)

Estado inicial
Display apresenta valor 0
    -> entradaAtual = 0
    -> operador = null
    -> valorAnterior = null
    -> resultado = null

1. Se for um "data-digit"
-> Remove o numero anterior do display -> valorAnterior <- entradaAtual
-> Concatena cada digito na tela (mostra no display), inclusive se for "."
    Exemplo:
        entradaAtual = 3
        operador = null
        valorAnterior = 0 (recebeu entradaAtual anterior)
        resultado = null
2. Se for um "data-op"
Opcional (?):
-> Realiza operação anterior: resultado <- entradaAtual, operador, valorAnterior (transformar em função)
    -> Se o operador for null -> resultado, valorAnterior <- entradaAtual
-> Exibe no display o valor de resultado

Obrigatório:
-> valorAnterior <- entradaAtual
-> operador <- data-op
-> aguarda digitar outro data-digit -> passo 1
    Exemplo:
        entradaAtual = 3
        operador = "+"
        valorAnterior = 3
        resultado = null
        entradaAtual = 4
    
3. Se for uma "data-action":
3.1. Se data-action é igual "=":
    -> Realiza operação anterior: resultado <-entradaAtual, operador, valorAnterior (transformar em função)
    -> Exibe no display o valor de resultado
        -> valorAtual <- resultado (?)
3.2. Se data-action é backspace "<=":
    -> Remove a última entrada de data-digit
3.3. Se data-action é sign "+-":
    -> Inverte sinal do entradaAtual
3.4. Se data-action é clear "c":
    -> Limpa o valor da entradaAtual: entradaAtual <- 0


