let marks =16;
if(marks>30){
                    console.log("marks is gretter than 30")
}

else if(marks>20){
                    console.log("marks is gretter than 20")
}

else if(marks>10){
                    console.log("marks is gretter than 10")
}

else{
                    console.log("marks less than 10")
}

console.log(Math.sign(-45))

let a= 33;
let b=42;
let c=4;

if(a>b && a>c){
                    console.log("a is bigger")
}

else if(b>a && b>c){
                    console.log("b is largest")
}

else{
                    console.log("c is big")
}



var arrays =[3,106,207,56,32,5,89,32]
// function largestNum(array){
                    var largest =arrays[1];
                    // var largest =arrays[0];
for(let i=0; i<=arrays.length; i++){
                    const element =arrays[i];
                    
                   

                    if (element >largest)
                    {
                                        largest=element;
                                        // return largest;
                    }
                    // return largest;
                   

}
// return largest;
console.log(largest)


// const big= largestNum(arrays)
// console.log(big);

// console.log(largest)


// console.log(largest)
