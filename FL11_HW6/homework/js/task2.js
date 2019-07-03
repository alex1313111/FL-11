let a,b,c;
a = +prompt('Input first length of triangle sides', '');
b = +prompt('Input second length of triangle sides', '');
c = +prompt('Input third length of triangle sides', '');
if (a<b+c && b<a+c && c<a+b) {
    console.log('Triangle exist');
    if (a==b && a==c && b==c){
        console.log('Eequivalent triangle');
    } else if (a==b && a!=c || a==c && a!=b || b==c && b!=a) {
        console.log('Isosceles triangle');
    } else console.log('Normal triangle');
} else console.log('Triangle doesn’t exist');
