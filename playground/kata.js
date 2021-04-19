// function pickPeaks(arr) {
//   // for test cases which have negative value
//   let max = -100;
//   let pos = [];
//   let peaks = [];
//   let counter = 0;

//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       if (max > arr[i - 1] && max >= arr[i + 1]) {
//         counter = i + 1;

//         while (counter < arr.length) {
//           // [2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]}
//           // for this kind of case, filter all value which equals current max
//           if (max === arr[counter]) {
//             counter++;
//             // until the final one, check if it is larger than the recorded max
//           } else if (max > arr[counter]) {
//             peaks.push(max);
//             pos.push(i);
//             break;
//           } else {
//             break;
//           }
//         }
//       }
//     }
//     max = -100;
//   }

//   return {
//     pos,
//     peaks,
//   };
// }

// function pickPeaks(arr) {
//   var result = { pos: [], peaks: [] };
//   if (arr.length > 2) {
//     var pos = -1;
//     for (var i = 1; i < arr.length; i++) {
//       // find the target element , record its position
//       if (arr[i] > arr[i - 1]) {
//         pos = i;

//         // [2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]}
//         // in this case, move to the position of element 1; if it is smaller than arr[pos], then record it.
//       } else if (arr[i] < arr[i - 1] && pos != -1) {
//         result.pos.push(pos);
//         result.peaks.push(arr[pos]);
//         pos = -1;
//       }
//     }
//   }
//   return result;
// }
// console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]));
// {pos: [1], peaks: [2]}

// [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]  {pos: [3, 7], peaks: [6, 3]}
// [1, 2, 2, 2, 1]; {pos: [1], peaks: [2]}
// [1, 2, 2, 2, 3]; no peak

// [2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]}
// [2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]}

/************************  Maximum subarray sum  *************************/
// var maxSequence = function (arr) {
//   let maxSoFar = 0;
//   let maxEndingHere = 0;

//   //maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//   for (let i = 0; i < arr.length; i++) {
//     maxEndingHere = maxEndingHere + arr[i];

//     if (maxSoFar < maxEndingHere) {
//       maxSoFar = maxEndingHere;
//     }

//     if (maxEndingHere < 0) {
//       maxEndingHere = 0;
//     }
//   }
//   return maxSoFar;
// };

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// var maxSequence = function (arr) {
//   var min = 0,
//     ans = 0,
//     i,
//     sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// };

/******************* Is my friend cheating? ****************/
// function removeNb(n) {
//   let currentNumber = 0;
//   let testingNumber = 0;
//   // count how many target pairs
//   let tmpResult = [];
//   let finalResult = [];
//   let sum = getSum(n);

//   for (let i = 0; i <= n; i++) {
//     // record the current testing number
//     currentNumber = i;
//     // console.log('currentNumber ' + currentNumber);
//     for (let j = currentNumber + 1; j <= n; j++) {
//       testingNumber = currentNumber * j;
//       if (testingNumber === sum - currentNumber - j) {
//         tmpResult.push(currentNumber);
//         tmpResult.push(j);
//         finalResult.push(tmpResult);
//         let reverseResult = tmpResult.slice(0);
//         finalResult.push(reverseResult.reverse());
//         return finalResult;
//       }
//     }
//   }
//   return finalResult;
// }

// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// // console.log(getRestSum(1, 7, 5));

// console.log((26 * 27) / 2);

// console.log(removeNb(26));

// function removeNb(n) {
//   let rightSide = (n * (n + 1)) / 2 + 1;
//   let result = [];
//   let reverseResult = [];
//   let finalResult = [];

//   for (let i = 0; i < n; i++) {
//     if (isPrime(i)) {
//       continue;
//     }
//     for (let j = i + 1; j < n; j++) {
//       if ((i + 1) * (j + 1) === rightSide) {
//         result.push(i);
//         result.push(j);
//         finalResult.push(result);
//         reverseResult = result.slice(0);
//         finalResult.push(reverseResult.reverse());
//         return finalResult;
//       }
//     }
//   }
//   return finalResult;
// }

