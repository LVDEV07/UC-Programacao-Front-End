/*
    4. Em um sistema legado de e-commerce estão sendo retornados por `endpoints` distintos os dados de vendas (`preço`, `categoria`, `marca`) e os dados de estoque (`estoque`, `peso`). Escreva um programa que consolide os dados dos produtos em um objeto por produto.

```js
const produtos_vendas = {
	cafes: [
		{
			sku: 7654,
			marca: "Povo Brasileiro",
			preco: 24.00,
			categoria: "Mercearia"
		},
		{
			sku: 8765,
			marca: "Soberano - Gourmet",
			preco: 29.00,
			categoria: "Mercearia",
		},
		{
			sku: 3467,
			marca: "Dose Certa",
			preco: 27.00,
			categoria: "Mercearia"
		}
	]	
}

const produtos_estoque = {
	cafes: [
		{
			sku: 3467,
			peso: 500.00,
			unidade: "mg",
			estoque: 101
		},
		{
			sku: 7654,
			peso: 250.00,
			unidade: "mg",
			estoque: 182
		},
		{
			sku: 8765,
			peso: 250.00,
			unidade: "mg",
			estoque: 46
		}
	]
}
```

*/
const produtos_vendas = {
    cafes: [
        { sku: 7654, marca: "Povo Brasileiro", preco: 24.00, categoria: "Mercearia" },
        { sku: 8765, marca: "Soberano - Gourmet", preco: 29.00, categoria: "Mercearia" },
        { sku: 3467, marca: "Dose Certa", preco: 27.00, categoria: "Mercearia" }
    ]
};

const produtos_estoque = {
    cafes: [
        { sku: 3467, peso: 500.00, unidade: "mg", estoque: 101 },
        { sku: 7654, peso: 250.00, unidade: "mg", estoque: 182 },
        { sku: 8765, peso: 250.00, unidade: "mg", estoque: 46 }
    ]
};

const vendas = produtos_vendas.cafes;
const estoque = produtos_estoque.cafes;


for (let i = 0; i < vendas.length; i++) {
    for (let j = 0; j < estoque.length; j++) {
        if (vendas[i].sku === estoque[j].sku) {
            vendas[i].peso = estoque[j].peso;
            vendas[i].unidade = estoque[j].unidade;
            vendas[i].estoque = estoque[j].estoque;
        }
    }
}

console.log(vendas);