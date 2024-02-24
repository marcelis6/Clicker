const Block = document.querySelector(".block");
const upgrade1 = document.querySelector("#upgrade1");
const CashMade = document.querySelector("#CashMade");
const upgrade2 = document.querySelector("#upgrade2");

let x = 1;
let Cash = 0;
let dps = 0;


const BlocksGenerator =[
     { name:"blue", },
    

    ]
    
Block.addEventListener("click", () => { 
   CashAdd();
    
})
upgrade1.addEventListener("click", () => { 
    if(Cash >= 50){
        x++;
        Cash -= 50;
        CashMade.innerHTML = Cash;
    } else alert("you don't have enough cash!");
   
})
upgrade2.addEventListener("click", ()=> {
    if(Cash >= 100){
        dps++;
        Cash -= 100;
        CashMade.innerHTML = Cash;
    } else alert("you don't have enough cash!");
})
function CashAdd(){ 
    Cash = Cash + x;
    CashMade.innerHTML = `${Cash}`;
}
setInterval(()=>{
    Cash = Cash + dps;
    CashMade.innerHTML = Cash;
}, 1000)