// function isPrime(value) {
//   for (var i = 2; i < value; i++) {
//     if (value % i === 0) {
//       return false;
//     }
//   }
//   return value > 1;
// }

// function removeNb(n) {
//   let result = [];

//   for (let a = 0; a < n; a++) {

//     let b = ((n * (n + 1)) / 2 - a) / (a + 1);

//     // make sure b is a int and lower than n
//     if (b % 1 === 0 && b < n) {
//       result.push([a, b]);
//     }
//   }
//   return result;
// }

/****************************** Molecule to atoms ********************************/

// function parseMolecule(formula) {
//   // convert formula string to array and separate letters or brackets and numbers

//   let arr = formula.split('');

//   arr.forEach((element, index) => {
//     let currentElement = parseInt(element);
//     if (!isNaN(currentElement)) {
//       arr[index] = currentElement;
//     }
//   });

//   let reg1 = /^[A-Z]$/; // filter Capital letters
//   let reg2 = /^[a-z]$/; // filter other letters
//   let reg3 = /^\d$/; // filter numbers

//   let chemistry = {};
//   let count = 0;
//   let name = '';
//   let number = 0;
//   let flag = false;
//   let flag1 = false;
//   // console.log(arr);

//   while (count < arr.length) {
//     // if it is a letter
//     if (reg1.test(arr[count])) {
//       name += arr[count];

//       if (reg2.test(arr[count + 1])) {
//         name += arr[count + 1];
//         count++;
//       }
//     }

//     if (arr[count] === '(') {
//       flag = true;
//     } else if (arr[count] === '[') {
//       flag1 = true;
//     }

//     // 'K4[ON(SO3)2]2'

//     if (flag) {
//       number = arr[arr.indexOf(')') + 1];
//     }
//     if (flag1) {
//       number += arr[arr.indexOf(']') + 1];
//     }

//     if (arr[count] === ')') {
//       flag = false;
//       count++;
//     } else if (arr[count] === ']') {
//       flag1 = false;
//       count++;
//     }

//     count++;

//     if (reg3.test(arr[count])) {
//       number += arr[count];
//       count++;
//     }
//     //H2O

//     if (number === 0 || number === undefined) {
//       number = 1;
//     }
//     if (name !== '') chemistry[name] = number;
//     name = '';
//     number = 0;
//   }
//   return chemistry;
// }

// var water = 'K4[ON(SO3)2]2';

// console.log(parseMolecule(water));
// // var water = 'H2O';
// // parseMolecule(water); // return {H: 2, O: 1}

// // var magnesiumHydroxide = 'Mg(OH)2';
// // parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// // var fremySalt = 'K4[ON(SO3)2]2';
// // parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
/****************************** Molecule to atoms ********************************/

/*************************** give me a diamond *******************************/
// function diamond(n) {
//   if (n % 2 === 0 || n < 0) {
//     return null;
//   }

//   let j = 0;
//   let diamond = '';

//   for (let i = 1; i <= n; i++) {
//     let middle = (n + 1) / 2;
//     j = i < middle ? i : n - i + 1;
//     diamond += ' '.repeat(middle - j) + '*'.repeat(j * 2 - 1) + '\n';
//   }

//   return diamond;
// }

// function diamond(n) {
//   if (n % 2 === 0 || n < 0) {
//     return null;
//   }

//   diam = '';
//   let middle = (n - 1) / 2;

//   for (let i = 0; i < middle; i++) {
//     let space = middle - i;
//     diam += ' '.repeat(space) + '*'.repeat(i * 2 + 1) + '\n';
//   }

//   diam += '*'.repeat(n) + '\n';

//   for (let j = middle + 1; j < n; j++) {
//     let space = j - middle;
//     diam += ' '.repeat(space) + '*'.repeat(n - (j - middle) * 2) + '\n';
//   }
//   return diam;
// }

// console.log(diamond(5));

