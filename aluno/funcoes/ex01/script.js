function maiorDeTres(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
 
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("o valor não é um número");
    return;
  }
 
  let maior = a;

  if (b > maior){
    maior = b;
}

  if (c > maior){
  maior = c;
}
 
  console.log(`O maior valor é: ${maior}`);
  return maior;
}
 
maiorDeTres(10, 25, 7);
maiorDeTres(-17, -2, -10);