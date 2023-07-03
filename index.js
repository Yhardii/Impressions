const ratings  = document.querySelectorAll('.rating')
const btn = document.getElementById('btn')
const container  = document.getElementById('container')
let selectedRating

ratings.forEach(ratings => {
    ratings.addEventListener("click", (event) => {
        console.log(event.target.innerText || event.target.parentNode.innerText)
        removeActive()
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
})

btn.addEventListener('click', ()=>{
    if(selectedRating !== ""){
        container.innerHTML = `
        <strong>Thank you!</strong><br><br>
        <strong>Feedback : ${selectedRating}</strong><br><br>
        <p class="feedback">We'll use your feedback to improve our<br> customer support</p>
        `
    }
})

function removeActive(){
    ratings.forEach(ratings => {
        ratings.classList.remove("active")
    })
}