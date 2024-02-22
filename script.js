let Block = document.querySelector(".block");
let HpCounter = document.querySelector(".hp");
let BlocksDestroyed = document.querySelector(".destroyed");
let BlocksDestroyedCounter = 0;
let upgrade1 = document.querySelector(".doubledmg");
let x = 1;
let CashMade = document.querySelector("#CashMade");
let Cash = 0;



const BlocksGenerator =[
     { name:"blue", hp:Math.floor(Math.random()*10) + 10, },
    

    ]
    
Block.addEventListener("click", () => { 
    let random = Math.floor(Math.random() * BlocksGenerator.length);

    BlocksGenerator[0].hp = BlocksGenerator[0].hp -  x;
    HpCounter.innerHTML = `${BlocksGenerator[0].hp}`;
    

    if(BlocksGenerator[0].hp <= 0){ 
        BlocksDestroyedCounter += 1;
        BlocksDestroyed.innerHTML = BlocksDestroyedCounter;
        Cash++;
        CashMade.innerHTML = Cash;
        BlocksGenerator[0].hp = Math.floor(Math.random()*10) + 10;
        HpCounter.innerHTML = `${BlocksGenerator[0].hp}`;
        FadeOut(Block);
        setTimeout("FadeIn(Block)", 400);
    }
})
upgrade1.addEventListener("click", () => { 
    if(Cash >= 2){
        x++;
        Cash -= 2;
        CashMade.innerHTML = Cash;
    } else alert("you don't have enough cash!");
   
})

function FadeOut(el){ 
    let Opacity = 1;
    let interval = setInterval(()=> { 
        if (Opacity > 0) { 
            Opacity -=0.1;
            el.style.opacity = Opacity;
        } else {
            clearInterval(interval);          
        }
    }, 50)
}
function FadeIn(el){ 
    let Opacity = 0;
    let interval = setInterval (() =>{ 
        if(Opacity < 1) { 
            Opacity +=0.1;
            el.style.opacity = Opacity;
        } else clearInterval(interval);
    }, 50)
}