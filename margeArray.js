function arraysSort(arr1, arr2) {
    let target = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            target.push(arr1.shift());
        } else {
            target.push(arr2.shift());
        }
    }
    return [...target, ...arr1, ...arr2];
}

function merge(arr1, arr2, arr3, arr4, arr5) {
    let arg = [...[arr1, arr2, arr3, arr4, arr5]];
    let newArray = [];
    let tempArr;
    while (arg.length > 1) {
        let array1 = arg.shift();
        let array2 = arg.shift();
        newArray.push(arraysSort(array1, array2));
    }
    tempArr = arraysSort(...newArray);
    newArray = [];
    newArray.push(tempArr);
    return arraysSort(...newArray, ...arg);
}

let arr1 = [2,4, 6, 10];
let arr2 = [1, 4, 13, 24];
let arr3 = [2, 7, 11, 34];
let arr4 = [8, 13, 45];
let arr5 = [23, 45];
console.log(merge(arr1, arr2, arr3, arr4, arr5));
