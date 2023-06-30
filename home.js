// Cria a estrutura de tabelas no HTML
function createTable() {
  let content = document.getElementsByClassName("content-columns");
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j <= 3; j++) {
      content[i].innerHTML += '<div class="col">' + "" + "</div>";
    }
    document.getElementById('createTable').disabled = true;
    createItems();
    document.getElementById('createItems').disabled = false;
  }
}

// Cria a estrutura de itens dentro das tabelas
function createItems() {
  let cols = document.getElementsByClassName("col");
    for (let i = 0; i < cols.length; i++) {
      for (let j = 0; j <= 5; j++) {
        cols[i].innerHTML += '<div class="item">' + "" + "</div>";
      }
    }
}

// Preenche os itens com nomes aleatorios gerados através de um array
function fillItems() {
  let items = document.getElementsByClassName("item");
  let names = [
    "Ana",
    "João",
    "Maria",
    "Pedro",
    "Lucas",
    "Julia",
    "Fernanda",
    "Ricardo",
    "Carla",
    "Rodrigo",
    "Daniela",
    "Caio",
    "Gabriel",
    "Bruna",
    "Gustavo",
    "Rafael",
    "Thiago",
    'Livia',
    'Mariana',
    'Mateus'
  ];
  for (let i = 0; i < items.length; i++) {
    let randomIndex = Math.floor(Math.random() * names.length);
    items[i].innerHTML = names[randomIndex];
  }
  document.getElementById('clearItems').disabled = false;
}

// Limpa os itens
function clearItems() {
  let items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = "";
    document.getElementById('clearItems').disabled = true;
  }
}