// console.log('  *\n ***\n*****\n ***\n  *\n');
/*************************** give me a diamond *******************************/

/****************************** Encrypt this! *******************************/
// var encryptThis = function (text) {
//   return text.replace(/(\w)(\w)(\w*)(\w)(\s|$)/g, '$1' + '$4$3$2$5');
// };

// console.log(encryptThis('hello world'));

// var encryptThis = function (propertyName) {
//   function upperToHyphenLower(match, offset, string) {
//     let str = '';

//     if (match.length > 2) {
//       str =
//         match.charCodeAt(0) +
//         string[string.length - 1] +
//         string.slice(1, -1) +
//         string[0];
//     } else if (match.length === 1) {
//       str = match.charCodeAt(0);
//     } else {
//       str = match.charCodeAt(0) + string[string.length - 1];
//     }

//     return str;
//   }
//   return propertyName.replace(/(\w)(\w*)(|$)/g, upperToHyphenLower);
// };

// return text.replace(/(\w)(\w)(\w*)(\w)(\s|$)/g, '$1' + '$4$3$2$5');
// var encryptThis = function (text) {
//   return text
//     .split(' ')
//     .map((value) =>
//       value
//         .replace(/^(\w)(\w)(\w*)(\w)$/, '$1$4$3$2')
//         .replace(/^\w/, value.charCodeAt(0))
//     )
//     .join(' ');
// };

// console.log(encryptThis('Hello World'));

/***************************** Count characters in your string **************************/

// function count(string) {
//   let obj = {};

//   for (let i = 0; i < string.length; i++) {
//     obj[string[i]] ? obj[string[i]]++ : (obj[string[i]] = 1);
//   }

//   return obj;
// }

// console.log(count('aba'));

/********************************** Reverse or rotate? **********************************/
//If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2,
// reverse that chunk; otherwise rotate it to the left by one position.
// Put together these modified chunks and return the result as a string.

// function revrot(str, sz) {
//   // 1. sub the string, get rid of extra part
//   if (sz === 0) return '';

//   let arr = [];

//   // split large string in n-size chunks
//   arr = str.match(new RegExp('.{1,' + sz + '}', 'g'));

//   if (arr[arr.length - 1].length < sz) {
//     arr.pop();
//   }

//   arr.map((value, index) => {
//     let sum = 0;
//     //  sum of the cubes of its digits
//     for (let i = 0; i < value.length; i++) {
//       sum += Math.pow(value[i], 3);
//     }

//     // dividable by 2 reverse
//     if (sum % 2 === 0) {
//       arr[index] = value.split('').reverse().join('');
//     } else {
//       // rotate it to the left by one position.
//       //let leadingDigit = value.charAt(0);

//       //  arr[index] = value.substring(1, value.length) + leadingDigit;
//       arr[index] = value.slice(1) + value.slice(0, 1);
//     }
//   });

//   return arr.join('');
// }

// s = '733049910872815764';

// console.log(revrot(s, 5));

/****************************** Two sum *******************************/
// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     let num1 = numbers[i];
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (num1 + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum([2, 2, 3], 4));

/******************** Word a10n (abbreviation) ********************/
// function abbreviate(string) {
//   let arr = string.split(' ');

//   arr.forEach((element, index) => {
//     let length = element.length;

//     // pick out the cases including '-'
//     if (element.includes('-')) {
//       let arr2 = element.split('-');
//       // handle the case
//       arr2.forEach((e, i) => {
//         arr2[i] = e[0] + (e.length - 2) + e[e.length - 1];
//       });

//       arr[index] = arr2.join('-');

//       // deal with cases including ','
//     } else if (length > 3 && element.includes(',')) {
//       arr[index] = element[0] + (length - 3) + element[length - 2] + ',';
//     } else if (length > 3 && !element.includes(',')) {
//       arr[index] = element[0] + (length - 2) + element[length - 1];
//     }
//   });

//   return arr.join(' ');
// }

