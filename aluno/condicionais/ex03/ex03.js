let idade = Number(prompt("Digite a sua idade"))

if(Number.isNaN(idade)){
        alert("Digite uma idade válida")
        idade = Number(prompt("Digite a sua idade"))
    }

let rendaMensal = Number(prompt("Digite a sua renda mensal"))

if(Number.isNaN(rendaMensal)){
        alert("Digite um número válido")
        rendaMensal = Number(prompt("Digite a sua renda mensal"))
    }

let doisSalariosMinimos = 3242.00




if (idade >= 18 && rendaMensal >= doisSalariosMinimos){
    alert("Aprovado")
} else{
    alert("Reprovado")
}



