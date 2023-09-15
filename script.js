var modText = document.getElementById("yourText");
console.log("Hello")
uppercase.addEventListener("click", ()=>{
    console.log("Transforming into upper case")
    modText.innerHTML=inpText.value.toUpperCase()
})
lowercase.addEventListener("click", ()=>{
    console.log("Transforming into lower case")
    modText.innerHTML=inpText.value.toLowerCase()
})
inpText.addEventListener("input", ()=>{
    console.log("Changed")
})
inpText.addEventListener("input", ()=>{
    charCount.innerText=inpText.value.length
    wordCount.innerText=inpText.value.trim().split(" ").length
})
bold.addEventListener("click", ()=>{
    console.log("Making text bold")
    modText.innerHTML=inpText.value.bold()
})
italics.addEventListener("click", ()=>{
    console.log("Making text bold")
    modText.innerHTML=inpText.value.italics()
})
underline.addEventListener("click", ()=>{
    console.log("Underlining text")
    modText.innerHTML=`<u>${inpText.value}</u>`
})

//To switch the theme
const toggle=document.getElementById("toggleTheme")
const body=document.querySelector("body")
const text=document.querySelector("textarea")
const label=document.querySelector("label");
toggle.addEventListener("click",function (){
    if(!this.classList.toggle("bi-brightness-high-fill")){
        body.style.background="white"
        body.style.color="black"
        body.style.transition="2s"
        text.style.background="white"
        text.style.color="black"
        text.style.transition="2s"
        toggle.innerText="Light"
    }
    else{
        body.style.background="black"
        body.style.color="white"
        body.style.transition="2s"
        text.style.background="black"
        text.style.color="white"
        text.style.transition="2s"
        toggle.innerText="Dark"
    }
})
