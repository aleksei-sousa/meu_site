const btn = [...document.querySelectorAll('.nav-btn')]

btn.map((ele) => {
    ele.addEventListener('click', ()=>{
        
        classe = 'link-nav-ativa'
        //console.log(elementos)
        var botao = [...document.querySelectorAll('.link-nav')]
        botao.map((e)=>{  
            removerClasse(e ,classe)
        })


        elementoFilho = ele.children[0]
        //console.log(ele.children)
        adicionarClasse(elementoFilho, classe)
        fecharSideBar ()

    })
    
});



//===================================================
const removerClasse = (elementos, classe)=>{
        elementos.classList.remove(classe)   
}
const adicionarClasse = (ele, classe)=>{
        ele.classList.add(classe)
}

const updateHeader = ()=>{
    let marcação = alvo.getBoundingClientRect().bottom
    let header = document.querySelector('.h-background')
    if(marcação < 326){
        adicionarClasse(header, 'fade')
        if(window.innerWidth>800){
            adicionarClasse(hBtns, 'h-btns-active')
        }
    }else if (marcação > 326){
        removerClasse(header, 'fade')
        removerClasse(hBtns, 'h-btns-active')
    }
}

//===================================================



let contadorSide = false
let navbar = document.querySelector('.nav-btns')
const sidebar = ()=>{
    const main = document.querySelector('main') 
    contadorSide = !contadorSide;
   if(contadorSide){
        navbar.style.right = '0px'
        main.style.filter = 'brightness(0.8)'
        document.querySelector('.h-background').style.filter = 'brightness(0.8)'
    } else {
        navbar.style.right = '-250px'
        main.style.filter = ''
        document.querySelector('.h-background').style.filter = ''
    }

}


function fecharSideBar () {
    if(contadorSide){
        sidebar()
    }
}


const alvo = document.querySelector('#inicio')
const hBtns = document.querySelector(".h-btns")

addEventListener("scroll", ()=>{
    //função que esconde e mostra o plano nde fundo do header
    updateHeader()

})





//============== cards das habilidades =================

//função "hover" no javascript
const exibicaoCards = [...document.querySelectorAll(".exibicao-card")]
function s (){
     return caards = [...document.querySelectorAll(".container-img")]
}
s()
caards.map((e) => {
    e.addEventListener("mouseover", (w)=>{
        console.log(sinalCard)
        if (sinalCard){
            controlarAtivação(w)
    }
    })
})

const controlarAtivação = (w) =>{
    let id = w.target.dataset.id
        //console.log(w.target.dataset.id)
    caards.forEach((e)=>{
        removerClasse(e, e.dataset.id+'-active')
        //console.log(e.dataset.id)
    })
    adicionarClasse(w.target, id+"-active")
    exibicaoCards.forEach((e)=>{
        removerClasse(e, 'active')
    })
    let ee = document.querySelector("#"+id)
    adicionarClasse(ee,'active')
} 

//função de clique que ao ser setada irá bloquear a função "hover"
caards.map((e)=>{
    e.addEventListener("click",  (ele)=>{
        //console.log(ele.target.dataset.id)
        sinalCardF()
        controlarAtivação(ele)
        console.log('2' + sinalCard)
    })
})

var sinalCard = true
const sinalCardF = ()=>{
    sinalCard = !sinalCard
    //console.log(sinalCard)
    return sinalCard
}

window.sr = ScrollReveal({ reset: true});

var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    duration: 1000
};
var slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: null
};

//sr.reveal(".m-apresentacao", slideLeft)
//sr.reveal(".habilidades", slideLeft)
sr.reveal(".slider2", slideLeft)
sr.reveal(".container-linguagens", slideLeft)

sr.reveal(".ola", {distance: '200%', origin: 'right', duration: 1000})
sr.reveal(".meu-nome", {distance: '200%', origin: 'left', duration: 1200})
sr.reveal(".desenvolvedor", {distance: '200%', origin: 'left', duration: 1400})
sr.reveal(".auto-descricao", {distance: '200%', origin: 'left', duration: 1600})
sr.reveal(".btn-mais", {distance: '700%', origin: 'left', duration: 1800})

sr.reveal(".escolha-me", {duration: 1000})
sr.reveal(".descrevendo-me", {distance: '100%', origin: 'right', duration: 1200})
sr.reveal(".nome-habilidade", {distance: '20%', origin: 'right  ', duration: 1000, delay:500})
sr.reveal(".barra-cinza", {distance: '20%', origin: 'right  ', duration: 1000, delay:500})
sr.reveal("#hab1", {distance: '-110%', opacity: null, origin: 'left  ', duration: 2000, delay:1000})
sr.reveal("#hab2", {distance: '-110%', opacity: null, origin: 'left  ', duration: 2000, delay:1300})
sr.reveal("#hab3", {distance: '-110%', opacity: null, origin: 'left  ', duration: 2000, delay:1600})
sr.reveal("#hab4", {distance: '-110%', opacity: null, origin: 'left  ', duration: 2000, delay:1900})
//sr.reveal("#hab2", {distance: '20%', origin: 'right  ', duration: 1000, delay:2000})
//sr.reveal("#hab3", {distance: '20%', origin: 'right  ', duration: 1000, delay:3000})
//sr.reveal("#hab4", {distance: '20%', origin: 'right  ', duration: 1000, delay:4000})

function mostrar(){
    console.log('compativel')
}