// Lista de tarefas

(()=>{


    const princpalFunc = (evento) => {
    
        evento.preventDefault()
    
        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value
        
        
        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class = "content"> ${valor}</p>`
        
        tarefa.innerHTML = conteudo
    
        lista.appendChild(tarefa)
        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(CriaBtDeleta())
        input.value = ""
    }
    
    const novaTarefa = document.querySelector('[data-form-button]')
    novaTarefa.addEventListener('click', princpalFunc)
    
    const BotaoConclui = () => {
        const botaoConclui = document.createElement('button')
        botaoConclui.addEventListener('click', concluirTarefa)
        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = 'Concluir'
    
        return botaoConclui
    }
    
    const concluirTarefa = (evento)=>{
        const botaoConclui = evento.target
        const tarefaCompleta = botaoConclui.parentElement
        tarefaCompleta.classList.toggle('done')
    }
    
    
    
    const CriaBtDeleta = () =>{
        const botaoDeletCriado = document.createElement('button')
        botaoDeletCriado.innerText = "Deletar"
        botaoDeletCriado.addEventListener('click', fazDeletar)
        botaoDeletCriado.classList.add('btexclui')
    
        return botaoDeletCriado
    }
    
    
    const fazDeletar = (evento)=>{
        const botaoDeleta = evento.target
    
        const delet = botaoDeleta.parentElement
        delet.remove()
    
        return botaoDeleta
    }
    
    
    const limpar = document.querySelector('task')
    limpar.innerHTML = ""
    })()
//***************************************************************************************************/
    // outras praticas */
//***************************************************************************************************


    function sistemaVotacao(){
    const idade = 19
    const tituloEleitor = true

    if(idade >= 16 && tituloEleitor == true){
        console.log('Liberado(a) para votar!')
    } else {
        console.log('Recusado por falta de idade/titulo')
    }
}

sistemaVotacao()


function notasEscolar(){
    const nota = 8

    if(nota >=7){
        console.log('Aprovado(a)!')
    } else if (nota >=5){
        console.log("(Recuperação!")
    } else{
        console.log('Reprovado(a)!')
    }
    
 
}

notasEscolar()

let contador = 0
for(contador = 1; contador <=10; contador++)
    console.log(contador)

//******************************************************** */

function verificaIdadeAcomp(){
    const idade = 21
    const acompanhado = false

    if(idade >= 18 || acompanhado == true){
        console.log('Aprovado! Prossiga.')
    } else{
        console.log('Não aprovado. Altere as informações e tente novamente.')
    }
}

verificaIdadeAcomp()

console.log('******************************************')

function embarcaPassageiro(){
    const nIdade = 21
    const passagem = true

    if(nIdade >= 18 && passagem == true){
        console.log('Bem vindo a bordo!')
    } else{
        console.log('embarque proibido. Para mais informações contate nossa equipe.')
    }

}

embarcaPassageiro()

//******************************************************** */

// console.log('hello word')

// const lista = new Array(`SP, RJ, MG`)
// lista.push(`BH, AL, AM`)
// console.log(lista)

// const lista2 = ['azul', 'roxo', 'verde']
// // lista2.push('vermelho, amarelo, marrom')
// lista2.splice(2, 1)
// console.log(lista2)

const idadeComprador = 19
const destinoCompras = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
const mensagem = 'Bem-vindo(a)! Escolha o destino da sua próxima viagem'
const msgFinal = 'Boa viagem!'

if(idadeComprador >= 18){
    console.log('Maior de idade, prossiga com sua compra!')
} else{
    console.log('Menor de idade, compra probida!')
}

console.log(mensagem)
console.log(destinoCompras)
console.log(msgFinal)


//******************************************************** */
console.log('testanado novas coisas');
const idade = 21;
console.log(idade + 3)

//******************************************************** */

// let nome = prompt('Digite seu nome: ')
// console.log(`Bem vindo(a), ${nome}! Aproveite todo nosso conteúdo!`)
// alert(`Bem vindo(a) ${nome}, como é bom tê-lo conosco!`)

// let idade = parseInt(prompt('Digite sua idade:'))

// if(idade >= 18){
//     console.log('Aprovado! Maior de idade.')
// } else{
//     console.log('Reprovado por ser menor de idade!')
// }

// let linguagemProgram = prompt('Qual sua linguagem de programção favorita?')
// console.log(linguagemProgram)

// let valor1 = 4
// let valor2 = 4
// let resultado = valor1 + valor2
// console.log(`A soma entre ${valor1} e ${valor2} é de ${resultado}`)


// VERIFICANDO NUMERO POSITIVO/NEGATIVO/ZERO

// let numero = Number(prompt('Insira um valor: '))

// if(numero > 0){
//     alert(`o número ${numero} é positivo!`)
// } else{
//     if(numero < 0){
//         alert(`O número ${numero} é negativo`)
//     } else {
//         alert('O número é zero!')
//     }
// }


//CONTAGEM PROGRESSIVA**********************************************
//  let num = 1
//  while(num <= 10){
//      console.log(num)
//      num++  
//  } 


//CONTAGEM REGRESSIVA*********************************************
// let num1 = 10
// while(num1 >= 1){
//     console.log(num1)
//     num1--
// }

let nota = Number(prompt('Digite a nota: '))

if (nota < 7){

    console.log(`Reprovado com nota ${nota}`)

} else{

    if(nota > 10){
        console.log('Essa nota não existe.')
    } else{
     console.log(`Aprovado com nota ${nota}`)
    
    }
   
}

//******************************************************** */

alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100) + 1;
let chute
let tentativas = 1

while(chute != numeroSecreto){
    chute = Number(prompt('Escolha um número entre 1 e 100'));
    if(chute == numeroSecreto){
        break
    } else{
        if(chute > numeroSecreto){
            alert(`${chute} é maior que o número secreto`)
        } else{
            alert(`${chute} é menor que o número secreto`)
        }
    }

    tentativas++
}

// operador ternário
let palavraTent = tentativas > 1 ? 'tentativas.' : 'tentativa.'
alert(`Parabéns! Você acertou o número ${chute} com ${tentativas} ${palavraTent}`)

// Não utilizado, trocar por operador ternário
// if(tentativas > 1){
//     alert(`Parabéns! Você acertou o número ${chute} com ${tentativas} tentativas.`)
// } else{
//     alert(`Parabéns! Você acertou o número ${chute} com ${tentativas} tentativa.`)
// }




// let contador = 1
// while (contador <=10){
//     console.log('Em... ' + contador)
//     contador++
// }

// let conta = 10
// while(conta >= 1){
//     console.log(conta)
//     conta--
// }



// let numUsuario = parseInt(prompt('Escolha um número para fazer a conragem regressiva: '))
// while(numUsuario >= 0){
//     console.log(numUsuario)
//     numUsuario--
// }


// let contProgressiva = parseInt(prompt('Digite o número para dar início a contagem'))
// let contador = 0

// while(contador <= contProgressiva){
//     console.log(contador)
//     contProgressiva ++
// }


//******************************************************** */