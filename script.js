let Block = document.querySelector(".block");
let HpCounter = document.querySelector(".hp");
let BlocksDestroyed = document.querySelector(".destroyed");
let BlocksDestroyedCounter = 0;

const BlueBlock = {
    hp: 5,
    
}


Block.addEventListener("click", () => { 
    BlueBlock.hp = BlueBlock.hp -  1;
    HpCounter.innerHTML = `Block hp: ${BlueBlock.hp}`;

    if(BlueBlock.hp == 0){ 
        BlocksDestroyedCounter += 1;
        BlocksDestroyed.innerHTML = BlocksDestroyedCounter;
        BlueBlock.hp = 5;
    }
})