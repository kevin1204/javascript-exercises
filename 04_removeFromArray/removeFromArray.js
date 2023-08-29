const removeFromArray = function(array, ...args) {
    const newArray = [];

    //this is one way but it can also be done with the forEach array function
    for(let i = 0; i<array.length; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i]);
          }
    }

    return newArray;
};

console.log(removeFromArray([1,2,3],4));

// Do not edit below this line
module.exports = removeFromArray;
