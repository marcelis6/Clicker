const Block = document.querySelector(".block");
const upgrade1 = document.querySelector("#upgrade1");
const CashMade = document.querySelector("#CashMade");
const upgrade2 = document.querySelector("#upgrade2");
const upgradebtn = document.querySelector("#btnupgr");
const upgrades = document.querySelector(".section");
let x = 1;
let Cash = 0;
let dps = 0;
let upgrbtn = 0;

const BlocksGenerator =[
     { name:"blue", },
    

    ]
    
Block.addEventListener("click", () => { 
   CashAdd();
    
})

upgradebtn.addEventListener("click", ()=> { 
    if(upgrbtn == 0){
        upgrades.classList.remove("section");
        upgrades.classList.toggle("fadedin");
        upgradebtn.classList.remove("btnupgr");
        upgradebtn.classList.toggle("btnupgr2");
        upgradebtn.innerHTML = "<";
        upgrbtn++;
    } else { 
        upgrades.classList.toggle("section");
        upgrades.classList.remove("fadedin");
        upgradebtn.classList.toggle("btnupgr");
        upgradebtn.classList.remove("btnupgr2");
        upgradebtn.innerHTML = ">";
        upgrbtn--;
    }
    
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
