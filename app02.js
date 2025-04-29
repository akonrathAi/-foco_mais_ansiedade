//**********************************primeiro ex ***************************************/

// alert('Bem vindo(a)!')
// const usuario = prompt('Digite seu acesso: ')
// const validacao = (usuario === 'admin'||usuario === 'adm'||usuario === 'administrador')? alert('Login realizado, seja bem vindo!') : alert('Usuário inválido!')
// console.log(validacao)

//**********************************segundo ex ***************************************/
// const suco = 'maça'
// if(suco === 'laranja' || suco === 'abacaxi'){
//     console.log('Fruta compatível com a receita')
// } else{
//     console.log('Fruta incompatível com a receita')
// }


//**********************************terceiro ex ***************************************/
// const carrinhoVazio = false
// const verificaCarrinho = carrinhoVazio? console.log('Não é possível continuar a compra, motivo: carrinho vazio.') : console.log('Prossiga com sua compra!')

//**********************************quarto ex ***************************************/
// const carrinhoVazio = true
// if(carrinhoVazio !== false){
//     console.log('Prossiga com sua compra!')
// } else{
//     console.log('Não é possível continuar a compra, motivo: carrinho vazio.')
// }


//**********************************quinto ex ***************************************/
// const pontos = 230
// const vidas = 10
// const respostaPontos = (pontos >=50 && vidas >= 1)? console.log('Liberado, avance para o próximo nível!')  : console.log('Não pode avançar para o próximo nível.')



//**********************************sexto ex ***************************************/
// const pontos = 100
// const vidas = 4
// if(pontos >= 50 && vidas >= 1){
//     console.log('Liberado, avance para o próximo nível!')
// } else{
//     console.log('Não pode avançar para o próximo nível.')
// }


//**********************************sétimo ex ***************************************/
// bateria = 100
// const result = (bateria <= 20)? console.log('Crítica') : (bateria < 80)? console.log('Moderada') : console.log('Cheia')




//********************************** EX's DE OBJETOS ***************************************/

// OBJETOS

// crie um objeto 'pessoa' como jogadores em uma plataforma de games e adicione algumas caracteristicas
// const alg = 'nome'
// const pessoa = {
//     nome: 'Felipe Pereira Souto',
//     nascimento: '2003-09-22',
//     cpf: '46880764878',
//     pontuacao: 1234,
//     trofeus: ['speedrunner','indie','alguma','coisa']
// }

// imprima na terminal o nome e um dos trofeus.

// console.log(pessoa.nome)
// console.log(pessoa.trofeus[0])

// delete uma propriedade do objeto

// delete pessoa.cpf
// console.log(pessoa)

// crie um array de jogos e os exiba no terminal

// function exibirTrofeu(listaTrofeus){
//     for(const trofeu of listaTrofeus){
//         console.log(trofeu)
//     }
// }

// exibirTrofeu(pessoa.trofeus)



//**********************************segundo ex de objeto ***************************************/


// metodo objeto

// const cliente = {
//     nome: "Felipe",
//     score: 890,
//     recorrrente: true,
//     tags: ["premium","clube"],
//     saudarCliente(){
//         console.log(`Boas vindas, ${this.nome}. Seu score atual é de ${this.score}`)
//     }

// }

// cliente.informarScore = function mostrarScore(){
//     console.log(this.score)
// }

// cliente.saudarCliente()
// cliente.informarScore()



//**********************************terceiro ex de objeto ***************************************/

// const user = {
//     nome: 'Felipe',
//     nascimento: '2003-22-09',
//     cpf: '12332112332',
//     pontuacao: 1982,
//     trofeus: ['speedrunner','indie']
// }
// // add chave calculaIdade ao objeto
// user.calculaIdade = function naoUsaEssaFuncPraChamar(){
//     const anoNasc = this.nascimento.slice(0,4)
//     const idade = new Date().getFullYear() - anoNasc
//     // const idade = anoAtual - anoNasc **outro meio, mas mais longo**
//     console.log(idade)
// }

// user.calculaIdade()
// console.log(Object.entries(user))



//**********************************quarto ex de objeto ***************************************/

// const usuario = {
//     nome: 'Felipe',
//     nascimento: '2003-22-09',
//     cpf: '12332112332',
//     pontuacao: 1982,
//     recorrente: true,
//     tags: ['premium','clube']
// }

// console.log(Object.keys(usuario))
// console.log(Object.values(usuario))
// console.log(Object.entries(usuario))




//**********************************quinto ex de objeto ***************************************/

// const pessoa = {
//     nome: 'Felipe',
//     nascimento: '2003-22-09',
//     cpf: '12332112332',
//     pontuacao: 1982,
//     recorrente: true,
//     tags: ['premium','clube']
// }

// for (const chave in pessoa){
//     console.log(chave,pessoa[chave])
// }




//**********************************sexto ex de objeto ***************************************/

// const clientes = [
    
//     {nome: 'Felipe', ativo: true},
//     {nome: 'Fabio', ativo: false},
//     {nome: 'Ana', ativo: true},
//     {nome: 'Carol', ativo: false}
 
