const perguntas = [
  {
    pergunta: "Qual é o nome do aldeão que vive na fazenda ao lado da sua em Stardew Valley?",
    respota: [
      "Sam",
      "Elliott",
      "Alex",
    ],
    correta: 2
  },
  {
    pergunta: "Qual aldeão gosta de pescar e pode ser encontrado frequentemente na praia?",
    respota: [
      "Harvey",
      "Willy",
      "Sebastian",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a profissão de Emily em Stardew Valley?",
    respota: [
      "Estilista",
      "Fazendeira",
      "Garçonete",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o animal de estimação de Penny em Stardew Valley?",
    respota: [
      "Gato",
      "Cachorro",
      "Pássaro",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a fruta favorita de Shane em Stardew Valley?",
    respota: [
      "Maçã",
      "Melancia",
      "Abacaxi",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o prefeito da cidade de Pelican Town em Stardew Valley?",
    respota: [
      "Lewis",
      "Marnie",
      "Linus",
    ],
    correta: 0
  },
  {
    pergunta: "Qual aldeão adora tomar banho de sol em Pelican Town?",
    respota: [
      "George",
      "Pam",
      "Evelyn",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a profissão de Sebastian em Stardew Valley?",
    respota: [
      "Programador",
      "Mecânico",
      "Carteiro",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a planta favorita de Pierre em Stardew Valley?",
    respota: [
      "Alface",
      "Tomate",
      "Cenoura",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o hobby de Kent em Stardew Valley?",
    respota: [
      "Pesca",
      "Caça",
      "Arte",
    ],
    correta: 1
  }
]; // uma constante/objeto que vai armazenar todas as nossas perguntas do quiz como um objeto
  
  const quiz = document.querySelector('#quiz') // estou seleionando o id do quiz e adicionado na variavel "quiz"
  const template = document.querySelector('template') // estou pegando todos os "filhos" que estão concatenado na tag "pai"
  
  const corretas = new Set() // para que não haja repetição da informação que for selecionada
  const totalDePerguntas = perguntas.length //contar as perguntas x/x
  const mostrarTotal = document.querySelector('#acertos span') // vai procurar dentro do id "acertos" o filho "span"
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas // x de x ou x/x
  
  // loop ou laço de repetição(serve pra entrar em uma Array):
  for(const item of perguntas) { // Criando uma função para pegar cada intem da constante "perguntas"
    const quizItem = template.content.cloneNode(true) // estou criando uma constante que clona todas as tags "filhos" da "pai" template
    quizItem.querySelector('h3').textContent = item.pergunta // estou selecionando o "filho" h3 e atribuindo-o a cada item da constantee "pergunta"
  
  
    for(let respota of item.respota) { // criando outra função que vai pegar os itens 
      const dt = quizItem.querySelector('dl dt').cloneNode(true) // uma constante que vai selecionar os "filhos" dl e dt, e clonar todos os seus elemtos
      dt.querySelector('span').textContent = respota // vai selecionar o "span" de cada dt e o atrivuir a respota a ele
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) // para pegar cada indice dentro da constante "perguntas"
      dt.querySelector('input').value = item.respota.indexOf(respota)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item) // para deletar o item caso mude a alternativa selecionada
        if(estaCorreta) {
          corretas.add(item) // adicionado o item inteiro da constante(Array) "perguntas"
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
          
      quizItem.querySelector('dl').appendChild(dt) // esta adicionado o "filho" dt a constante quizItem selecionado o dl
    }
  
    quizItem.querySelector('dl dt').remove() // e agora esta apagando os "filhos" dl e dt da constante quizItem para não ficar repetindo "respota A"
  
  
    // coloca a pergunta na tela:
    quiz.appendChild(quizItem)
  }