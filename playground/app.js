// function findOdd(A) {
//   //happy coding!
//   var obj = {};
//   A.forEach((element) => {
//     // count the number of each element in the array and save them in a object
//     if (obj[element]) {
//       obj[element]++;
//     } else {
//       obj[element] = 1;
//     }
//   });

//   // find the one appearing odd number of times.
//   for (e in obj) {
//     if (obj[e] % 2 !== 0) {
//       return parseInt(e);
//     }
//   }
// }

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// function sumDigPow(a, b) {
//   let arr = [];

//   // check if a is lower than b
//   while (a <= b) {
//     let num = a.toString();
//     let value = 0;

//     for (let i = 0; i < num.length; i++) {
//       //  pow the digit of the number and get the value
//       value += Math.pow(parseInt(num.charAt(i)), i + 1);
//     }

//     // check the value see if it equals a
//     if (value === a) {
//       arr.push(value);
//     }

//     a++;
//   }

//   return arr;
// }

// function sumDigPow(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     let sum = 0;

//     for (let j = 0; j < String(i).length; j++) {
//       sum += Math.pow(parseInt(String(i)[j]), j + 1);
//     }

//     if (sum === i) arr.push(sum);
//   }
//   return arr;
// }

// console.log(sumDigPow(1, 1000));

// var str = 'abcdef';

// console.log(str[2]);

// var uniqueInOrder = function (iterable) {
//   //your code here - remember iterable can be a string or an array

//   let arr = [];
//   let newArr = [];
//   let last;

//   !iterable instanceof Array ? (arr = iterable.split('')) : (arr = iterable);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== last) {
//       newArr.push((last = arr[i]));
//     }
//   }

//   // do {
//   //   if (arr[index] === arr[index - 1]) {
//   //     index++;
//   //   } else {
//   //     newArr.push(arr[index]);
//   //     index++;
//   //   }
//   // } while (index < arr.length);

//   return newArr;
// };

// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// //console.log([1, 2, 3, 4] instanceof Array);

// // 1. use Spread Operator [...iterable] to get iterable into an array
// // 2. use filter to filter element

// var uniqueInOrder = function (iterable) {
//   return [...iterable].filter((value, index) => value !== iterable[index - 1]);
// };

// function list(names) {
//   //your code here

//   let tmp = ...names
//   console.log(...names);
// }

// // Test.assertEquals(
// //   list([
// //     { name: 'Bart' },
// //     { name: 'Lisa' },
// //     { name: 'Maggie' },
// //     { name: 'Homer' },
// //     { name: 'Marge' },
// //   ]),
// //   'Bart, Lisa, Maggie, Homer & Marge',
// //   'Must work with many names'
// // );

// // console.log(
// //   list([
// //     { name: 'Bart' },
// //     { name: 'Lisa' },
// //     { name: 'Maggie' },
// //     { name: 'Homer' },
// //     { name: 'Marge' },
// //   ])
// // );

// list([
//   { name: 'Bart' },
//   { name: 'Lisa' },
//   { name: 'Maggie' },
//   { name: 'Homer' },
//   { name: 'Marge' },
// ]);

/********************************* IQ test ***************************************/

// function iqTest(numbers) {
//   let arr = numbers.split(' ');
//   let odd = 0;
//   let even = 0;

//   // determine whether the number of even number is more than odd number
//   for (let i = 0; i < 3; i++) {
//     arr[i] % 2 === 0 ? even++ : odd++;
//   }

//   // find the odd or even element

//   if (even > odd) {
//     return arr.findIndex((item, index) => item % 2 === 1) + 1;
//   } else {
//     return arr.findIndex((item, index) => item % 2 === 0) + 1;
//   }
// }

// console.log(iqTest('2 4 7 8 10'));

// function iqTest(numbers) {
//   // convert string to arr then to int
//   numbers = numbers.split(' ').map(function (el) {
//     return parseInt(el);
//   });

//   // separate number according to evenness
//   var odd = numbers.filter(function (el) {
//     return el % 2 === 1;
//   });
//   var even = numbers.filter(function (el) {
//     return el % 2 === 0;
//   });

//   // find the target number
//   return odd.length < even.length
//     ? numbers.indexOf(odd[0]) + 1
//     : numbers.indexOf(even[0]) + 1;
// }
// console.log(iqTest('2 4 7 8 10'));
/********************************* IQ test ***************************************/

/********************************* Write Number in Expanded Form **************/

// expandedForm(70304), '70000 + 300 + 4'

// function expandedForm(num) {
//   let str = String(num);
//   let counter = str.length - 1;
//   let newStr = '';
//   let reg = /[123456789]/;
//   let tmpStr = str;

