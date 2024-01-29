let Block = document.querySelector(".block");
let HpCounter = document.querySelector(".hp");
let BlocksDestroyed = document.querySelector(".destroyed");
let BlocksDestroyedCounter = 0;
let upgrade1 = document.querySelector(".doubledmg");
let x = 1;
const BlocksGenerator =[
     { name:"blue", hp:5, },
     {name:"red", hp:10}

    ]
    
Block.addEventListener("click", () => { 
    let random = Math.floor(Math.random() * BlocksGenerator.length);

    BlocksGenerator[0].hp = BlocksGenerator[0].hp -  x;
    HpCounter.innerHTML = `${BlocksGenerator[0].hp}`;
    

    if(BlocksGenerator[0].hp <= 0){ 
        BlocksDestroyedCounter += 1;
        BlocksDestroyed.innerHTML = BlocksDestroyedCounter;
        BlocksGenerator[0].hp = 5;
        HpCounter.innerHTML = `${BlocksGenerator[0].hp}`;
    
    }
})
upgrade1.addEventListener("click", () => { 
    x++;

})
