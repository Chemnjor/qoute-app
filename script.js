let quoteText = document.querySelector(".quote")
authorName = document.querySelector(".author .name")
      quoteBtw =document.querySelector("button")

soundBtw = document.querySelector(".sound")
copyBtw = document.querySelector(".copy")
twitterBtw = document.querySelector(".twitter")
instagramBtw = document.querySelector(".instagram")

// random qoute function

function ranQuote() {
   quoteBtw.classList.add("Wait..")
  quoteBtw.innerText = "Wait.."
  
  // fetch random quotes from api then pass it to JS Object
  fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
   // console.log(result)
    quoteText.innerText = result.content
   authorName.innerText = result.author
     quoteBtw.innerText = "New Quote"
    quoteBtw.classList.remove("Wait..")
  })
}
soundBtw.addEventListener("click", ()=>{
  // utterrance is a webspeech API representing a speech request 
let utterance= new SpeechSynthesisUtterance(`${quoteText.innerText} ${authorName.innerText} said `)
    speechSynthesis.speak(utterance)  
})
copyBtw.addEventListener("click", ()=>{
  //copy Today's qoute to clipboard
  //writeText specifies the quote to copy to clipboard
  
 navigator.clipboard.writeText(quoteText.innerText)
})
twitterBtw.addEventListener("click", ()=>{
  let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText}`
  window.open(tweetUrl, "_blank") //opens in a new tab
  
  
})
// instagramBtw.addEventListener("click", ()=>{
//   let instagram =`https://twitter.com/intent/tweet`
// })





quoteBtw.addEventListener("click", ranQuote)