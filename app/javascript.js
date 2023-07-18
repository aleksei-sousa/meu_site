const btn_slide = [...document.querySelectorAll(".btn_slide")]

btn_slide.map((ele)=>{
    ele.addEventListener("click", (e)=>{
        console.log(e.target.id)
    })
})


const margin = ()=>{
    
}

const box = document.querySelector(".slide")
console.log(box.getAttribute("marginLeft"))

const pixel = ()=>{
    console.log(document.querySelector(".gradient-container"))
}

//pixel()