function getNumbers(string) {
    return string.split('').map((el) => parseInt(el)).filter((el) => !isNaN(el));
}


getNumbers(`string`); // returns []
getNumbers(`n1um3ber95`); // returns [1,3,9,5]