// // "e6t-r2e"
// console.log(abbreviate('sat monolithic mat double-barreled doggy'));

// "i18n"
// console.log(abbreviate('internationalization'));

// You need, need not want, to complete this code-wars mission
// (You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n)

// is sat mat doggy  (is sat mat d3y)

// sat monolithic mat double-barreled doggy (sat m8c mat d4e-b6d d3y)

/************************ longest_palindrome ***************************/

// longestPalindrome = function (s) {
//   let searchMax = 0;
//   let max = 1;
//   if (s === '') return 0;

//   if (s.length === 1) return 1;

//   if (s.length <= 3) {
//     if (
//       s.charAt(0) === s.charAt(1) ||
//       s.charAt(0) === s.charAt(2) ||
//       s.charAt(1) === s.charAt(2)
//     ) {
//       return 2;
//     } else if (s.charAt(0) === s.charAt(1) && s.charAt(1) === s.charAt(2)) {
//       return 3;
//     }
//   }

//   for (let i = 0; i < s.length; i++) {
//     let char1 = s.charAt(i);
//     let char2 = s.charAt(i + 1);
//     let char3 = s.charAt(i + 2);
//     let char4 = s.charAt(i + 3);
//     let char4 = s.charAt(i + 5);

//     let target = char5 + char4 + char3 + char2 + char1;

//     let result = s.search(target);

//     if (result > searchMax) {
//       searchMax = result;

//       let tmp = searchMax - i + 4;

//       if (tmp > max) {
//         max = tmp;
//       }
//     }
//   }

//   return max;
// };

// longestPalindrome = function (s) {
//   if (s.length === 0) return 0;

//   let maxString = 0;
//   let finalLength = 1;
//   if (s.length < 20) {
//     for (let i = 0; i < s.length; i++) {
//       let char1 = s.charAt(i);
//       let char2 = s.charAt(i + 1);
//       let target = char2 + char1;
//       let str1 = '';
//       let str2 = '';

//       let result = s.search(target);

//       if (result != -1) {
//         str1 = s.slice(i, result) + target;
//         if (str1.length > maxString) {
//           maxString = str1.length;

//           for (let j = result + 1; j >= i; j--) {
//             str2 += s.charAt(j);
//           }

//           if (str1 === str2) {
//             if (str1.length > finalLength) {
//               finalLength = str1.length;
//             }
//           }
//         }
//       }
//     }
//   } else {
//     for (let i = 0; i < s.length; i++) {
//       let char1 = s.charAt(i);
//       let char2 = s.charAt(i + 1);
//       let char3 = s.charAt(i + 2);
//       let char4 = s.charAt(i + 3);
//       let char5 = s.charAt(i + 4);
//       let target = char5 + char4 + char3 + char2 + char1;
//       let str1 = '';
//       let str2 = '';

//       let result = s.search(target);

//       if (result != -1) {
//         str1 = s.slice(i, result) + target;
//         if (str1.length > maxString) {
//           maxString = str1.length;

//           console.log(str1);

//           // console.log(maxString);

//           for (let j = result + 4; j >= i; j--) {
//             str2 += s.charAt(j);
//           }

//           if (str1 === str2) {
//             //   console.log('str2' + str2);
//             if (str1.length > finalLength) {
//               finalLength = str1.length;
//             }
//           }
//         }
//       }
//     }
//   }

//   //   console.log(maxString);
//   return finalLength;
// };

// // console.log(longestPalindrome('abcdefghba'));
// // 6

// // longestPalindrome('baabcd'); // 4

// console.log(longestPalindrome('baabcd'));

// // longestPalindrome('baablkj12345432133d'); // 9

// // str = 'abcdefghijk';

// // console.log(str.search('ef'));
// // console.log(s);

// longestPalindrome = function (s) {
//   if (!s) return 0;

//   for (let i = s.length; i > 0; i--) {
//     for (let j = 0; j <= s.length - i; j++) {
//       let check = s.substr(j, i);
//       if (check === check.split('').reverse().join('')) return i;
//     }
//   }
// };

