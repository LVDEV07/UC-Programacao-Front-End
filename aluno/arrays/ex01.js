let fila = ["Ana", "Bruno", "Carla"];

fila.push("Lucas");

for (let i = 0; i < fila.length; i++) {
  console.log(fila[i]);
}

let removido = fila.shift();
console.log("\n" + "Removidos: " + removido);