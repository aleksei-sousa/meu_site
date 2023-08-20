

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
    if(alvo.getBoundingClientRect().bottom < 326){
        const header = document.querySelector('.h-background')
        adicionarClasse(header, 'fade')
        hBtns.style.maxWidth = '1009px';
        //max-width: 1097px;

    }
    if(alvo.getBoundingClientRect().bottom > 326){
        const header = document.querySelector('.h-background')
        removerClasse(header, 'fade')
        hBtns.style.maxWidth = '1200px';
    }
})

//let ddd = document.querySelector('.h-background').style.filter = 'brightness(0.8)'
//ddd.style.filter = 'brightness(0.8)'


/*
1 evento de entrada do mouse chamando uma função
uma queryAll que vai marcar todos com display none
*/
const exibicaoCards = [...document.querySelectorAll(".exibicao-card")]
const caards = [...document.querySelectorAll(".container-img")]
console.log(caards)
caards.map((e) => {
    e.addEventListener("mouseover", (w)=>{
        let id = w.target.dataset.id
        exibicaoCards.forEach((e)=>{
            removerClasse(e, 'active')
        })
        let ee = document.querySelector("#"+id)
        adicionarClasse(ee,'active')

    })

})

/*caards.map((e) => {
    e.addEventListener("mouseout", (w)=>{
                switch(w.target.classList[1]){
            case 'js':
                //console.log('js')
                console.log(w.target)
                w.target.style.display = 'block'
                document.querySelector(".img-card2").style.display = 'none'
                break
            case 'html':
                console.log('html')
                break
            case 'git':
                console.log('git')
                break
            case 'sql':
                console.log('sql')
                break
            case 'php':
                console.log('php')
                break
            case 'ux':
                console.log('ux')
                break
        }
    })
})*/


function mouseOver (tt) {
    
}