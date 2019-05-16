/*
everyNth
Returns every nth element in an array.

Use Array.prototype.filter() to create a new array that contains every nth element of a given array.
*/

/**
 * 
 * @param {[]} arr 
 * @param {number} nth 
 */
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

let data = [1,2,3,4,5,6]

console.log(everyNth(data, 2));