function gerarTextoCompras(itens, formato) {
  if (formato === "lista") {
    let texto = "";
    for (let i = 0; i < itens.length; i++) {
      texto += "- " + itens[i] + "\n";
    }
    return texto;
  }

  return itens.join(", ");
}

let compras = ["Arroz", "Feijão", "Macarrão"];

console.log(gerarTextoCompras(compras, "texto"));
console.log(gerarTextoCompras(compras, "lista"));