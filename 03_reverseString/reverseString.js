const reverseString = function(string) {
    // let revString = [];
    // let arrayString = [];

    // arrayString = string.split('');

    // for(let i = string.length-1; i>=0; i--){
    //     revString.push(arrayString[i]);
    // }

    // return revString.join('');

    //the shorter way of doing this is as follows:
    return string.split("").reverse().join("");
 

};

module.exports = reverseString;
