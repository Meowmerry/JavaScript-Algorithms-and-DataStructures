/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */


/* 
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
function sumAll(arr) {
    let min, max;
    if (arr[0] > arr[1]) {
        max = arr[0]
        min = arr[1]
    } else {
        max = arr[1]
        min = arr[0]
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([1, 4])); // 10

/* ========================== SOLUTION 2  ======================================
================================================================================ */
function sumAll1(arr) {
    const min = arr[0] < arr[1] ? arr[0] : arr[1]
    const max = arr[0] > arr[1] ? arr[0] : arr[1]
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll1([4, 4])); // 4

/* ========================== SOLUTION 2  ======================================
================================================================================ */
function sumAll2(arr) {
    let sum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll2([1, 4])); // 4
/* ========================== SOLUTION 3  ======================================
================================================================================ */
function sumAll(arr) {
    // check which number is max
    const max = Math.max(...arr);
    // check which number is min
    const min = Math.min(...arr);
    // declare a variable sum assign to 0;
    let sum = 0;
    // iterate thru max number, init first index assign to min
    for (let i = min; i <= max; i++) {
        // each time iteration, increment min by 1 and reassign sum to it;
        sum += i
    }
    return sum;
}
console.log(sumAll2([1, 4])); // 4

