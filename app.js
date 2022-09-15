console.log("Hello world");
let amount = document.getElementsByClassName("calculate__value")[0];
amount.addEventListener("input", count)
let people = document.getElementsByClassName("calculate__value")[1];
people.addEventListener("input", count);
for(let i = 0; i<=5; i++){
    let pass = () =>{
        let passedargument = i;
        count(passedargument);
    }
    document.getElementsByClassName("button")[i].addEventListener("click", pass)
}
function count (amount, people, passedargument) {
    console.log(amount, people, passedargument);
    console.log(document.getElementsByClassName("calculate__value")[1].innerHTML)
}