// ]

// for(const verifica of clientes){
//  const status = verifica.ativo? 'ativo' : 'inativo'
//  console.log(`Nome: ${verifica.nome}. Status: ${status}`)
// }





//**********************************setimo ex de objeto ***************************************/

// const produtos = [
//     {
//     nome: 'Iphone 15',
//     preco: 4500,
//     disponivel: true},

//     {
//     nome: 'Galaxy S25' ,
//     preco: 5000,
//     disponivel: true},

//     {nome: 'Ipad Mini' ,
//     preco: 11000,
//     disponivel: false}

// ]

// console.log(produtos)

// verificando os tipos*********************************************************************
// for(const testando of produtos){
//     console.log(typeof testando.nome, typeof testando.preco, typeof testando.disponivel)
// }





//**********************************oitavo ex de objeto ***************************************/

// const configuracoes = {
//     tema: "Escuro",
//     notificacoes: true,
//     idioma: "PT - BR"
// }

// for(const ver in configuracoes){
//     console.log(configuracoes[ver])
// }



//**********************************nono ex de objeto ***************************************/
// const receita = {
//     nome: 'Cookie',
//     ingredientes: ['açucar', 'manteiga', 'ovo', 'farinha de trigo', 'gotas de chocolate'],
//     tempoPreparo: 35
// }

// console.log(`Ingrediente complementar: ${receita.ingredientes[3]}`)






//**********************************decimo ex de objeto ***************************************/
// const carros = {
//     marca: 'Fiat',
//     modelo: 'Pálio',
//     ano: 2017,
//     modeloAntigo: 'Pálio 2000'

// }

// delete carros.modeloAntigo
// console.log(carros)





//**********************************decimo primeiro ex de objeto ***************************************/

// const dispositivos = [
//     {nome: 'Impressora', status: 'Ativo'},
//     {nome: 'Projetor', status: 'Inativo'},
//     {nome: 'Scanner', status: 'Ativo'}
// ]

// for(const analisa of dispositivos){
//     console.log(`Nome: ${analisa.nome} | Status: ${analisa.status}`)
// }








//**********************************decimo segundo ex de objeto ***************************************/
// const maquina = {
//     nome: 'Esteira Transportadora',
//     funcionalidade: false,
//     exibirStatus(){
//         if(this.funcionalidade === true){
//             console.log(`A máquina ${this.nome} está funcionando normalmente.`)
//         } else{
//             console.log(`A máquina ${this.nome} está inativa no momento.`)
//         }
//     }
// }
// maquina.exibirStatus()
// // console.log(maquina)






//**********************************decimo terceiro ex de objeto ***************************************/
// function montarObjeto(arrPares){
//     const resultado = {}

//     for(const [chave,valor] of arrPares){
//         resultado[chave] = valor
//     }

//     return resultado
// }

// const dados = [
//     ['nome', 'João', 'é nois'],
//     ['idade', 30],
//     ['cidade', 'Curitiba']
// ]

// console.log(montarObjeto(dados))










//**********************************decimo quarto ex de objeto ***************************************/
// const relatorio = {
//     temperatura: 75,
//     vibracao: 40,
//     pressao: 55,
//     nivelRuido: 30
//   };

// console.log('Categorias avaliadas: ', Object.keys(relatorio))
// console.log('\nValores registrados: ', Object.values(relatorio))

// const entradas = Object.entries(relatorio)

// console.log('\n  ***Detalhamento***')
// for(let [chave, valor] of entradas){
//     const status = valor > 50? 'Alerta!!' : 'Ok'
//     console.log(`${chave}: ${valor} -> ${status}`)
// }


  



//**********************************decimo quinto ex de objeto ***************************************/
// const manutencao = {
//     jan: 2,
//     fev: 0,
//     mar: 5,
//     abr: 4,
//     mai: 0,
//     jun: 7
//   };

// let totalDias = 0
// let mesesParado = 0

// for(let mes in manutencao){
//     let dias = manutencao[mes]
//     totalDias += dias
    
//   if(dias > 0){
//     mesesParado++
//   }
// }

// console.log(`Total de dias parados: ${totalDias} \n Meses com manutenção registrada: ${mesesParado}`)

// if(totalDias > 20){
//     console.log("Status: Atenção! Acima do limite anual.");
// }else{
//   console.log("Status: Dentro do limite anual");
// }




//**********************************decima sexto ex de objeto ***************************************/
// const curso = {
//     titulo: 'JavaScript Intermediário',
//     estudantes: [
//         {nome: 'Felipe', progresso: 85},
//         {nome: 'Ana', progresso: 43},
//         {nome: 'Samira', progresso: 79},
//         {nome: 'Jorge', progresso: 36}
//     ],
//     gerarRelatorio(){
//         for(const percorrer of this.estudantes){
//            const verifica = percorrer.progresso >= 70? 'Aprovado!' : 'Em andamento'
//             console.log(`Estudante: ${percorrer.nome} | Progresso: ${percorrer.progresso}% | ${verifica}`)
//         }
//     }
// }

// curso.gerarRelatorio()









