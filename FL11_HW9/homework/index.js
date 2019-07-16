
function getNumbers(string) {
    let strArr = string.split('');
    let filterArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (!isNaN(strArr[i])) {
            filterArr.push(parseInt(strArr[i]));
        }
    }
    return filterArr;
}
console.log(getNumbers());

function findTypes() {
    let argsArray = [...arguments];
    let resultObj = {};
    for (let arg of argsArray) {
        if (resultObj[typeof arg] === undefined) {
            resultObj[typeof arg] = 1;
        } else {
            resultObj[typeof arg] += 1;
        }
    }
    return resultObj;
}
console.log(findTypes());

function executeforEach(arr, func) {
    arr.forEach((item) => {
        func(item);
    });
}
console.log(executeforEach());

function mapArray(arr, func) {
    let newArr = [];
    executeforEach(arr, (el) => {
        newArr.push(func(el));
    });
    return newArr;
}
console.log(mapArray());

function filterArray(arr, func) {
    let filteredArr = [];
    executeforEach(arr, (el) => {
        if (func(el)) {
            filteredArr.push(el);
        }
    });
    return filteredArr;
}
console.log(filterArray());

function showFormattedDate(date) {
    let year = date.getFullYear();
    let month = date.toLocaleString('en', { month: 'short' });
    let day = date.getDate();
    return `Date: ${month} ${day} ${year}`;
}
console.log(showFormattedDate());

function canConvertToDate(date) {
    let validDate = new Date(date).toLocaleString();
    let isValidDate = validDate === 'Invalid Date' ? 'false' : 'true';
    return isValidDate;
}
console.log(canConvertToDate());

function daysBetween(date1, date2) {
    let diffDates = Date.parse(date2) - Date.parse(date1);
    let dayInMs = 86400000;
    let result = Math.round(diffDates / dayInMs);
    return result;
}
console.log(daysBetween());

function getAmountOfAdultPeople(data) {
    let counter = 0;
    filterArray(data, function (el) {
        let birthdayUser = el['birthday'];
        let year = 365;
        let adultAge = 18;
        let userAge = daysBetween(new Date(birthdayUser), new Date().toString()) / year;
        counter += userAge >= adultAge ? 1 : 0;
    });
    return counter;
}
console.log(getAmountOfAdultPeople());

function keys(obj) {
    let arrObjKey = [];
    for (let key in obj) {
        if (typeof obj === 'object' && Array.isArray(obj) === false) {
            arrObjKey.push(key);
        } else {
            console.log(`Error! Input object`);
        }
    }
    return arrObjKey;
}
console.log(keys());

function values(obj) {
    let arrObjKey = [];
    for (let key in obj) {
        if (typeof obj === 'object' && Array.isArray(obj) === false) {
            arrObjKey.push(obj[key]);
        } else {
            console.log(`Error! Input object`);
        }
    }
    return arrObjKey;
}

console.log(values());
