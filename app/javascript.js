const btn = [...document.querySelectorAll('.link-nav')]
let botao = [...document.querySelectorAll('.link-nav')]
const main = document.querySelector('main') 
botao.map((e)=>{
    //e.classList.remove('nav-btn-ativa')
})
btn.map((ele) => {
    ele.addEventListener('click', ()=>{
        classe = 'link-nav-ativa'
        removerClasse(btn,classe)
        adicionarClasse(ele, btn,classe)

        /*let elemento =''
        switch (ele.id){
            case "btn_alteracoes1":
                elemento = document.querySelector("#btn_alteracoes1")
            break;
            case "btn_alteracoes2":
                elemento = document.querySelector("#btn_alteracoes2")
            break;
            case "btn_alteracoes3":
                elemento = document.querySelector("#btn_alteracoes3")
            break;
        alterarClasse(array, elemento, classe)

        }

        classe = 'form_dados_desativada'
        array = [...document.querySelectorAll('.form_alteracoes')]*/
    })
    
});

const removerClasse = (array, classe)=>{
    array.map((e)=>{
        e.classList.remove(classe)
        console.log("removido")
    })
    //elemento.classList.toggle(classe)
}

const adicionarClasse = (ele, array, classe)=>{

        ele.classList.add(classe)
        console.log("add")

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