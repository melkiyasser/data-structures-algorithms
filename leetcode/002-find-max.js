

// O(n)

function findMax(arr) {
    if (arr.length === 0) {
        return null
    }
    let maxSoFar = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxSoFar) {
            maxSoFar = arr[i]
        }
    }
    return maxSoFar
}

console.log(findMax([3, 9, 2, 7]));      // expect 9
console.log(findMax([5]));               // expect 5
console.log(findMax([-4, -1, -8]));      // expect -1
console.log(findMax([])); 