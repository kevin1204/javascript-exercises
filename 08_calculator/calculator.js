const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	// if(numbers.length === 0){
  //   return 0;
  // }

  // let res = 0;
  // for(let i = 0; i<numbers.length; i++) {
  //   res = res + numbers[i];
  // }
  // return res;

  //an easies way of doing this is:
  // const total = numbers.reduce((product, current) => {
  //   return product + current;
  // }, 0);
  // return total;

  //and even easier and most compact but also understandable
  return numbers.reduce((total, current) => total + current,0);

};

const multiply = function(numbers) {
  let result = 1;

  for(let i = 0; i < numbers.length; i++){
    result = result * numbers[i];
  } 
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let res = 1;
  for(let i = 2; i<=a; i++) {
    res = res * i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
