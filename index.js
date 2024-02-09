const perguntas = [
    {
      pergunta: "Qual é a função da palavra-chave 'def' em Python?",
      respota: [
        "Declara uma função",
        "Define uma variável",
        "Importa um módulo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses não é um tipo de dado em Python?",
      respota: [
        "Lista",
        "Dicionário",
        "Pilha",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um método em Python?",
      respota: [
        "Um tipo de dado",
        "Uma estrutura de controle",
        "Uma função associada a um objeto",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função da palavra-chave 'if' em Python?",
      respota: [
        "Definir uma função",
        "Realizar uma iteração",
        "Realizar uma condição",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um loop 'for' em Python?",
      respota: [
        "Uma função de ordenação",
        "Uma estrutura de repetição",
        "Um método de pesquisa",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de criar um comentário em Python?",
      respota: [
        "// Este é um comentário",
        "# Este é um comentário",
        "-- Este é um comentário",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o Python?",
      respota: [
        "Um sistema operacional",
        "Uma linguagem de programação",
        "Um tipo de dado",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'append()' em Python?",
      respota: [
        "Adicionar um elemento a uma lista",
        "Remover um elemento de uma lista",
        "Alterar um elemento de uma lista",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma 'string' em Python?",
      respota: [
        "Um tipo de dado que representa texto",
        "Um operador matemático",
        "Um tipo de loop",
      ],
      correta: 0
    },
    {
      pergunta: "O que é a 'indentação' em Python?",
      respota: [
        "Um tipo de dado",
        "Um espaço em branco para alinhar o código",
        "Uma palavra-chave reservada",
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