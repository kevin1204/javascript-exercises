const getTheTitles = function(books) {
    // return books.map(book => book.title);

    //the callback function is basically like saying this
    // function(book) {
    //     return book.title;
    // }

    //under this principle we can then also code like this: 

    let titles = books.map(function(book) {
        return book.title;
    });

    return titles;

};


// Do not edit below this line
module.exports = getTheTitles;