// console.log(longestPalindrome('baccad'));

/********************* Break camelCase *****************/

// function solution(s) {
//   let tmp = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s.charAt(i) === s.charAt(i).toUpperCase()) {
//       tmp += ' ' + s.charAt(i);
//     } else {
//       tmp += s.charAt(i);
//     }
//   }

//   return tmp;
// }

// function solution(s) {
//   return s.replace(/([A-Z])/g, ' $1');
// }

// console.log(solution('camelCasing'));

/***************************** Replace With Alphabet Position **********************/

// function alphabetPosition(text) {
//   let alphabet = ' abcdefghijklmnopqrstuvwxyz';
//   let reg = /^[A-Za-z]$/;

//   let result = '';

//   let arr = text.split('');

//   arr.forEach((element, index) => {
//     if (reg.test(element)) {
//       result += alphabet.indexOf(arr[index].toLowerCase()) + ' ';
//     }
//   });
//   return result.slice(0, -1);
// }

// function alphabetPosition(text) {
//   return text
//     .toLowerCase()
//     .match(/[a-z]/gi)
//     .map((e) => e.charCodeAt() - 64)
//     .join(' ');
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

/*************************** Vasya - Clerk *************************/

// function tickets(peopleInLine) {
//   let twentyFive = 0;
//   let fifty = 0;
//   let flag = true;

//   peopleInLine.forEach((element, index) => {
//     if (element === 25) {
//       twentyFive++;
//     } else if (element === 50) {
//       if (twentyFive > 0) {
//         twentyFive--;
//         fifty++;
//       } else {
//         console.log('test');
//         flag = false;
//       }
//     } else if (element === 100) {
//       if (twentyFive >= 1 && fifty >= 1) {
//         twentyFive--;
//         fifty--;
//       } else if (twentyFive >= 3) {
//         twentyFive = twentyFive - 3;
//       } else {
//         flag = false;
//       }
//     }
//   });

//   if (flag) {
//     return 'YES';
//   } else {
//     return 'NO';
//   }
// }
// function tickets(peopleInLine) {
//   let money = {
//     25: 0,
//     50: 0,
//     100: 0,
//   };

//   for (element of peopleInLine) {
//     switch (element) {
//       case 25:
//         money[25]++;
//         break;
//       case 50:
//         money[25]--;
//         money[50]++;
//         break;
//       case 100:
//         money[50] ? money[50]-- : (money[25] -= 2);
//         money[25]--;
//         break;
//     }

//     if (money[25] < 0) return 'NO';
//   }

//   return 'YES';
// }

// // 1. the money he has must more than the next - 25
// // 2.

// console.log(tickets([25, 100, 100, 100]));
// tickets([25, 25, 50]);
// tickets([25, 100])
// tickets([25, 25, 50, 50, 100])

/********************* Calculating with Functions *********************/

// function zero() {}
// function one() {}
// function two() {}
// function three() {}
// function four() {}
// function five() {
//   return 5;
// }
// function six() {}
// function seven(func) {
//   return 7;
// }
// function eight() {}
// function nine() {}

// function plus(callback) {}
// function minus(callback) {}

// function times() {
//   return 1;
// }
// function dividedBy(num) {}

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// eight(dividedBy(three()));

// console.log(times(five()));

// function calculating(num1, num2) {
//   switch (true) {
//     case num1 === undefined:
//       return num2;
//     case num1.charAt(0) === '*':
//       return num2 * parseInt(num1.slice(1));
//     case num1.charAt(0) === '/':
//       return Math.floor(num2 / parseInt(num1.slice(1)));
//     case num1.charAt(0) === '+':
//       return num2 + parseInt(num1.slice(1));
//     case num1.charAt(0) === '-':
//       return num2 - parseInt(num1.slice(1));
//   }
// }

// function zero(num) {
//   return calculating(num, 0);
// }

