/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* 
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
/* ========================== SOLUTION 1  ======================================
================================================================================ */
function diffArray(arr1, arr2) {
    const union = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!union.includes(arr1[i])) {
            union.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!union.includes(arr2[i])) {
            union.push(arr2[i])
        }
    }
    const symmDiff = [];
    for (let i = 0; i < union.length; i++) {
        const currentEl = union[i]
        if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
            symmDiff.push(currentEl)
        } else if (!arr1.includes(currentEl) && arr2.includes(currentEl)) {
            symmDiff.push(currentEl)
        }
    }
    return symmDiff;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));//should return [4].
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));//should return ["pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));//should return ["diorite", "pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); //should return [].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));//should return ["piglet", 4].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); //should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); //should return [1, "calf", 3, "piglet", 7, "filly"].


/* ========================== SOLUTION 2  ======================================
================================================================================ */
function diffArray(arr1, arr2) {
    const union = [];
    for (const el of arr1) {
        if (!union.includes(el)) {
            union.push(el)
        }
    }
    for (const el of arr2) {
        if (!union.includes(el)) {
            union.push(el)
        }
    }
    const symmDiff = [];
    for (const currentEl of union) {
        if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
            symmDiff.push(currentEl)
        } else if (!arr1.includes(currentEl) && arr2.includes(currentEl)) {
            symmDiff.push(currentEl)
        }
    }
    return symmDiff;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));//should return [4].
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));//should return ["pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));//should return ["diorite", "pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); //should return [].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));//should return ["piglet", 4].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); //should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); //should return [1, "calf", 3, "piglet", 7, "filly"].

/* ========================== SOLUTION 3  ======================================
================================================================================ */
function diffArray(arr1, arr2) {
    const union = [...new Set([...arr1, ...arr2].flat())];
    return union.reduce((output, curr) => {
        if (arr1.includes(curr) && !arr2.includes(curr)) {
            output.push(curr)
        } else if (!arr1.includes(curr) && arr2.includes(curr)) {
            output.push(curr)
        }
        return output;
    }, [])
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));//should return [4].
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));//should return ["pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));//should return ["diorite", "pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); //should return [].
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));//should return ["piglet", 4].
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); //should return ["snuffleupagus", "cookie monster", "elmo"].
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); //should return [1, "calf", 3, "piglet", 7, "filly"].


