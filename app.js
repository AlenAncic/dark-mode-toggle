
const inputEl=document.querySelector(".input");

const bodyEl = document.querySelector("body")

inputEl.checked = false;

updateBody()


function updateBody(){
    if (inputEl.checked) {
        bodyEl.style.background = "black";
    } else {
    bodyEl.style.background = "white";
}
}

inputEl.addEventListener ("input", ()=>{
    updateBody()
})

/* fali da se ubaci funkcija sa JSON-a localStorage da bi aplikacija 
pamtila kad god upalimo tu stranicu 
sta smo izabrali koji mode */
