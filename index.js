const counter1 = document.querySelector(".counter");//selecting the counter class
const loading = document.querySelector(".front"); //selecting the front class
let number = 0;

updateNumber();// calling the function

// Creating a function
function updateNumber(){
    //concatenating the string with varible  
    counter1.innerText = `${number}%`;
    loading.style.width = `${number}%`;
    number++;//incrementing the number variable

    // a condition that checks if number is less than 101
    if (number < 101){
        // A function that sets timeout to the function
        setTimeout(updateNumber, 20);
    }
}