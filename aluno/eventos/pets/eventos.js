let btnGato = document.getElementById('btn-gato')
let btnCao = document.getElementById('btn-cao')
let imagemPet = document.getElementById('imagem-pet')
let btnBg = document.getElementById('btn-background')
let cores = ['#06F874', '#8706f8', '#f806a7', '#f80606', '#f8e806', '#1606f8']
let body = document.querySelector('body')



btnGato.addEventListener("click",function(){
    let fotoGato = "https://images.pexels.com/photos/7725957/pexels-photo-7725957.jpeg"
    imagemPet.src = fotoGato
})

btnCao.addEventListener("click",function(){
    let fotoCao = "https://images.pexels.com/photos/130763/pexels-photo-130763.jpeg"
    imagemPet.src = fotoCao
})

let count = 0
let count2 = 0





btnBg.addEventListener("click", function(){
        body.style.backgroundColor=cores[count]
        count++

        if(count>cores.length){
            count = 0
        }

    
})

