const navTabs = document.querySelectorAll("#nav-tabs > a");
navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    navTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

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
}

function clearItems() {
  let items = document.getElementsByClassName("item");
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = "";
  }
}

let cols = document.getElementsByClassName("col");
for (let i = 0; i < cols.length; i++) {
  for (let j = 0; j <= 5; j++) {
    cols[i].innerHTML += '<div class="item">' + "" + "</div>";
  }
}

//
