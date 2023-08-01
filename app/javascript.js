const btn = [...document.querySelectorAll('.nav-btn')]
let botao = [...document.querySelectorAll('.link-nav')]
const main = document.querySelector('main') 

btn.map((ele) => {
    ele.addEventListener('click', ()=>{
        
        classe = 'link-nav-ativa'
        let elementos = botao
        removerClasse(elementos ,classe)
        let elemento = ele.children
        //console.log(ele.children)
        adicionarClasse(elemento, classe)

    })
    
});

const removerClasse = (elementos, classe)=>{
    elementos.map((e)=>{
        e.classList.remove(classe)
        console.log("removido")
    })
}

const adicionarClasse = (ele, classe)=>{

        ele[0].classList.add(classe)
        console.log(ele[0])

    //elemento.classList.toggle(classe)
}

/*btn.map((ele) => {
    ele.addEventListener('click', ()=>{
        let ele2 = document.querySelector('.form_alteracoes')
        classe = "form_dados"
        alterarClasse(ele2, classe)
    })
});*/

let contadorSide = false
let navbar = document.querySelector('.nav-btns')
const sidebar = ()=>{
    contadorSide = !contadorSide;
   if(contadorSide){
        navbar.style.right = '0px'
        main.style.filter = 'brightness(0.8)'
    } else {
        navbar.style.right = '-250px'
        main.style.filter = ''
    }

    /*if (navbar.style.right == '-250px'){
        navbar.style.right = '0px'
        console.log(navbar.style.right)
    }else if(navbar.style.right == '0px') {
        navbar.style.right = '-250px'
    }*/

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