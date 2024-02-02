//1

const nestedArray = [1, [2, 3], [[4], [5, 6]], 7];

function sumNestedArr (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum = sum + sumNestedArr(arr[i]);
        } else {
            sum = sum + arr[i];
        }
    }
    return sum;
}
console.log(sumNestedArr(nestedArray));
//2

const users = [{ id: 1, name: 'Иван' }, { id: 2, name: 'Ольга' }];

function arrToObj (obj) {
    const result = {};
    for (i = 0; i < obj.length; i++) {
        result[users[i].id] = users[i].name;
    }
    return result;
}
console.log(users)
console.log(arrToObj(users));

//3

const data = [
    { user: { id: 1, name: 'Иван', age: 25 } }, 
    { user: { id: 2, name: 'Ольга', age: 30 } }
];

function filterFunc (obj, age) {
    for (let el of obj) {
        if (age === el.user.age) {
            console.log(`Имя:${el.user.name}, id: ${el.user.id}`);
        } 
    }
}

filterFunc (data, 30);
filterFunc (data, 25);

//4
const keys = ['id', 'name'];
const values = [1, 'Иван'];

function fromArrToObj (keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i]; 
    }
    return obj;
}

console.log(fromArrToObj(keys, values));

//5

const input = { a: '1', b: '2' };

function swap (obj) {
    let newObj = {};
    let arr = Object.entries(obj);
    for (let el of arr) {
        newObj[el[1]] = el[0];
    }
    return newObj;
} 

console.log(swap(input));


//6

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

function func (arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        for (let el of arr2) {
            if (arr1[i] === el) {
                console.log(`совпадает число ${arr1[i]}`);
            }
        }
    }
}
func (arr1, arr2);


//7


function difference(arr1, arr2) {
    let result = [];
    for (i = 0; i < arr1.length; i++) {
        if (arr1.includes(arr2[i])) {
            result[i] = arr1[i];
        }
    }
    return result;
}
console.log(difference(arr1, arr2));