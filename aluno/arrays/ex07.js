function estaBanido(banidos, apelido) {
  return banidos.includes(apelido);
}

let banidos = ["WiseScorpion", "Plabbernom", "xxx33Fibberflop"];

console.log(estaBanido(banidos, "Plabbernom"));
console.log(estaBanido(banidos, "JoaoSilva"));