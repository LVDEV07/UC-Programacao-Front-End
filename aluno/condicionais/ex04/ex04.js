let pontos = 0;

let anosDeExperiencia = Number(prompt("Digite quantos anos de experiência você tem "))

if(anosDeExperiencia <5){
    pontos += 10
}else{
    pontos +=20
}

let formacao = prompt("Digite a sua formação (graduação, especialização, mestrado, doutorado) ")

if(formacao == "graduação"){
    pontos +=10
} else if(formacao == "especialização"){
    pontos+=20
} else if(formacao == "mestrado"){
    pontos+=30
} else if(formacao == "doutorado"){
    pontos+=40
}

alert(`A sua pontuação é: ${pontos} pontos`)