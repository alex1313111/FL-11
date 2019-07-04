let a, b, c;
do {
    console.log('Please enter a number');
    a = +prompt('Input first length of triangle sides', '');
    b = +prompt('Input second length of triangle sides', '');
    c = +prompt('Input third length of triangle sides', '');
  } while (isNaN(a) || isNaN(b) || isNaN(c));
    if (a < b + c && b < a + c && c < a + b) {
        console.log('Triangle exist');
        if (a === b && a === c && b === c) {
            console.log('Equivalent triangle');
        } else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) {
            console.log('Isosceles triangle');
        } else {
            console.log('Normal triangle');
        }
    } else {
        console.log('Triangle doesn’t exist');
    }
