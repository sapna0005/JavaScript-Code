
let store="";

let pressed=(value)=>{
   let show=document.querySelector("#display")
   store=store+value;
   show.innerHTML=store;
}

let equall=()=>{
    let show=document.querySelector("#display")
    show.innerHTML=eval(store) //"1+2"=>3 // eval=convert string into number
    store=eval(store) // 3 number
    store.toString();  //"3" string
}
let presses = (value) => {
    let show = document.querySelector("#display");
    
    if (value === 'Math.PI') {
        store += Math.PI.toFixed(5); // Append π (3.14159) with 5 decimal places
    } else {
        store += value; // Append the input value as usual
    }
    
    show.innerHTML = store;
}

let del=()=>{
    let show=document.querySelector("#display")
    store=store.slice(0,-1)
    show.innerHTML=store;
}

let clearr=()=>{
    let show=document.querySelector("#display")
    store="";
    show.innerHTML="";
}

let sql=()=>{
    let show=document.querySelector("#display")
    store=store*store;
    show.innerHTML=store;
}
let cube=()=>{
    let show=document.querySelector("#display")
    store=store*store*store;
    show.innerHTML=store;
}

