// const sumAll = function(num1, num2) {
    //this was my try
    //but i think it is not a very efficient and efective one

//     let sum = 0;
//     if(num1 >= 0 && num2 >= 0) {
//         if(num1 < num2) {
//             for(let i = num1; i<= num2; i++) {
//                 sum += i;
//         } else if(num2<num1) {
//             for(let i = num2; i<= num1; i++) {
//                 sum += i;
//             }
//         } else if(num1 == num2){
//             sum = num1;
//         } else if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
//             sum = 'ERROR';
//         }
//     } else {
//         sum = 'ERROR';
//     }
//     return sum;
    
// };

//trying again!

const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
