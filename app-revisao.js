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



const usuario = {
    nome: 'Felipe',
    nascimento: '2003-22-09',
    cpf: '12332112332',
    pontuacao: 1982,
    recorrente: true,
    tags: ['premium','clube']
  }
  
  // melhor forma de consumit objetos
  const user = [
  {
    name: 'Alexandre',
    nascimento: '2003-22-09',
    cpf: '12332112332',
    pontuacao: 1982,
    recorrente: true,
    tags: ['premium','clube']
  }
  ]
  
  console.log(Object.keys(usuario))
  console.log(Object.values(usuario))
  console.log(Object.entries(usuario))
  console.log('Object: ', user)
  console.log('Object: ', user[0].name)
  
  
  
  //**********************************quinto ex de objeto ***************************************/
  
  
  // da certo mas é um objeto simples que quase nunca vamos usar isso na vida real, pois trabalhamos com objetos mais complexos
  const pessoa = {
    nome: 'Felipe',
    nascimento: '2003-22-09',
    cpf: '12332112332',
    pontuacao: 1982,
    recorrente: true,
    tags: ['premium','clube']
  }
  
  for (const chave in pessoa){
  console.log(chave,pessoa[chave])
  }
  
  // melhor jeito de contruir um objeto para consumir dados e manipular eles
  // 99% das vezes o back vai mandar os dados neste formato dentro de um objeto e nao dentro de um array
  const people = [
  {
    nome: 'Felipe',
    nascimento: '2003-22-09',
    cpf: '12332112332',
    pontuacao: 1982,
    recorrente: true,
    tags: ['premium','clube']
  }
  ]
  
  for (const infoPeople of people){
  console.log(infoPeople)
  }
  
  
  
  //**********************************sexto ex de objeto ***************************************/
  
  
  
  const clientes = [
  {nome: 'Felipe', ativo: true},
  {nome: 'Fabio', ativo: false},
  {nome: 'Ana', ativo: true},
  {nome: 'Carol', ativo: false}
  ]
  
  for (const verifica of clientes ){
  const status = verifica.ativo? 'ativo' : 'inativo'
  console.log(`Nome: ${verifica.nome}. Status: ${status}`)
  }
  
  // mesma lista com os nomes
  // assim é melhor usado para pegar esses dados e exibir na tela por ex
  clientes.forEach(({ nome, ativo }) => {
  const status = ativo ? 'ativo' : 'inativo';
  console.log(`Nome: ${nome}. Status: ${status}`);
  });
  
  // cria uma lista separada
  // é melhor usado para manipular esses dados no geral. 
  // Ex: quero ver todos os nomes se eles nao existem colcor um nome generico como 'Não informado'
  // revificar quais estao ativos e exibir algum badge diferente
  const statusClientes = clientes.map(({ nome, ativo }) => ({
  nome,
  status: ativo ? 'ativo' : 'inativo'
  }));
  
  console.log(statusClientes);
  
  
  
  
  //**********************************setimo ex de objeto ***************************************/
  
  
  
  const produtos = [
  {
    nome: 'Iphone 15',
    preco: 4500,
    disponivel: true
  },
  
  {
    nome: 'Galaxy S25' ,
    preco: 5000,
    disponivel: true
  },
  {
    nome: 'Ipad Mini' ,
    preco: 11000,
    disponivel: false
  }
  ]
  
  console.log (produtos)
  
  for (const testando of produtos){
  console.log(typeof testando.nome, typeof testando.preco, typeof testando.disponivel)
  }
  
  
  
  
  //**********************************oitavo ex de objeto ***************************************/
  
  
  
  const configuracoes = {
    tema: "Escuro",
    notificacoes: true,
    idioma: "PT - BR"
  }
  
  const configuracoes2 = [
  {tema: 'Escuro'},
  {notificacoes: true},
  {idioma: 'PT - BR'}
  ]
  
  const configuracoes3 = [
  {
    tema: "Escuro",
    notificacoes: true,
    idioma: "PT - BR"
  }
  ]
  
  // obj complexo real
  const profile = [
  {
    name: 'Alexandre',
    last_name: 'Konrath',
    age: 21,
    contact: {
      email: 'alexandre.konrath@email.com',
      phone: '(11) 91234-5678',
      social: {
        github: 'alexkonrath',
        linkedin: 'alexandre-konrath'
      }
    },
    address: {
      street: 'Rua dos Devs',
      number: 404,
      city: 'São Paulo',
      state: 'SP',
      zip: '01234-567',
      country: 'Brasil'
    },
    employment: {
      company: 'Desenvolvedor Jn',
      role: 'Frontend Developer',
      years_experience: 1,
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Vue', 'Git']
    },
    preferences: {
      dark_mode: true,
      languages: ['pt-BR', 'en-US'],
      receive_notifications: true
    },
    hobbies: ['videogame', 'música', 'futebol', 'correr']
  },
  
  {
    name: 'Felipe',
    last_name: 'Almeida',
    age: 25,
    contact: {
      email: 'felipe.almeida@email.com',
      phone: '(31) 98765-1234',
      social: {
        github: 'felipedev',
        linkedin: 'felipe-almeida-dev'
      }
    },
    address: {
      street: 'Rua dos Programadores',
      number: 1020,
      city: 'Belo Horizonte',
      state: 'MG',
      zip: '30130-001',
      country: 'Brasil'
    },
    employment: {
      company: 'RocketWave Tech',
      role: 'Backend Developer',
      years_experience: 3,
      skills: ['Node.js', 'MongoDB', 'Express', 'TypeScript', 'AWS']
    },
    preferences: {
      dark_mode: true,
      languages: ['pt-BR'],
      receive_notifications: true
    },
    hobbies: ['ler livros de tecnologia', 'fazer trilha', 'tocar violão', 'codar à noite']
  },
  
  {
    name: 'Marina',
    last_name: 'Silveira',
    age: 17,
    contact: {
      email: 'marina.silveira@email.com',
      phone: '(21) 99876-4321',
      social: {
        github: 'marinasdev',
        linkedin: 'marina-silveira'
      }
    },
    address: {
      street: 'Av. das Tecnologias',
      number: 1500,
      city: 'Rio de Janeiro',
      state: 'RJ',
      zip: '22031-045',
      country: 'Brasil'
    },
    employment: {
      company: 'Code Masters Inc.',
      role: 'Fullstack Developer',
      years_experience: 4,
      skills: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Docker']
    },
    preferences: {
      dark_mode: false,
      languages: ['en-US', 'es-ES'],
      receive_notifications: false
    },
    hobbies: ['yoga', 'culinária', 'cinema', 'viajar']
  }
  ]
  
  for (const ver in configuracoes) {
    console.log(ver)
  }
  
  for (const pessoa of profile) {
  console.log('---------------------------Nome da pessoa: ', pessoa.name)
  
  if (pessoa.age >= 18) {
    console.log(`${pessoa.name} é menor de idade`)
  }
  }
  
  console.log('---------------------------', profile)
  
  
  
  //**********************************nono ex de objeto ***************************************/
  
  
  
  const receita = {
    nome: 'Cookie',
    ingredientes: ['açucar', 'manteiga', 'ovo', 'farinha de trigo', 'gotas de chocolate'],
    tempoPreparo: 35
  }
  
  console.log(`Ingrediente complementar: ${receita.ingredientes[3]}`)
  
  
  
  //**********************************decimo ex de objeto ***************************************/
  
  
  
  const carros = {
    marca: 'Fiat',
    modelo: 'Pálio',
    ano: 2017,
    modeloAntigo: 'Pálio 2000'
  }
  
  delete carros.modeloAntigo
  console.log(carros)
  
  
  
  //**********************************decimo primeiro ex de objeto ***************************************/
  
  
  
  const dispositivos = [
    {nome: 'Impressora', status: 'Ativo'},
    {nome: 'Projetor', status: 'Inativo'},
    {nome: 'Scanner', status: 'Ativo'}
  ]
  
  for (const analisa of dispositivos){
    console.log(`Nome: ${analisa.nome} | Status: ${analisa.status}`)
  }
  
  
  
  //**********************************decimo segundo ex de objeto ***************************************/
  
  
  
  const maquina = {
    nome: 'Esteira Transportadora',
    funcionalidade: false,
    exibirStatus(){
      console.log(`A máquina ${this.nome} está ${this.funcionalidade === true ? 'funcionando normalmente.' : 'inativa no momento.'}`)
    }
  }
  maquina.exibirStatus()
  // console.log(maquina)
  
  
  
  //**********************************decimo terceiro ex de objeto ***************************************/
  
  
  
  function montarObjeto(arrPares){
    const resultado = {}
  
    for(const [chave,valor] of arrPares){
        resultado[chave] = valor
    }
  
    return resultado
  }
  
  const dados = [
    ['nome', 'João', 'é nois'],
    ['idade', 30],
    ['cidade', 'Curitiba']
  ]
  
  const dataArray = { name: 'João', idade: 21, cidade: 'Curitiba' }
  
  const dataObj = [
    { name: 'João', idade: '21', cidade: 'Curitiba' },
    { name: 'Alexander', idade: '21', cidade: 'Florianópolis' },
    { name: 'Felipe', idade: '21', cidade: 'São Paulo' },
  ]
  
  console.log(montarObjeto(dados)) 
  console.log(dataArray) // mesmo obj mas de um jeito melhor de manipular
  console.log(dataObj) // obj complexo
  console.log(dataObj[0].name) // pegar o valor deste obj
  
  const filterName = dataObj.map(obj => obj.name);
  
  for (let name of filterName) {
    const index = filterName.indexOf(name);
    console.log(`Nome ${index + 1}: ${name}`);
  }
  
  console.log('nomes da lista: ', filterName)
  
  
  
  //**********************************decimo quarto ex de objeto ***************************************/
  
  
  
  const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55,
    nivelRuido: 30
  };
  
  console.log('Categorias avaliadas: ', Object.keys(relatorio))
  console.log('\nValores registrados: ', Object.values(relatorio))
  
  const entradas = Object.entries(relatorio)
  
  console.log('\n  ***Detalhamento***')
  for(let [chave, valor] of entradas){
    const status = valor > 40 ? 'Alerta!!' : 'Ok'
    console.log(`${chave}: ${valor} -> ${status}`)
  }
  
  
  
  //**********************************decimo quinto ex de objeto ***************************************/
  
  
  
  // formatar os meses
  // funcina como um pipe neste caso
  const monthNames = {
  jan: 'Janeiro',
  fev: 'Fevereiro',
  mar: 'Março',
  abr: 'Abril',
  mai: 'Maio',
  jun: 'Junho',
  jul: 'Julho',
  ago: 'Agosto',
  set: 'Setembro',
  out: 'Outubro',
  nov: 'Novembro',
  dez: 'Dezembro'
  };
  
  // função para formatar os meses, voce passa o obj com os meses abreviados e ele retorna os meses formatados
  // usado para formatar dados que recebemos do back
  function traduzirMes(abreviacao) {
  return monthNames[abreviacao] || abreviacao; 
  }
  
  let totalDias = 0
  let mesesParado = 0
  let monthFaults = []
  const manutencao = {
    jan: 2,
    fev: 0,
    mar: 5,
    abr: 4,
    mai: 0,
    jun: 7
  };
  
  const maintenance = [
    { month: 'jan', faults: 2 },
    { month: 'fev', faults: 0 },
    { month: 'mar', faults: 4 },
    { month: 'abr', faults: 5 },
    { month: 'mai', faults: 3 },
    { month: 'jun', faults: 7 },
    { month: 'jul', faults: 2 }
  ];
  
  for (let totalFaults of maintenance) {
    totalDias += totalFaults.faults;
  
    if (totalFaults.faults > 0) {
      mesesParado++;
      // cria uma lista com os nomes que tem faltas
      monthFaults.push(traduzirMes(totalFaults.month));
    }
  }
  
  for (let mes in manutencao) {
    let dias = manutencao[mes]
    totalDias += dias
    
    if (dias > 0){
    mesesParado++
  }
  }
  
  console.log(`Total de dias parados: ${totalDias} \n Meses com manutenção registrada: ${mesesParado}`)
  
  console.log(`${totalDias > 20 ? 'Status: Atenção! Acima do limite anual.' : 'Status: Dentro do limite anual'} `)
  
  console.log(`Meses que tiveram falta: ${monthFaults.join(', ')}`)
  
  if (totalDias > 20) {
    console.log("Status: Atenção! Acima do limite anual.");
  } else {
  console.log("Status: Dentro do limite anual");
  }
  
  
  
  //**********************************decima sexto ex de objeto ***************************************/
  
  
  
  const curso = {
    titulo: 'JavaScript Intermediário',
    estudantes: [
        {nome: 'Felipe', progresso: 85},
        {nome: 'Ana', progresso: 43},
        {nome: 'Samira', progresso: 79},
        {nome: 'Jorge', progresso: 36}
    ],
    gerarRelatorio(){
  
      // mais facil de entender e também da 
        for (const percorrer of this.estudantes){
           const verifica = percorrer.progresso >= 70? 'Aprovado!' : 'Em andamento'
            console.log(`Estudante: ${percorrer.nome} | Progresso: ${percorrer.progresso}% | ${verifica}`)
        }
  
        // mais enxuto, moderno e de facil manipulação e tratamento com os objetos, 
        this.estudantes.forEach(({ nome, progresso }) => {
          console.log(`Estudante: ${nome}: ${progresso}% | ${progresso >= 70 ? 'Aprovado' : 'Em andamento'}`);
        });
    }
  }
  
  curso.gerarRelatorio()