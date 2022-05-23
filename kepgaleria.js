window.addEventListener("load", init);
function ID(elem) {
  return document.getElementById(elem);
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}

function $(elem) {
  return document.querySelectorAll(elem);
}

const galeria = [];
const alkepek = [];
var kepindex = 0;

function init() {
  beolvas();
  ID("balra").addEventListener("click", balra);
  ID("jobbra").addEventListener("click", jobbra);
}

function beolvas() {
  fetch("kepgaleria.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.galeria);
      beszur(data.galeria);
    })
    .catch((err) => console.log("hiba", err));
}

function megjelenit(id) {
  ID("kivalasztott").src = galeria[id].eleres;
  ID("kivalasztott").alt = galeria[id].cim;
}

function beszur(tomb) {
  let txt = "";
  for (let index = 0; index < tomb.length; index++) {
    txt += `<div class="kep" >
        <img id="${index}" src="${tomb[index].eleres}" alt="${tomb[index].cim}" ></div>`;
    galeria.push(tomb[index]);
  }

  ID("inp").innerHTML = txt;
  for (let index = 0; index < galeria.length; index++) {
    ID(index).addEventListener("click", function () {
      kepkivalasztas(index);
    });
  }
  megjelenit(0);
}

function kepkivalasztas(id) {
  console.log(id);
  kepindex = Number(id);
  megjelenit(id);
}

function balra() {
  if (kepindex <= 0) {
    kepindex = galeria.length - 1;
  } else {
    kepindex -= 1;
  }
  console.log(kepindex);
  megjelenit(kepindex);
}
function jobbra() {
  if (kepindex >= galeria.length - 1) {
    kepindex = 0;
  } else {
    kepindex++;
  }
  console.log(kepindex);
  megjelenit(kepindex);
}
