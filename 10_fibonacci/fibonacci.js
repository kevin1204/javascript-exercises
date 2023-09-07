const fibonacci = function(num) {
    //we have to create an array
    if(num < 0) return 'OOPS';
    if(num === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for(let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    } 
    return firstPrev;
};

console.log(fibonacci(4)); //answer should be 3, because: 1,1,2,3,5
//1, 

// Do not edit below this line
module.exports = fibonacci;