// function one(num) {
//   return calculating(num, 1);
// }
// function two(num) {
//   return calculating(num, 2);
// }
// function three(num) {
//   return calculating(num, 3);
// }

// function four(num) {
//   return calculating(num, 4);
// }

// function five(num) {
//   return calculating(num, 5);
// }

// function six(num) {
//   return calculating(num, 6);
// }
// function seven(num) {
//   return calculating(num, 7);
// }

// function eight(num) {
//   return calculating(num, 8);
// }

// function nine(num) {
//   return calculating(num, 9);
// }

// function times(num) {
//   return '*' + num;
// }

// function plus(num) {
//   return '+' + num;
// }
// function minus(num) {
//   return '-' + num;
// }

// function dividedBy(num) {
//   return '/' + num;
// }

// console.log(seven(times(five())));
// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));

/************************* Integers: Recreation One *******************/

/*
1. find the divisor of a number
2. sum up the squared divisors
3. square root the result, check if it is a integer
4. push the original number and the sum into an array
*/

// function listSquared(m, n) {
//   let divisors = [];

//   let finalResult = [];

//   // m = 42

//   for (let i = m; i <= n; i++) {
//     divisors = [];
//     console.log(i);
//     // 1. find the divisor of a number, push it into the array
//     for (let j = 1; j <= i / 2; j++) {
//       if (i % j === 0) {
//         divisors.push(j);
//       }
//     }

//     // loop the array and sum up the squared divisors
//     divisors.forEach((element, index) => {
//       return (divisors[index] = element * element);
//     });

//     let result = divisors.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue;
//     });

//     // square root the result, check if it is a integer, if so, push original number and the result into final array
//     if (Number.isInteger(Math.sqrt(result))) {
//       finalResult.push([i, result]);
//     }
//     // console.log(divisors);
//   }

//   return finalResult;
// }

// function listSquared(m, n) {
//   let finalResult = [];

//   for (let i = m; i <= n; i++) {
//     let sum = getDivisors(i).reduce(
//       (accumulator, currentValue) => accumulator + currentValue * currentValue
//     );

//     var ok = Number.isInteger(Math.sqrt(sum));

//     if (ok) {
//       finalResult.push([i, sum]);
//     }
//   }

//   return finalResult;
// }

// function getDivisors(n) {
//   let divisors = [];

//   // 1. find the divisor of a number, push it into the array
//   for (let j = 1; j <= n / 2; j++) {
//     if (n % j) {
//       continue;
//     }
//     divisors.push(j);
//   }

//   console.log(divisors);
//   // The concat() method is used to merge two or more arrays.
//   return divisors.concat([n]);
// }

// console.log(listSquared(250, 500));

/****************** Extract the domain name from a URL *********************/

// function domainName(url) {
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }

// // domainName('http://github.com/carbonfive/raygun') == 'github';
// // domainName('http://www.zombie-bites.com') == 'zombie-bites';
// // domainName('https://www.cnet.com') == 'cnet';

// console.log(domainName('https://www.cnet.com'));

/******************************** Additionless addition ****************************/
// function add(a, b) {
//   let sum = 0;
//   do {
//     sum = a ^ b;
//     let carry = a & b;
//     a = sum;
//     b = carry << 1;
//   } while (b);
//   return sum;
// }

// console.log(add(1, 2));
// console.log(add(9, 8));

/********************** Simple Events ******************/
// function Event() {
//   let subscribers = [];
//   /*
//   it has a .subscribe() method, which takes a function
//   and stores it as its handler
//   */
//   this.subscribe = function (callback) {
//     for (let handler of subscribers) {
//       if (handler === callback) {
//         return;
//       }
//     }
//     subscribers.push(callback);
//   };

/* 
  it has an .unsubscribe() method, which takes a function and removes it from its handlers 
  */

// this.unsubscribe = function (callback) {
//   subscribers.forEach((handler, index) => {
//     if (handler === callback) {
//       return subscribers.splice(index, 1);
//     }
//   });
// };

