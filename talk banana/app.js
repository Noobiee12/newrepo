var button=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var outputmsg=document.querySelector("#output")

function clickHandler(){
    outputmsg.innerText="you typed " + txtinput.value
};

button.addEventListener("click", clickHandler)


