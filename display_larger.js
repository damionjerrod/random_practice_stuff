//Write a JavaScript program that accept two integers and display the larger.

function displayLarger(int1, int2){
    if(typeof int1 !== typeof int2 || typeof int2 !== typeof int1){
        console.log("Can't compare.");
    }
    else if(int1 === int2){
        console.log("Numbers are equal.");
    } else {
        if(int1 > int2){
            console.log(`${int1} is larger than ${int2}.`);
        }
        else if(int2 > int1){
            console.log(`${int2} is larger than ${int1}.`);
        }
    }
}

displayLarger(5, 4);