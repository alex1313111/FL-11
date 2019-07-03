let a1, a2, b1, b2, c1, c2, halfX, halfY;
a1 = +prompt('Input A1 coordinate', '');
a2 = +prompt('Input A2 coordinate', '');
b1 = +prompt('Input B1 coordinate', '');
b2 = +prompt('Input B2 coordinate', '');
c1 = +prompt('Input C1 coordinate', '');
c2 = +prompt('InputC21 coordinate', '');
halfX = (a1 + b1) / 2;
halfY = (a2 + b2) / 2;
if (halfX == c1 && halfY == c2) {
    console.log('C divides AB segment by half');
} else console.log('C doesn’t devide AB segment by half');
