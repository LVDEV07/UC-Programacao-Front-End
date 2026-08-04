function concatenar(palavra1, palavra2, palavra3, separador = " | ") {
  return `${palavra1}${separador}${palavra2}${separador}${palavra3}`;
}
 
console.log(concatenar("Maçã", "Banana", "Laranja"));
console.log(concatenar("Maçã", "Banana", "Laranja", " - "));