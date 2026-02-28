`use strict`

const form = document.querySelector("#form")
const nameInput= document.querySelector("nameInput")
const messageInput = document.querySelector("#messageInput")
const textOut = document.querySelector("#textOut")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(nameInput.value)
    console.log(messageInput.value)

    const name = nameInput.value
    const message = messageInput.value
    textOut.textContent += `${name} says: ${message}`
})