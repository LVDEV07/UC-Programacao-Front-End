/*
1. Escreva um programa que declara dois objetos literais `produto`, com as propriedades `nome (string)`, `preco (number)`, `categoria (string | "Laticínios", "Hortifruti", "Pães", "Bebidas", etc.)`. Escreva uma função que recebe dois produtos como parâmetros e exibe no console qual é o produto mais caro, seu nome e categoria.
*/


const produto1 = {
    nome: "Banana_prata",
    preco: 5.49,
    categoria: "Laticínios"
};
 
const produto2 = {
    nome: "Laranja_Bahia",
    preco: 12.90,
    categoria: "Frutas"
};
 
function produtoMaisCaro(produtoA, produtoB) {
    let maisCaro;
 
    if (produtoA.preco >= produtoB.preco) {
        maisCaro = produtoA;
    } else {
        maisCaro = produtoB;
    }
 
    console.log(
        `O produto mais caro é "${maisCaro.nome}" (categoria: ${maisCaro.categoria}), ` +
        `custando R$ ${maisCaro.preco}`
    );
    return maisCaro;
}
 
produtoMaisCaro(produto1, produto2);