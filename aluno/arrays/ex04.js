function gerarTextoCompras(itens) {
  return itens.join(", ");
}

let compras = ["Arroz", "Feijão", "Leite", "Ovos"];
console.log(gerarTextoCompras(compras));

