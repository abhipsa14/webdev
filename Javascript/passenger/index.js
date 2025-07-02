//document.getElementById("count-el").textContent = "Passenger Count: " + 3;

let count=0;
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
incrementBtn.addEventListener("click", function() {
    count++;
    countEl.textContent = "Passenger Count: " + count;
});
decrementBtn.addEventListener("click", function() {
    if (count > 0) {
        count--;
        countEl.textContent = "Passenger Count: " + count;
    }
});
resetBtn.addEventListener("click", function() {
    count = 0;
    countEl.textContent = "Passenger Count: " + count;
});
console.log(count);

// // create a variable , myAge, and set it's value to ur age
// let myAge = 21;

// console.log("My age is: " + myAge);