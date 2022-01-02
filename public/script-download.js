let convertBtn = document.querySelector(".convert-button")
let urlInput = document.querySelector(".url-input")

convertBtn.addEventListener("click", ()=>{
    console.log(`URL: ${urlInput.value}`);
    sendUrl(urlInput.value)
})

function sendUrl(URL) {
    window.location.href = `http://localhost:3000/download?URL=${URL}`
}