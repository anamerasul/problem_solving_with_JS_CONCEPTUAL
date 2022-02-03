var number=3;
for(let i =0; i<number;i++){
           number *=i
                    console.log(number)
}
var number = 4
if (number < 0) {
    console.log('Error');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <=number; i++) {
        fact =fact* i;
        console.log(fact);
    }
    console.log(fact);
}

let arry=[3,5,35,6,33,65];
for(let i=0; i<=arry.length-1; i++){
//                     arry=arry[i]
// console.log(arry)
console.log(arry[i])
}