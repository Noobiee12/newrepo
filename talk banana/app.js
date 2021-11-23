var button=document.querySelector("#btn-translate");
var input=document.querySelector("txt-input");

console.log(input);

function clickHandler(){
    console.log("clicked");
    console.input("input",input.value);
}

button.addEventListener("click", clickHandler)


