function updateTitle(){
    let title = document.querySelector("#title")
    title.innerHTML += inputName.value
}

let btn = document.querySelector("#btn")
btn.addEventListener("click", updateTitle)

let inputName = document.querySelector("#name") 
console.log(inputName)
