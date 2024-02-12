
/**
 * 
 * 01 : Write a function that will take an array as input, sort, and return the array in descending
 * order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]. 
 * 
 */
const SortAnyArry = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let unsortedArray = [3, 2, 7, 4, 6, 9]
let sortedArray = SortAnyArry(unsortedArray)

// console.log('Initial Array : ', unsortedArray);
// console.log('Sorted Array : ', sortedArray);

/**
 * Output
 * Initial Array :  [ 9, 7, 6, 4, 3, 2 ]
 * Sorted Array :  [ 9, 7, 6, 4, 3, 2 ]
 */


/**
 * 
 * Write a function that will take a string as input, check and return if it is palindrome or
 * not. For example, if the string is “madam” the function should return true and if the string
 * is “doctor” it should return false. 
 * 
 */

const checkIfItIsPalindrome = (str) => {
    let len = str.length - 1
    let start = 0, end = len;

    let isPalindrome = true
    while (start != len) {
        if (str[start] !== str[end]) {
            isPalindrome = false
        }
        start++;
        end--;
    }
    return isPalindrome
}
let result1 = checkIfItIsPalindrome('madam')
let result2 = checkIfItIsPalindrome('doctor')

console.log('result 1', result1);
console.log('result 2', result2);

/**
 * Output
 * madam : true
 * doctor :  false
 */


/**
 * Q#3: Write a function that will take an array as input and return the sum of the two largest
 * numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
 * because 11 and 19 are the largest numbers
*/

let numbers = [3, 7, 1, 5, 11, 19]

const FindSumOfTwoLargestNumbers = (arr) => {
    let sortItFirst = SortAnyArry(arr)
    if (sortItFirst.length == 0) {
        return 0;
    }
    let sumOfTwoNums = sortItFirst[0] + (sortItFirst[1] || 0)
    console.log('sum of the two largest numbres : ', sumOfTwoNums);

}

FindSumOfTwoLargestNumbers(numbers)
/**
 * Output
 * sum of the two largest numbres :  30
 */


/**
 * 
 * Q#4: Write a function that will take an array as input and return an array with every missing
 * element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
 * entry is 9, and missing numbers are [0,5,8] 
 */

const findMissingNumbers = (arr) => {

    let missingNumbers = [];
    let sortFirst = SortAnyArry(arr);
    let maxValue = sortFirst[0];
    for (let i = 0; i <= maxValue; i++) {
        let isNumberInArrayStack = true;
        for (let j = 0; j < maxValue - 1; j++) {
            if (i == arr[j]) {
                isNumberInArrayStack = false
            }
        }
        isNumberInArrayStack && missingNumbers.push(i)
    }
    return missingNumbers
}


let missingNumbers = findMissingNumbers([3, 4, 9, 1, 7, 3, 2, 6])
console.log('Numbers : ', missingNumbers);

/**
 * Output
 * Numbers :  [ 0, 5, 8 ]
 */




/**
 * Q#5: Write a function that will take an array of numbers and return the number most repeated
 * in the array with how many times it was repeated. For example, if the array is
 * [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times. 
 */

const FindMostRepeatedNumber = (arr) => {

    let count = 0;
    let maxNumber = 0
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let val = arr[i]
        let count2 = 0;
        for (let j = 0; j < len; j++) {
            if (val == arr[j]) {
                count2 += 1
            }

        }
        if (count2 > count) {
            count = count2;
            maxNumber = val
        }


    }

    return [maxNumber, count]
}

const [number, repeated] = FindMostRepeatedNumber([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5])
console.log(`${number} is repeated ${repeated} times`);


/**
 * Q#6: Write a function that will take an array as input, it will rotate the array to the right 1 time
 * and return the rotated array. Rotation of the array means that each element is shifted right
 * by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]
 */

const shiftValueByOneIndex = (arr) => {
    let len = arr.length
    let lastVal = arr[len - 1];
    let newArr = []

    for (let i = len - 1; i > 0; i--) {
        newArr[i] = arr[i - 1];
    }
    newArr[0] = lastVal;

    return newArr


}
let testArry = [3, 8, 9, 7, 6]
let rotation = shiftValueByOneIndex(testArry)
console.log('the rotation of array', testArry, ' is ', rotation);
