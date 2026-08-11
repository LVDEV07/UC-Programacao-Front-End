
/*
5. Dado um objeto `carrinho`, que representa um carrinho de compras em um sistema, adicione os métodos:
	- `adicionarProduto()`: que aceite três parâmetros, `nome`, `preco`e `quantidade`. Adicione o produto no array da propriedade `itens`, caso ele não esteja no carrinho ainda, do contrário, aumente a quantidade, caso ele já esteja.
	- `calcularTotal()`: calcule o preço total da compra, percorrendo os produtos na propriedade itens, e armazene em uma nova propriedade do carrinho.
	- `aplicarDesconto()`: que aceita um parâmetro, `cupom`. Verifique se o cupom passado é um dos cupons válidos na propriedade `cupons`, armazene o cupom utilizado em uma nova propriedade do objeto e modifique o preço total da compra para ter 10% de desconto.
	- `exibirCupom()`: Exiba em detalhes um cupom no console, com dados do cliente, lista de produtos, quantidades e preço, preço total e se houve cupom aplicado ou não.

```js
const carrinho = {
	cliente: "Alice",
	itens: [
	{ nome: "Smartphone", preco: 2200, quantidade: 1 },
	],
	cupons: ["MENOS10", "PROMO10", "10PORCENTO"]
}
```
*/

const carrinho = {
    cliente: "Alice",
    itens: [
        { nome: "Smartphone", preco: 2200, quantidade: 1 }
    ],
    cupons: ["MENOS10", "PROMO10", "10PORCENTO"],
 
    adicionarProduto: function (nome, preco, quantidade) {
        let jaExiste = false;
 
        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i].nome === nome) {
                this.itens[i].quantidade = quantidade;
                jaExiste = true;
            }
        }
 
        if (!jaExiste) {
            this.itens.push({ nome: nome, preco: preco, quantidade: quantidade });
        }
    },
 
    calcularTotal: function () {
        let total = 0;
 
        for (let i = 0; i < this.itens.length; i++) {
            total = total + this.itens[i].preco * this.itens[i].quantidade;
        }
 
        this.total = total;
        return total;
    },
 
    aplicarDesconto: function (cupom) {
        let cupomValido = false;
 
        for (let i = 0; i < this.cupons.length; i++) {
            if (this.cupons[i] === cupom) {
                cupomValido = true;
            }
        }
 
        if (cupomValido) {
            this.cupomAplicado = cupom;
            this.calcularTotal();
            this.total = this.total * 0.9;
        } else {
            console.log("Cupom " + cupom + " inválido.");
        }
    },
 
    exibirCupom: function () {
       
        console.log("Cliente: " + this.cliente);
        console.log("Itens:");
 
        for (let i = 0; i < this.itens.length; i++) {
            const item = this.itens[i];
            console.log(item.nome + ": " + item.quantidade + "x R$ " + item.preco);
        }
 
        let totalFinal;
 
        if (this.total !== undefined) {
            totalFinal = this.total;
        } else {
            totalFinal = this.calcularTotal();
        }
 
        console.log("Total: R$ " + totalFinal.toFixed(2));
 
        if (this.cupomAplicado) {
            console.log("Cupom aplicado: " + this.cupomAplicado);
        } else {
            console.log("Nenhum cupom aplicado.");
        }
    }
};
 
carrinho.adicionarProduto("Fone de Ouvido", 150, 2);
carrinho.adicionarProduto("Smartphone", 2200, 1);
carrinho.calcularTotal();
carrinho.aplicarDesconto("PROMO10");
carrinho.exibirCupom();