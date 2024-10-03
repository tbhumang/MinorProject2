let count = 0;

const counterDisplay=document.getElementById('counter');
const addButton = document.getElementById('addButton');
const minusButton = document.getElementById('minusButton');

addButton.addEventListener('click',()=>{
    if(count<Infinity){
        count++;
        updateCounterDisplay();
    }
});

minusButton.addEventListener('click',()=>{
    count--;
    updateCounterDisplay();
});

function updateCounterDisplay(){
    counterDisplay.textContent=count;
}