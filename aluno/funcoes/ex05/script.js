function processarPedido(nome, preco, cupom, parcelas = 1) {
  console.log(nome + " R$ " + preco);

  let desconto = 0;
  if (cupom === "CUPOM50") {
    desconto = 50;
  } else if (cupom === "CUPOM100") {
    desconto = 100;
  } else if (cupom === "CUPOM200") {
    desconto = 200;
  }

  let valorComDesconto = preco - desconto;
  if (desconto > preco) {
    valorComDesconto = 0;
  }

  if (parcelas > 12) {
    return valorComDesconto;
  }
  return valorComDesconto / parcelas;
}

console.log(processarPedido("Jaqueta Jeans", 220, "CUPOM100", 3));