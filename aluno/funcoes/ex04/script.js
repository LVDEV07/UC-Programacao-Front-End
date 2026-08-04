function QuantidadeDeGasolina(distanciaKm, consumoMedio) {
  distanciaKm = Number(distanciaKm);
  consumoMedio = Number(consumoMedio);
 
  if (isNaN(distanciaKm) || isNaN(consumoMedio)) {
    console.log("Insira somente numeros");
    return;
  }
 
  const distanciaTotal = distanciaKm * 2;
  const litrosNecessarios = (distanciaTotal / 100) * consumoMedio;
 
  console.log(
    `Serão necessários ${litrosNecessarios} litros de gasolina ` + `para a viagem de ida e volta (${distanciaTotal} km no total).`
  );

  return litrosNecessarios;

}
 
QuantidadeDeGasolina(150, 8);
 