const submit = document.querySelector(".btn")
const pikachu = document.querySelector(".pikachu")

submit.addEventListener("click", appear)

function appear(){
    toggleAppear()
    setTimeout(function(){
        toggleAppear()
    }, 2000)
}

function toggleAppear(){
    pikachu.classList.toggle("active")
}
