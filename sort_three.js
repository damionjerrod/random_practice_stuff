//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

function sortThree(num1, num2, num3){
    const alphaNum = 1;
    let sortArray = [];

    if(typeof num1 !== typeof alphaNum || typeof num2 !== typeof alphaNum || typeof num3 !== typeof alphaNum){
        console.log("Please make sure all entries are actual numbers. Thanks!");
    } else {
        sortArray.push(num1, num2, num3);
        sortArray.sort();
        console.log(sortArray);
        alert(`Here's the numbers, in order: ${sortArray}`);
    }
}

sortThree(5, 8, 1);