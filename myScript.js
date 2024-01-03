let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let show = document.querySelector("#span");

let number = 0;

console.log(decrease);
console.log(reset);
console.log(increase);
console.log(show);

decrease.addEventListener("click", function () {
    number = number - 1;
    show.textContent = number;
    console.log(number);
    if(number<0){
        show.style.color = "red";
    }
    else if(number>0){
        show.style.color = "green";
    }
    else{
        show.style.color = "black";
    }
})

increase.addEventListener("click", function () {
    number = number + 1;
    show.textContent = number;
    console.log(number);
    if(number<0){
        show.style.color = "red";
    }
    else if(number>0){
        show.style.color = "green";
    }
    else{
        show.style.color = "black";
    }
})

reset.addEventListener("click", function () {
    number = 0;
    show.textContent = number;
    console.log(number);
    if(number<0){
        show.style.color = "red";
    }
    else if(number>0){
        show.style.color = "green";
    }
    else{
        show.style.color = "black";
    }
})