const palindromes = function (string) {
    // const arry1 = string.split('');
    // const arry2 = [];
    // for(let i = arry1.length - 1; i>=0; i--) {
    //     arry2.push(arry1[i]);
    // }
    
    // //ser a variabler with the punctation marks!
    // const regex = /[ \!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\\\|\'\"\;\:\,\.\<\>\/\?]/g;
    
    // let string2 = arry2.join('');

    // string = string.replace(regex, '').toLowerCase();
    // string2 = string2.replace(regex, '').toLowerCase();
    
    // return string === string2 ? true : false;

    //cleaner and (maybe) better solution would've been
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    //in this case we convert the string to an array with the split method
    //then we reverse the order and then we convert the array to an string once it is converted.
    return processedString.split("").reverse().join("") == processedString; 
};

// Do not edit below this line
module.exports = palindromes;
