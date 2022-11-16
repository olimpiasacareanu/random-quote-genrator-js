let quote = document.querySelector('.quote')
let author = document.querySelector('.author')
let btn = document.querySelector('.generator')

const url = "https://api.quotable.io/random"

let getQuote = () => {
    fetch(url) 
    .then((data)=> data.json())
    .then((item) => {
        console.log(item)
        quote.textContent = item.content
        author.textContent = item.author
    })
}

btn.addEventListener('click', getQuote)