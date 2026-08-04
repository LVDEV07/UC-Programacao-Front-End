function filtrarNumeros(array) {
  let numeros = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      numeros.push(array[i]);
    }
  }

  return numeros;
}

console.log(filtrarNumeros([10, "banana", 25, true, 7, "maçã", null]));