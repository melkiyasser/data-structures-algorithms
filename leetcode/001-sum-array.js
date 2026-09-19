
// linear time O(n)

// function countBiggerThan15(targetArray) {
//     let count = 0;
//     for (i = 0; i < targetArray.length; i++) {
//         if (targetArray[i] >= 15) {
//             count++;
//         }
//     }
//     return count
// }

// const array = [12, 19, 21, 77, 15];

// console.log(countBiggerThan15(array))


function sumArray(arr) {
    let accumulator = 0;

    for (let i = 0; i < arr.length; i++) {
        accumulator += arr[i];
    }

    return accumulator;
}

console.log(sumArray([1, 2, 3, 4]));  // expect 10
console.log(sumArray([5]));           // expect 5
console.log(sumArray([]));            // expect 0
console.log(sumArray([-1, 1, -2, 2])); // expect 0