//   // expandedForm(101000);

//   for (let i = 0; i < str.length; i++) {
//     // get the current leading number ^ counter
//     let result = parseInt(str.charAt(i) * Math.pow(10, counter));

//     // in order to check if the rest numbers are all 0
//     tmpStr = tmpStr.slice(1);

//     // rest numbers are not all 0
//     if (reg.test(tmpStr)) {
//       if (result !== 0) {
//         newStr += result + ' + ';
//       }
//       // rest numbers are all 0
//     } else {
//       newStr += result;
//       break;
//     }
//     counter--;
//   }
//   return newStr;
// }

// 1. convert number to string

// 2. convert string to arr using map and supplying each element enough 0 using repeat (number + '0'.repeat)

// 3. using filter to remove all 0 in the array

// 5. using join converting array to string and add '+'

// function expandedForm(num) {
//   return String(num)
//     .split('')
//     .map((number, index) => {
//       return number + '0'.repeat(String(num).length - index - 1);
//     })
//     .filter((number) => {
//       return number != 0; // NOT use number !== 0
//     })
//     .join(' + ');
// }
// console.log(00000 == 0); // true
// console.log(expandedForm(10100101));

/********************************* Pete, the baker ************************************/

// function cakes(recipe, available) {
//   let min = Number.MAX_SAFE_INTEGER + 1;

//   // loop the food in recipe
//   for (food in recipe) {
//     // check if available has the food
//     if (available.hasOwnProperty(food)) {
//       // get the number of food it can make
//       let nums = Math.floor(available[food] / recipe[food]);
//       // the minimist value
//       min = Math.min(nums, min);
//     } else {
//       // available does not has the food
//       return 0;
//     }
//   }
//   return min;
// }

// function cakes(recipe, available) {
//   let numOfCake = [];

//   // loop the food in recipe
//   for (food in recipe) {
//     // check if available has the food
//     if (available.hasOwnProperty(food)) {
//       // push the number of food it can make into an array
//       numOfCake.push(Math.floor(available[food] / recipe[food]));
//     } else {
//       // available does not has the food
//       return 0;
//     }
//   }

//   // find the mini value in the array
//   return Math.min.apply(Math, numOfCake);
// }

// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );

/************************** Simple Pig Latin  ***********************/

// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word.
// Leave punctuation marks untouched.

// function pigIt(str) {
//   var letters = /^[0-9a-zA-Z]+$/;
//   // get arr without non-letters
//   let arr = str.split(' ').filter((e) => letters.test(e));

//   // Move the first letter of each word to the end of it,
//   // then add "ay" to the end of the word.
//   arr = arr.map((element) => {
//     return element.substring(1) + element.charAt(0) + 'ay';
//   });

//   if (!letters.test(str.charAt(str.length - 1))) {
//     arr.push(str[str.length - 1]);
//   }

//   return arr.join(' ');
// }

// function pigIt(str) {
//   var letters = /^[0-9a-zA-Z]+$/;

//   // convert arr to array
//   // Move the first letter of each word to the end of it,
//   // then add "ay" to the end of the word.
//   let arr = str.split(' ').map((element) => {
//     return element.substring(1) + element[0] + 'ay';
//   });

//   // check if the str contains non letter
//   if (!letters.test(str.slice(-1))) {
//     // if so replace last char and add the non letter signal
//     arr.splice(arr.length - 1, 1, str.slice(-1));
//   }

//   return arr.join(' ');
// }

// function pigIt(str) {
//   return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
// }

// console.log(pigIt('Hello world ?'));

/****************************The Hashtag Generator ***********************/

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
// function generateHashtag(str) {
//   // convert str to an arr and git rid of elements which is empty
//   let arr = str.split(' ');

//   // convert the first char of an element to uppercase
//   arr = arr.map((e) => {
//     return e.charAt(0).toUpperCase() + e.substring(1);
//   });

//   console.log(arr);

//   // add # and convert it to arr
//   str = '#' + arr.join('');

//   // make sure the str length is not larger than 140 or only # left
//   return str.length > 140 || str.length === 1 ? false : str;
// }

// function generateHashtag(str) {
//   if (!str || str.length < 1) return false;

//   var r = '#' + str.split(' ').map(function (el) {
//     return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//   }).join('');
//   return r.length > 140 ? false : r;
// }

// console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

// let reg1 = /^[A-Z]$/; // filter Capital letters
// let reg2 = /^[a-z]$/; // filter other letters
// let reg3 = /^\d$/; // filter numbers

// console.log(reg1.test('a'));
// console.log(reg3.test(1));
