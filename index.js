// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

console.log(dodger.style.left);
console.log(dodger.style.bottom);

dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e){
    if (e.key === "Arrowleft"){
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
        
        if (left > 0){
            dodger.style.left = `${left - 1}px`;
        }
    }
});

function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left > 0){
        dodger.style.left = `${left + 1}px`;
    }
}

moveDodgerLeft();