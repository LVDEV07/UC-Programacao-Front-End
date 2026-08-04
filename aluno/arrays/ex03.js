function adicionarPedido(pedidos, codigo) {
  if (pedidos.length < 10) {
    pedidos.push(codigo);
  } else {
    pedidos.shift();
    pedidos.push(codigo);
  }

  return pedidos;
}

let historico = ["0001", "0002", "0003"];
console.log(adicionarPedido(historico, "0004"));

historico = ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "00010"]

console.log(adicionarPedido(historico, "00011"));