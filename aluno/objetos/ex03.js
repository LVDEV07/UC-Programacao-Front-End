/*
3. Escreva um programa que declara um objeto carro, com as propriedades `nome (string)`, `cor (string)`, `modelo (string)` e `opcionais (object)`, contendo `ar condicionado (boolean)`, `direção helétrica (boolean)` e `multimídia (boolean)`.
	- Escreva uma função que recebe o carro como parâmetro e exibe seus detalhes
	- Escreva uma função que recebe o carro (`object`), o nome de um opcional (`string`) e um booleano como parâmetro para adicionar/remover um opcional do carro
*/

const carro = {

    nome: "Prisma",
    cor: "Vermelho",
    modelo: "LT 2023",
    opcionais: {
        arCondicionado: true,
        direcaoHidraulica: true,
        multimidia: false
    }
};
 
function exibirDetalhesCarro(carroObj) {
    console.log("Nome: " + carroObj.nome);
    console.log("Cor: " + carroObj.cor);
    console.log("Modelo: " + carroObj.modelo);
    console.log("Opcionais:");
    console.log("Ar condicionado: ", carroObj.opcionais.arCondicionado)
    console.log("Direcao Hidraulica: ", carroObj.opcionais.direcaoHidraulica)
    console.log("Multimidia: ", carroObj.opcionais.multimidia)
}
 
function alterarOpcional(carroObj, nomeOpcional, valor) {
    if (nomeOpcional in carroObj.opcionais) {
        carroObj.opcionais[nomeOpcional] = valor;
        console.log("Opcional " + nomeOpcional + " atualizado para: " + valor);
    } else {
        console.log("O opcional " + nomeOpcional + " não existe neste carro.");
    }
}
 
exibirDetalhesCarro(carro);
alterarOpcional(carro, "multimidia", true);
exibirDetalhesCarro(carro);
 