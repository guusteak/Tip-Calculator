console.log("Hello world");
for(let i = 0; i<=5; i++){
    let pass = (passed) =>{
        switch(i){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                passed = document.getElementsByClassName("button")[i].innerHTML;
                console.log(passed);
                count(passed);
                break;
            case 5:
                passed = document.getElementsByClassName("button")[i].value;
                count(passed);
                break;
        }
    }
    document.getElementsByClassName("button")[i].addEventListener("click", pass)
}
function count (passedargument) {
    if(passedargument > "0"){
        if((document.getElementsByClassName("calculate__value")[0].value != null && document.getElementsByClassName("calculate__value")[0].value >0 )&&(document.getElementsByClassName("calculate__value")[1].value!=null && document.getElementsByClassName("calculate__value")[1].value >0 )){
            console.log("warunek spełniony")
            let csh = document.getElementsByClassName("calculate__value")[0].value;
            let ppl = document.getElementsByClassName("calculate__value")[1].value;
            let tip =(parseInt(csh) + (parseInt(csh) * parseInt(passedargument) /100))/parseInt(ppl);
            console.log(typeof(csh))
            console.log(typeof(passedargument));
            console.log(typeof(ppl))
            document.getElementsByClassName("per-person__right")[0].innerHTML = "$ "+tip;
        }
    }
    function fur (){
        let csh = document.getElementsByClassName("calculate__value")[0].value;
        let ppl = document.getElementsByClassName("calculate__value")[1].value;
        let tip =(parseInt(csh) + (parseInt(csh) * parseInt(passedargument) /100))/parseInt(ppl);
        document.getElementsByClassName("per-person__right")[0].innerHTML = "$ "+tip;
    }
    //Dodajemy listenera dopiero pozniej jak juz przekazemy jakis procencik i jest lux
    let amount = document.getElementsByClassName("calculate__value")[0];
    amount.addEventListener("input", fur)
    let people = document.getElementsByClassName("calculate__value")[1];
    people.addEventListener("input", fur); 
}

