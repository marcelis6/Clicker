const Block = document.querySelector(".block");
const upgrade1 = document.querySelector("#upgrade1");
const CashMade = document.querySelector("#CashMade");
const upgrade2 = document.querySelector("#upgrade2");
const upgradebtn = document.querySelector("#btnupgr");
const upgrades = document.querySelector(".section");
const btnquerymobile = window.matchMedia('(max-width:500px)');
const widthx = window.innerWidth;
let x = 1;
let Cash = 0;
let dps = 0;
let upgrbtn = false;
let i;
let j;
let k;
let l;
const BlocksGenerator =[
     { name:"blue", },
    ]
    



Block.addEventListener("click", () => { 
   CashAdd();
    
})



window.addEventListener("load", () => { 
   if(widthx >= 1400){ 
    i = 300;
    j = -10;
    k = 10;
    l = -500;
   } else if(widthx >= 800) { 
    i = 195;
    j = -10;
    k = 10
    l = -250
   } else if (widthx >= 100) { 
    i = 170;
    j = -10;
    k = 10;
    l = -250;
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

 
    upgradebtn.addEventListener("click", ()=> { 
        leftslide(i,j,k,l);
    })
    

/* upgradebtn.addEventListener("click", ()=> { 
    if(upgrbtn == 0 ){
        upgradebtn.style.setProperty("left", "200px");
        upgrades.style.setProperty("left", "-10px");
        upgradebtn.innerHTML = "<";
        upgrbtn++;
    } else { 
        upgradebtn.style.setProperty("left", "10px");
        upgrades.style.setProperty("left", "-250px");
        upgradebtn.innerHTML = ">";
        upgrbtn--;
    }
    
}) */
function leftslide(i,j,k,l){
    if(upgrbtn == false ){
        upgradebtn.style.setProperty("left", `${i}` + "px");
        upgrades.style.setProperty("left", `${j}` + "px");
        upgradebtn.innerHTML = "<";
        upgrbtn = true;
    } else { 
        upgradebtn.style.setProperty("left", `${k}` + "px");
        upgrades.style.setProperty("left", `${l}` + "px");
        upgradebtn.innerHTML = ">";
        upgrbtn = false;
    }
}