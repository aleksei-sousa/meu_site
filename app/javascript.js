

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

const removerClasse = (elementos, classe)=>{
        elementos.classList.remove(classe)
        
}
const adicionarClasse = (ele, classe)=>{
        ele.classList.add(classe)
}

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





//se for menor que 1200 vai trocar classe
/*if(window.innerWidth <=1200){
    let ele = document.querySelector('.conteudo-linguagens')
    adicionarClasse(ele, 'slide-cards')
}*/

const alvo = document.querySelector('#inicio')

const hBtns = document.querySelector(".h-btns")
//função que esconde e mostra o plano nde fundo do header
addEventListener("scroll", ()=>{
    updateHeader()
    /*if(alvo.getBoundingClientRect().bottom < 326){
        const header = document.querySelector('.h-background')
        adicionarClasse(header, 'fade')
        if(window.innerWidth>800){
        hBtns.style.paddingLeft = '80px';
        }
    }
    if(alvo.getBoundingClientRect().bottom > 326){
        const header = document.querySelector('.h-background')
        removerClasse(header, 'fade')
        if(window.innerWidth<801){
            hBtns.style.padding = '21px';
        }else{
            hBtns.style.padding = '0';
        }
       
        
    }*/
})

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

const exibicaoCards = [...document.querySelectorAll(".exibicao-card")]
const caards = [...document.querySelectorAll(".container-img")]
console.log(caards)
caards.map((e) => {
    e.addEventListener("mouseover", (w)=>{
        let id = w.target.dataset.id
        console.log(w.target.dataset.id)
        caards.forEach((e)=>{
            removerClasse(e, e.dataset.id+'-active')
            console.log(e.dataset.id)
        })
        adicionarClasse(w.target, id+"-active")
        exibicaoCards.forEach((e)=>{
            removerClasse(e, 'active')
        })
        let ee = document.querySelector("#"+id)
        adicionarClasse(ee,'active')

    })

})

function mouseOver (tt) {
    
}