/*
  it has an .emit() method, which takes an arbitrary number of arguments 
  and calls all the stored functions with these arguments
  */

//   this.emit = function (...args) {
//     subscribers.forEach((callback) => {
//       callback(...args);
//     });
//   };
// }

/***************  Write out numbers  */

/** Create a function that transforms any positive number to a string representing the number in words. 
The function should work for all numbers between 0 and 999999. */

// let checkTwoDigit = (n) => {
//   let words = '';

//   console.log('hhhh' + n);

//   switch (n) {
//     case '10':
//       words += 'ten';
//       break;
//     case '11':
//       words += 'eleven';
//       break;
//     case '12':
//       words += 'twelve';
//       break;
//     case '13':
//       words += 'thirteen';
//       break;
//     case '14':
//       words += 'fourteen';
//       break;
//     case '15':
//       words += 'fifteen';
//       break;
//     case '16':
//       words += 'sixteen';
//       break;
//     case '17':
//       words += 'seventeen';
//       break;
//     case '18':
//       words += 'eighteen';
//       break;
//     case '19':
//       words += 'nineteen';
//       break;
//     case '20':
//       words += 'twenty';
//       break;
//   }

//   return words;
// };

// let checkOneDigit = (n) => {
//   let words = '';

//   console.log(n);

//   switch (n) {
//     case '1':
//       words += 'one';
//       break;

//     case '2':
//       words += 'two';
//       break;

//     case '3':
//       words += 'three';
//       break;

//     case '4':
//       words += 'four';
//       break;

//     case '5':
//       words += 'five';
//       break;

//     case '6':
//       words += 'six';
//       break;

//     case '7':
//       words += 'seven';
//       break;

//     case '8':
//       words += 'eight';
//       break;

//     case '9':
//       words += 'nine';
//       break;

//     case '10':
//       words += 'ten';
//       break;
//   }

//   return words;
// };

// let checkTheSecondDigit = (n) => {
//   let words = '';

//   switch (n) {
//     case '2':
//       words += 'twenty-';
//       break;

//     case '3':
//       words += 'thirty-';
//       break;

//     case '4':
//       words += 'forty-';
//       break;

//     case '5':
//       words += 'fifty-';
//       break;

//     case '6':
//       words += 'sixty-';
//       break;

//     case '7':
//       words += 'seventy-';
//       break;

//     case '8':
//       words += 'eighty-';
//       break;

//     case '9':
//       words += 'ninety-';
//       break;
//   }

//   return words;
// };

// function number2words(n) {
//   // works for numbers between 0 and 999999

//   // 0 - 999

//   let number = n.toString();
//   let words = '';

//   if (number.length === 2) {
//     words = checkTwoDigit(number);

//     return words;
//   }

//   // 301
//   for (let i = 0; i < number.length; i++) {
//     if (
//       number.length >= 3 &&
//       i === number.length - 2 &&
//       number[number.length - 2] === '1'
//     ) {
//       words += checkTwoDigit(number[i] + number[i + 1]);
//       break;
//     }

//     if (number.length >= 3 && i === number.length - 2) {
//       words += checkTheSecondDigit(number[i]);
//       continue;
//     }

//     // 7219 seven thousand two hundred nineteen
//     words += checkOneDigit(number[i]);

//     if (number.length === 4 && i == 0) {
//       words += ' thousand ';
//       continue;
//     }

//     if (number.length >= 3 && i !== number.length - 1 && number[i] !== 0) {
//       words += ' hundred ';
//     }
//   }

//   if (number[number.length - 1] === '0') {
//     words = words.substring(0, words.length - 1);
//   }
//   return words;
// }

// console.log(number2words(1002));

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// function alphabetPosition(text) {
//   let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26,
//   };

//   let result = '';

//   text = text.toLowerCase();

//   for (let i = 0; i < text.length; i++) {
//     if (obj[text[i]]) {
//       result += obj[text[i]] + ' ';
//     }
//   }

//   return result.slice(0, -1);
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
