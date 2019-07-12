function addOne(x) {
    return x + 1;
}

function pipe() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let resultFn = arguments[i](result);
        result = resultFn;
    }
    return result;
}
pipe(1, addOne);
pipe(1, addOne, addOne);
