function isInteger(number) {
    return (number ^ 0) === number;
}
isInteger(5);
isInteger(5.1);
