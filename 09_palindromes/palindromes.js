const palindromes = function (string) {
    const arry1 = string.split('');
    const arry2 = [];
    for(let i = arry1.length - 1; i>=0; i--) {
        arry2.push(arry1[i]);
    }
    
    //ser a variabler with the punctation marks!
    const regex = /[ \!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\\\|\'\"\;\:\,\.\<\>\/\?]/g;
    
    let string2 = arry2.join('');

    string = string.replace(regex, '').toLowerCase();
    string2 = string2.replace(regex, '').toLowerCase();
    
    return string === string2 ? true : false;
};

// console.log(palindromes('hola como estas?/'));
// Do not edit below this line
module.exports = palindromes;
