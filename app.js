console.log("Hello world");
for(let i = 0; i<=5; i++){
    let pass = (passed) =>{
        for(let j=0; j<=5; j++){
            document.getElementsByClassName("button")[j].classList.remove("button--active");
        }
        switch(i){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                passed = document.getElementsByClassName("button")[i].innerHTML;
                console.log(passed);
                count(passed);
                document.getElementsByClassName("button")[i].classList.add("button--active");
                break;
            case 5:
                passed = document.getElementsByClassName("button")[i].value;
                count(passed);
                document.getElementsByClassName("button")[i].classList.add("button--active");
                break;
        }
    }
    document.getElementsByClassName("button")[i].addEventListener("click", pass)
}
function count (passedargument) {
    if(passedargument > "0"){
        if((document.getElementsByClassName("calculate__value")[0].value != "0" && document.getElementsByClassName("calculate__value")[0].value >0 )&&(document.getElementsByClassName("calculate__value")[1].value!="0" && document.getElementsByClassName("calculate__value")[1].value >0 )){
            console.log("warunek spełniony")
            let csh = document.getElementsByClassName("calculate__value")[0].value;
            let ppl = document.getElementsByClassName("calculate__value")[1].value;
            let total =(parseFloat(csh) + (parseFloat(csh) * parseFloat(passedargument) /100))/parseFloat(ppl);
            let tip = (parseFloat(csh)*parseFloat(passedargument))/100 /parseFloat(ppl);        
            tip = parseFloat(tip).toFixed(3);
            total = parseFloat(total).toFixed(3);
            console.log(tip);
            console.log(total);
            document.getElementsByClassName("per-person__right")[1].innerHTML = "$ "+total;
            document.getElementsByClassName("per-person__right")[0].innerHTML = "$ "+tip;
        }
        else{
            if(document.getElementsByClassName("calculate__value")[0].value == "0"){
                document.getElementsByClassName("calculate__value")[0].value = "This value cant be zero.";
            }
            else if(document.getElementsByClassName("calculate__value")[1].value == "0"){
                document.getElementsByClassName("calculate__value")[1].value = "This value cant be zero.";
            }
            else{
                console.log("Something went wrong");
            }
        }
    }
    function fur (){
        if(document.getElementsByClassName("calculate__value")[0].value == "0"){
            document.getElementsByClassName("calculate__value")[0].value = "This value cant be zero.";
            document.getElementsByClassName("per-person__right")[1].innerHTML = "$ 0";
            document.getElementsByClassName("per-person__right")[0].innerHTML = "$ 0";
        }
        else if(document.getElementsByClassName("calculate__value")[1].value == "0"){
            document.getElementsByClassName("calculate__value")[1].value = "This value cant be zero.";
            document.getElementsByClassName("per-person__right")[1].innerHTML = "$ 0";
            document.getElementsByClassName("per-person__right")[0].innerHTML = "$ 0";
        }
        else{
            let csh = document.getElementsByClassName("calculate__value")[0].value;
            let ppl = document.getElementsByClassName("calculate__value")[1].value;
            let total =(parseFloat(csh) + (parseFloat(csh) * parseFloat(passedargument) /100))/parseFloat(ppl);
            let tip = (parseFloat(csh)*(parseFloat(passedargument)/100)) /parseFloat(ppl);
            tip = parseFloat(tip).toFixed(3);
            total = parseFloat(total).toFixed(3);
            document.getElementsByClassName("per-person__right")[1].innerHTML = "$ "+total;
            document.getElementsByClassName("per-person__right")[0].innerHTML = "$ "+tip;
        }
        
    }
    //We add listener after we pass a % value
    let amount = document.getElementsByClassName("calculate__value")[0];
    amount.addEventListener("input", fur)
    let people = document.getElementsByClassName("calculate__value")[1];
    people.addEventListener("input", fur); 
}

let reset = document.getElementsByClassName("effect__button")[0];
reset.addEventListener("click", clear);
function clear() {
    document.getElementsByClassName("calculate__value")[0].value = "0";
    document.getElementsByClassName("calculate__value")[1].value = "0";
    document.getElementsByClassName("per-person__right")[0].innerHTML = "$ 0";
    document.getElementsByClassName("per-person__right")[1].innerHTML = "$ 0";
}