/*
2. Escreva um programa que declara um objeto literal `aluno`, com as propriedades `nome, idade, curso` e `notas`, que deve ser um array de _n_ números de 0 a 10. Escreva uma função que recebe o objeto como parâmetro e calcula a média de nota do aluno, independente de quantos elementos sua propriedade `notas` possui.
	- Adicione a propriedade `media` ao objeto, com o valor da média que foi calculada;
*/

const aluno = {
    nome: "Mariana",
    idade: 19,
    curso: "Engenharia de Software",
    notas: [8.5, 7.0, 9.2, 6.8]
};
 
function calcularMedia(alunoObj) {
    let soma = 0;
 
    for (let i = 0; i < alunoObj.notas.length; i++) {
        soma = soma + alunoObj.notas[i];
    }
 
    let media = soma / alunoObj.notas.length;
 
    alunoObj.media = media;
 
    console.log("A média de " + alunoObj.nome + " é " + media.toFixed(2));
    return media;
}
 
calcularMedia(aluno);
console.log(aluno);