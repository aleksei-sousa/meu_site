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

window.addEventListener('resize', (e)=>{
    if(window.innerWidth > 800 && contadorSide){
        sidebar()
    }
})


const alvo = document.querySelector('#inicio')
//const header = document.querySelector('.h-background')
const hBtns = document.querySelector(".h-btns")
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
console.log(window.screen.width)
//let ddd = document.querySelector('.h-background').style.filter = 'brightness(0.8)'
//ddd.style.filter = 'brightness(0.8)'