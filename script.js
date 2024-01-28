let Block = document.querySelector(".block");
let HpCounter = document.querySelector(".hp");
let BlocksDestroyed = document.querySelector(".destroyed");
let BlocksDestroyedCounter = 0;

const BlocksGenerator =[
     { name:"blue", hp:5, },

    ]
    



Block.addEventListener("click", () => { 
    BlocksGenerator[0].hp = BlocksGenerator[0].hp -  1;
    HpCounter.innerHTML = `${BlocksGenerator[0].hp}`;

    if(BlocksGenerator[0].hp == 0){ 
        BlocksDestroyedCounter += 1;
        BlocksDestroyed.innerHTML = BlocksDestroyedCounter;
        BlocksGenerator[0].hp = 5;
    
    }
})
