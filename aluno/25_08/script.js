const paragrafo = document.querySelector(".paragrafo")
const titulo = document.querySelector(".titulo")
const lista = document.querySelector("#lista")
const itens = document.querySelectorAll("li")
const checkbox = document.querySelector("input")

paragrafo.classList.add("teste")
titulo.innerHTML += "Lista de comptas"
paragrafo.innerText += "Itens"

let frutas = ["banana", "maça", "Melancia", "Uva"]


for(let i = 0; i<frutas.length; i++){
    itens[i].innerHTML = frutas[i]
}





