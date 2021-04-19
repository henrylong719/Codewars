# codeWars



**Of Course You Can !**



## Using object to count elements

<img src="/Users/henrylong/Desktop/Codewars/Images/1.png" alt="1" style="zoom:50%;" />





**Sample Tests:**

```javascript

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
Test.describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

```



**my Solution:**

```javascript
function findOdd(A) {
  //happy coding!
  var obj = {};
  A.forEach((element) => {
    // count the number of each element in the array and save them in a object
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  });

  // find the one appearing odd number of times.
  for (e in obj) {
    if (obj[e] % 2 !== 0) {
      return parseInt(e);
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5

```



**other's solution** 

```javascript

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

```





## Take a Number And Sum ITs Digits Raised To The Consecutive Powers 



<img src="/Users/henrylong/Desktop/Codewars/Images/2.png" alt="2" style="zoom:50%;" />



<img src="/Users/henrylong/Desktop/Codewars/Images/3.png" alt="3" style="zoom:50%;" />

**Sample Tests:**



```javascript

Test.describe("Example Tests", function() {
  Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
  Test.assertSimilar(sumDigPow(10, 100),  [89])
  Test.assertSimilar(sumDigPow(90, 100), [])
  Test.assertSimilar(sumDigPow(90, 150), [135])
  Test.assertSimilar(sumDigPow(50, 150), [89, 135])
  Test.assertSimilar(sumDigPow(10, 150), [89, 135])
});

```



1. find the type of Number And Sum Its Digits Raised To The Consecutive Powers in a certain range

2. what is the charater of the number?

   `89 = 8^1 + 9^2`

   `135 = 1^1 + 3^2 + 5^3`

   

3. how to find those number ?

   

` value += Math.pow(parseInt(num.charAt(i)), counter);`



```javascript

function sumDigPow(a, b) {
  let arr = [];

  // check if a is lower than b
  while (a <= b) {
    let num = a.toString();
    let value = 0;

    for (let i = 0; i < num.length; i++) {
      //  pow the digit of the number and get the value
      value += Math.pow(parseInt(num.charAt(i)), i+1);
    }

    // check the value see if it equals a
    if (value === a) {
      arr.push(value);
    }

    a++;
  }

  return arr;
}
```



**others' solution**

```javascript

// solution 1
function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let sum = 0;

    for (let j = 0; j < String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j + 1);
    }

    if (sum === i) arr.push(sum);
  }
  return arr;
}

// solution 2
function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}
```



## The use of filter and [... element ]





<img src="/Users/henrylong/Desktop/Codewars/Images/4.png" alt="4" style="zoom:50%;" />

**My solution**



```javascript

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array

  let arr = [];
  let newArr = [];
  let last;

  !iterable instanceof Array ? (arr = iterable.split('')) : (arr = iterable);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== last) {
      newArr.push((last = arr[i]));
    }
  }

  // do {
  //   if (arr[index] === arr[index - 1]) {
  //     index++;
  //   } else {
  //     newArr.push(arr[index]);
  //     index++;
  //   }
  // } while (index < arr.length);

  return newArr;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));

```



**other's solution**

```javascript

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((value, index) => value !== iterable[index - 1]);
};

```



## IQ Test (find even or add number)



<img src="/Users/henrylong/Desktop/Codewars/Images/5.png" alt="5" style="zoom:50%;" />



**my solution**

```javascript

function iqTest(numbers) {
  let arr = numbers.split(' ');
  let odd = 0;
  let even = 0;

  // determine whether the number of even number is more than odd number
  for (let i = 0; i < 3; i++) {
    arr[i] % 2 === 0 ? even++ : odd++;
  }

  // find the odd or even element

  let target = arr.findIndex((item, index) => {
    // need to find the odd number
    return even > odd ? item % 2 !== 0 : item % 2 === 0;
  });

  return target + 1;
}

console.log(iqTest('2 4 7 8 10'));
```



**my solution 2**

```javascript

function iqTest(numbers) {
  let arr = numbers.split(' ');
  let odd = 0;
  let even = 0;

  // determine whether the number of even number is more than odd number
  for (let i = 0; i < 3; i++) {
    arr[i] % 2 === 0 ? even++ : odd++;
  }

  // find the odd or even element

  if (even > odd) {
    return arr.findIndex((item, index) => item % 2 === 1) + 1;
  } else {
    return arr.findIndex((item, index) => item % 2 === 0) + 1;
  }
}

```







**other's solution**

```javascript
function iqTest(numbers) {
  // convert string to arr then to int
  numbers = numbers.split(' ').map(function (el) {
    return parseInt(el);
  });

  // separate number according to evenness
  var odd = numbers.filter(function (el) {
    return el % 2 === 1;
  });
  var even = numbers.filter(function (el) {
    return el % 2 === 0;
  });

  // find the target number
  return odd.length < even.length ? numbers.indexOf(odd[0]) + 1 : numbers.indexOf(even[0]) + 1;
}
```



## Write Number in Expanded Form (using repeat etc.)







<img src="/Users/henrylong/Desktop/Codewars/Images/6.png" alt="6" style="zoom:50%;" />

**my solution**

```javascript

function expandedForm(num) {
  let str = String(num);
  let counter = str.length - 1;
  let newStr = '';
  let reg = /[123456789]/;
  let tmpStr = str;

  // expandedForm(101000);

  for (let i = 0; i < str.length; i++) {
    // get the current leading number ^ counter
    let result = parseInt(str.charAt(i) * Math.pow(10, counter));

    // in order to check if the rest numbers are all 0
    tmpStr = tmpStr.slice(1);

    // rest numbers are not all 0
    if (reg.test(tmpStr)) {
      if (result !== 0) {
        newStr += result + ' + ';
      }
      // rest numbers are all 0
    } else {
      newStr += result;
      break;
    }
    counter--;
  }
  return newStr;
}
```



**other's solution**



```javascript
// 1. convert number to string

// 2. convert string to arr using map and supplying each element enough 0 using repeat (number + '0'.repeat)

// 3. using filter to remove all 0 in the array

// 5. using join converting array to string and add '+'

function expandedForm(num) {
  return String(num)
    .split('')
    .map((number, index) => {
      return number + '0'.repeat(String(num).length - index - 1);
    })
    .filter((number) => {
      return number != 0; // NOT use number !== 0
    })
    .join(' + ');
}
console.log(00000 == 0); // true
console.log(expandedForm(10100101));

```



## Pete, the baker (using object)



<img src="/Users/henrylong/Desktop/Codewars/Images/7.png" alt="7" style="zoom:50%;" />

**Example:**

```javascript
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

```



**My solution:**

```javascript

function cakes(recipe, available) {
  let min = Number.MAX_SAFE_INTEGER + 1;

  // loop the food in recipe
  for (food in recipe) {
    // check if available has the food
    if (available.hasOwnProperty(food)) {
      // get the number of food it can make
      let nums = Math.floor(available[food] / recipe[food]);
      // the minimist value
      min = Math.min(nums, min);
    } else {
      // available does not has the food
      return 0;
    }
  }
  return min;
}

```



**other's solution**

```javascript

function cakes(recipe, available) {
  let numOfCake = [];

  // loop the food in recipe
  for (food in recipe) {
    // check if available has the food
    if (available.hasOwnProperty(food)) {
      // push the number of food it can make into an array
      numOfCake.push(Math.floor(available[food] / recipe[food]));
    } else {
      // available does not has the food
      return 0;
    }
  }
  // find the mini value in the array
  return Math.min.apply(Math, numOfCake);
}
```



## Simple Pig Latin (use regex to replace)



<img src="/Users/henrylong/Desktop/Codewars/Images/8.png" alt="8" style="zoom:50%;" />



**My Solution**

```javascript

// solution 1

function pigIt(str) {
  var letters = /^[0-9a-zA-Z]+$/;
  // get arr without non-letters
  let arr = str.split(' ').filter((e) => letters.test(e));

  // Move the first letter of each word to the end of it,
  // then add "ay" to the end of the word.
  arr = arr.map((element) => {
    return element.substring(1) + element.charAt(0) + 'ay';
  });

  if (!letters.test(str.charAt(str.length - 1))) {
    arr.push(str[str.length - 1]);
  }

  return arr.join(' ');
}

// solution 2

function pigIt(str) {
  // var letters = /^[0-9a-zA-Z]{+}$/;
  var letters = /^[0-9a-zA-Z]+$/;
  // convert arr to array
  let arr = str.split(' ');

  // Move the first letter of each word to the end of it,
  // then add "ay" to the end of the word.
  arr = arr.map((element) => {
    return element.substring(1) + element[0] + 'ay';
  });

  // check if the str contains non letter
  if (!letters.test(str.slice(-1))) {
    // if so replace last char and add the non letter signal
    arr.splice(arr.length - 1, 1, str.slice(-1));
  }

  return arr.join(' ');
}

console.log(pigIt('Hello world ?'));


```



**other's solution**

```javascript


// \w: [A-Za-z0-9]
// \s: [\t\r\n\v\f] 匹配空格 etc.
// $2 前面的第二部分 
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

```





## Extract the domain name from a URL (use regex to replace)



<img src="/Users/henrylong/Desktop/Codewars/Images/9.png" alt="9" style="zoom:50%;" />



**My solution**

```javascript
function domainName(url) {
  url = url.replace('https://', '');

  url = url.replace('http://', '');

  url = url.replace('www.', '');

  let remove_after = url.indexOf('.');
  url = url.substring(0, remove_after);

  return url;
}

```



**Other's solution**

```javascript

// 1.
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// domainName('http://github.com/carbonfive/raygun') == 'github';
// domainName('http://www.zombie-bites.com') == 'zombie-bites';
// domainName('https://www.cnet.com') == 'cnet';

// 2.
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

```



## Encrypt this! (use regex to replace)



<img src="/Users/henrylong/Desktop/Codewars/Images/10.png" alt="10" style="zoom:50%;" />

<img src="/Users/henrylong/Desktop/Codewars/Images/11.png" alt="11" style="zoom:50%;" />





**my solution**

```javascript
xxxxxxxxxx23 1var encryptThis = function (propertyName) {2  functio![11](/Users/henrylong/Desktop/Codewars/Images/11.png)n upperToHyphenLower(match, offset, string) {3    console.log(match);4    console.log(string.slice(1, -1));5    let str = '';67    if (match.length > 2) {8      str =9        match.charCodeAt(0) +10        string[string.length - 1] +11        string.slice(1, -1) +12        string[0];13    } else if (match.length === 1) {14      str = match.charCodeAt(0);15    } else {16      str = match.charCodeAt(0) + string[string.length - 1];17    }1819    return str;20  }21  return propertyName.replace(/(\w)(\w*)(|$)/g, upperToHyphenLower);22}23
```





**other's solution**

```javascript
var encryptThis = function (text) {
  return text
    .split(' ')
    .map((value) =>
      value
        .replace(/^(\w)(\w)(\w*)(\w)$/, '$1$4$3$2')
        .replace(/^\w/, value.charCodeAt(0))
    )
    .join(' ');
};

console.log(encryptThis('Hello World'));

```



## Break camelCase (use regex to replace)



<img src="/Users/henrylong/Desktop/Codewars/Images/12.png" alt="12" style="zoom:50%;" />



**My solution**

```javascript
function solution(s) {
  let tmp = '';
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      tmp += ' ' + s.charAt(i);
    } else {
      tmp += s.charAt(i);
    }
  }

  return tmp;
}

```



**Other's solution**

```javascript

function solution(s) {
  return s.replace(/([A-Z])/g, ' $1');
}

console.log(solution('camelCasing'));

```



## Replace With Alphabet Position (use regex to replace)



<img src="/Users/henrylong/Desktop/Codewars/Images/13.png" alt="13" style="zoom:50%;" />



**my solution**

```javascript

function alphabetPosition(text) {
  let alphabet = ' abcdefghijklmnopqrstuvwxyz';
  let reg = /^[A-Za-z]$/;

  let result = '';

  let arr = text.split('');

  arr.forEach((element, index) => {
    if (reg.test(element)) {
      result += alphabet.indexOf(arr[index].toLowerCase()) + ' ';
    }
  });
  return result.slice(0, -1);
}

```



**other's solution**

```javascript
// not always correct 
// If there are only digits in a "text", then match() will return null, but map() cannot // handle null (only array). You need to check this value before doing map().
// "TypeError: Cannot read property 'map' of null".
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}

```



## The Hashtag Generator



<img src="/Users/henrylong/Desktop/Codewars/Images/14.png" alt="14" style="zoom:50%;" />



```javascript

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```



**My solution**



```javascript

function generateHashtag(str) {
  // convert str to an arr and git rid of elements which is empty
  let arr = str.split(' ').filter((e) => e !== '');

  // convert the first char of an element to uppercase
  arr = arr.map((e) => {
    return e[0].toUpperCase() + e.substring(1);
  });

  // add # and convert it to arr
  str = '#' + arr.join('');

  // make sure the str length is not larger than 140 or only # left
  return str.length > 140 || str.length === 1 ? false : str;
}

```



**Other's solution**

```javascript

function generateHashtag(str) {
  if (!str || str.length < 1) return false;

  var r = '#' + str.split(' ').map(function (el) {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  }).join('');
  return r.length > 140 ? false : r;
}

```



## Pick peaks



In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array `arr = [0, 1, 2, 5, 1, 0]` has a peak at position `3` with a value of `5` (since `arr[3]` equals `5`).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be `{pos: [], peaks: []}`.

Example: `pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])` should return `{pos: [3, 7], peaks: [6, 3]}` (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! `[1, 2, 2, 2, 1]` has a peak while `[1, 2, 2, 2, 3]` does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: `pickPeaks([1, 2, 2, 2, 1])` returns `{pos: [1], peaks: [2]}` (or equivalent in other languages)

Have fun!



**Sample test:**

```javascript

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample tests", function() {
  it("Tests", function() {
    assert.deepEqual(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
    assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
    assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
    assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
    assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
    assert.deepEqual(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
    assert.deepEqual(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
    assert.deepEqual(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
    assert.deepEqual(pickPeaks([]),{pos:[],peaks:[]});
    assert.deepEqual(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});
  });
});

```



**My solution**



```javascript
function pickPeaks(arr) {
  // for test cases which have negative value
  let max = -100;
  let pos = [];
  let peaks = [];
  let counter = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
      if (max > arr[i - 1] && max >= arr[i + 1]) {
        counter = i + 1;

        while (counter < arr.length) {
          // [2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]}
          // for this kind of case, filter all value which equals current max
          if (max === arr[counter]) {
            counter++;
            // until the final one, check if it is larger than the recorded max
          } else if (max > arr[counter]) {
            peaks.push(max);
            pos.push(i);
            break;
          } else {
            break;
          }
        }
      }
    }
    max = -100;
  }

  return {
    pos,
    peaks,
  };
}
console.log(pickPeaks([-2, -1, 0, -1, -2]));
```



**other's solution**



```javascript

function pickPeaks(arr) {
  var result = { pos: [], peaks: [] };
  if (arr.length > 2) {
    var pos = -1;
    for (var i = 1; i < arr.length; i++) {
      // find the target element , record its position
      if (arr[i] > arr[i - 1]) {
        pos = i;

        // [2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]}
        // in this case, move to the position of element 1; if it is smaller than arr[pos], then record it.
      } else if (arr[i] < arr[i - 1] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}
```





## Maximum subarray sum *



<img src="/Users/henrylong/Desktop/Codewars/Images/15.png" alt="15" style="zoom:50%;" />





**other's solution**



```javascript

var maxSequence = function (arr) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  //maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = maxEndingHere + arr[i];

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }
  return maxSoFar;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

```



**other's solution**

```javascript

[-2, 1, -3, 4, -1, 2, 1, -5, 4]

var maxSequence = function (arr) {
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};

```



## Is my friend cheating*

<img src="/Users/henrylong/Desktop/Codewars/Images/16.png" alt="16" style="zoom:50%;" />

<img src="/Users/henrylong/Desktop/Codewars/Images/17.png" alt="17" style="zoom:50%;" />



<img src="/Users/henrylong/Desktop/Codewars/Images/18.png" alt="18" style="zoom:50%;" />

**Sample Tests**

```javascript

Test.assertSimilar(removeNb(26), [[15,21], [21,15]]);
Test.assertSimilar(removeNb(100), []);

```



**My solution**

```javascript

function removeNb(n) {
  let currentNumber = 0;
  let testingNumber = 0;
  // count how many target pairs
  let tmpResult = [];
  let finalResult = [];
  let sum = getSum(n);

  for (let i = 0; i <= n; i++) {
    // record the current testing number
    currentNumber = i;
    // console.log('currentNumber ' + currentNumber);
    for (let j = currentNumber + 1; j <= n; j++) {
      testingNumber = currentNumber * j;
      if (testingNumber === sum - currentNumber - j) {
        tmpResult.push(currentNumber);
        tmpResult.push(j);
        finalResult.push(tmpResult);
        let reverseResult = tmpResult.slice(0);
        finalResult.push(reverseResult.reverse());
        return finalResult;
      }
    }
  }
  return finalResult;
}

function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(removeNb(26));

```



**reconmmended solution**

<img src="/Users/henrylong/Desktop/Codewars/Images/19.png" alt="19" style="zoom:50%;" />



https://math.stackexchange.com/questions/3110316/product-of-a-and-b-should-be-equal-to-the-sum-of-all-numbers-in-the-sequence-exc



```javascript

function removeNb(n) {
  let rightSide = (n * (n + 1)) / 2 + 1;
  let result = [];
  let reverseResult = [];
  let finalResult = [];

  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      continue;
    }
    for (let j = i + 1; j < n; j++) {
      if ((i + 1) * (j + 1) === rightSide) {
        result.push(i);
        result.push(j);
        finalResult.push(result);
        reverseResult = result.slice(0);
        finalResult.push(reverseResult.reverse());
        return finalResult;
      }
    }
  }
  return finalResult;
}

function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

```



**Other's solution**

```javascript

function removeNb(n) {
  let result = [];

  for (let a = 0; a < n; a++) {
    
    let b = ((n * (n + 1)) / 2 - a) / (a + 1);

    // make sure b is a int and lower than n
    if (b % 1 === 0 && b < n) {
      result.push([a, b]);
    }
  }
  return result;
}

```



## Molecule to atoms !

**For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, `Dictionary<string, int>` in C#, Map<String,Integer> in Java).**

**For example:**



```javascript
var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
```



**As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.**

**Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.**



**My solution:**

```javascript



```







## Give me a Diamond*



<img src="/Users/henrylong/Desktop/Codewars/Images/20.png" alt="20" style="zoom:50%;" />



<img src="/Users/henrylong/Desktop/Codewars/Images/21.png" alt="21" style="zoom:50%;" />



**other's solution**

```javascript

function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }

  diam = '';
  let middle = (n - 1) / 2;
  
	// The upper half
  for (let i = 0; i < middle; i++) {
    let space = middle - i;
    diam += ' '.repeat(space) + '*'.repeat(i * 2 + 1) + '\n';
  }

  // the middle line
  diam += '*'.repeat(n) + '\n';

  // the rest half
  for (let j = middle + 1; j < n; j++) {
    let space = j - middle;
    diam += ' '.repeat(space) + '*'.repeat(n - (j - middle) * 2) + '\n';
  }
  return diam;
}

console.log(diamond(5));

```



## Reverse or rotate?



<img src="/Users/henrylong/Desktop/Codewars/Images/22.png" alt="22" style="zoom:50%;" />



```javascript
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
```



My solution:



```javascript


function revrot(str, sz) {
  // 1. sub the string, get rid of extra part
  if (sz === 0) return '';

  let arr = [];

  // split large string in n-size chunks
  arr = str.match(new RegExp('.{1,' + sz + '}', 'g'));

  if (arr[arr.length - 1].length < sz) {
    arr.pop();
  }

  arr.map((value, index) => {
    let sum = 0;
    //  sum of the cubes of its digits
    for (let i = 0; i < value.length; i++) {
      sum += Math.pow(value[i], 3);
    }

    // dividable by 2 reverse
    if (sum % 2 === 0) {
      arr[index] = value.split('').reverse().join('');
    } else {
      // rotate it to the left by one position.
      //let leadingDigit = value.charAt(0);
      //  arr[index] = value.substring(1, value.length) + leadingDigit;
      arr[index] = value.slice(1) + value.slice(0, 1);
    }
  });

  return arr.join('');
}

```



## Word a10n (abbreviation)



<img src="/Users/henrylong/Desktop/Codewars/Images/23.png" alt="23" style="zoom:50%;" />



```javascript

abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"

// Sample Tests:
Test.assertEquals(abbreviate("internationalization"), "i18n");
Test.assertEquals(abbreviate("accessibility"), "a11y");
Test.assertEquals(abbreviate("Accessibility"), "A11y");
Test.assertEquals(abbreviate("elephant-ride"), "e6t-r2e");
```



**My solution**



```javascript

function abbreviate(string) {
  let arr = string.split(' ');

  arr.forEach((element, index) => {
    let length = element.length;

    // pick out the cases including '-'
    if (element.includes('-')) {
      let arr2 = element.split('-');
      // handle the case
      arr2.forEach((e, i) => {
        arr2[i] = e[0] + (e.length - 2) + e[e.length - 1];
      });

      arr[index] = arr2.join('-');

      // deal with cases including ','
    } else if (length > 3 && element.includes(',')) {
      arr[index] = element[0] + (length - 3) + element[length - 2] + ',';
    } else if (length > 3 && !element.includes(',')) {
      arr[index] = element[0] + (length - 2) + element[length - 1];
    }
  });

  return arr.join(' ');
}

```



**Other's solution**



## Longest_palindrome





<img src="/Users/henrylong/Desktop/Codewars/Images/24.png" alt="24" style="zoom:50%;" />

**test case**

```javascript

Test.assertEquals(longestPalindrome("a"), 1)
Test.assertEquals(longestPalindrome("aa"), 2)
Test.assertEquals(longestPalindrome("baa"), 2)
Test.assertEquals(longestPalindrome("aab"), 2)
Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
Test.assertEquals(longestPalindrome("baabcd"), 4)
Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)

```



**My solution**

```javascript

longestPalindrome = function (s) {
  if (s.length === 0) return 0;

  let maxString = 0;
  let finalLength = 1;
  if (s.length < 20) {
    for (let i = 0; i < s.length; i++) {
      let char1 = s.charAt(i);
      let char2 = s.charAt(i + 1);
      let target = char2 + char1;
      let str1 = '';
      let str2 = '';

      let result = s.search(target);

      if (result != -1) {
        str1 = s.slice(i, result) + target;
        if (str1.length > maxString) {
          maxString = str1.length;

          for (let j = result + 1; j >= i; j--) {
            str2 += s.charAt(j);
          }

          if (str1 === str2) {
            if (str1.length > finalLength) {
              finalLength = str1.length;
            }
          }
        }
      }
    }
  } else {
    for (let i = 0; i < s.length; i++) {
      let char1 = s.charAt(i);
      let char2 = s.charAt(i + 1);
      let char3 = s.charAt(i + 2);
      let char4 = s.charAt(i + 3);
      let char5 = s.charAt(i + 4);
      let target = char5 + char4 + char3 + char2 + char1;
      let str1 = '';
      let str2 = '';

      let result = s.search(target);

      if (result != -1) {
        str1 = s.slice(i, result) + target;
        if (str1.length > maxString) {
          maxString = str1.length;

          console.log(str1);

          // console.log(maxString);

          for (let j = result + 4; j >= i; j--) {
            str2 += s.charAt(j);
          }

          if (str1 === str2) {
            //   console.log('str2' + str2);
            if (str1.length > finalLength) {
              finalLength = str1.length;
            }
          }
        }
      }
    }
  }
  //   console.log(maxString);
  return finalLength;
};
```



**Other's solution**

```javascript

var longestPalindrome=function(s){
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}

```



## Vasya - Clerk (use Switch)



<img src="/Users/henrylong/Desktop/Codewars/Images/25.png" alt="25" style="zoom:50%;" />

**My solution**

```javascript



function tickets(peopleInLine) {
  let twentyFive = 0;
  let fifty = 0;
  let flag = true;

  peopleInLine.forEach((element, index) => {
    if (element === 25) {
      twentyFive++;
    } else if (element === 50) {
      if (twentyFive > 0) {
        twentyFive--;
        fifty++;
      } else {
        flag = false;
      }
    } else if (element === 100) {
      if (twentyFive >= 1 && fifty >= 1) {
        twentyFive--;
        fifty--;
      } else if (twentyFive >= 3) {
        twentyFive = twentyFive - 3;
      } else {
        flag = false;
      }
    }
  });

  if (flag) {
    return 'YES';
  } else {
    return 'NO';
  }
}

console.log(tickets([25, 25, 25, 25, 50, 100, 50]));
// tickets([25, 25, 50]);
// tickets([25, 100])
// tickets([25, 25, 50, 50, 100])

```



```javascript


function tickets(peopleInLine) {
  let money = {
    25: 0,
    50: 0,
    100: 0,
  };

  for (element of peopleInLine) {
    switch (element) {
      case 25:
        money[25]++;
        break;
      case 50:
        money[25]--;
        money[50]++;
        break;
      case 100:
        money[50] ? money[50]-- : (money[25] -= 2);
        money[25]--;
        break;
    }

    if (money[25] < 0) return 'NO';
  }

  return 'YES';
}

```



## Calculating with Functions



<img src="/Users/henrylong/Desktop/Codewars/Images/26.png" alt="26" style="zoom:50%;" />





**My solution**

```javascript


function calculating(num1, num2) {
  //   if (num1 === undefined) return num2;
  //   else if (num1.charAt(0) === '*') return num2 * parseInt(num1.slice(1));
  //   else if (num1.charAt(0) === '/')
  //     return Math.floor(num2 / parseInt(num1.slice(1)));
  //   else if (num1.charAt(0) === '+') return num2 + parseInt(num1.slice(1));
  //   else if (num1.charAt(0) === '-') return num2 - parseInt(num1.slice(1));

  switch (true) {
    case num1 === undefined:
      return num2;
    case num1.charAt(0) === '*':
      return num2 * parseInt(num1.slice(1));
    case num1.charAt(0) === '/':
      return Math.floor(num2 / parseInt(num1.slice(1)));
    case num1.charAt(0) === '+':
      return num2 + parseInt(num1.slice(1));
    case num1.charAt(0) === '-':
      return num2 - parseInt(num1.slice(1));
  }
}

function zero(num) {
  return calculating(num, 0);
}

function one(num) {
  return calculating(num, 1);
}
function two(num) {
  return calculating(num, 2);
}
function three(num) {
  return calculating(num, 3);
}

function four(num) {
  return calculating(num, 4);
}

function five(num) {
  return calculating(num, 5);
}

function six(num) {
  return calculating(num, 6);
}
function seven(num) {
  return calculating(num, 7);
}

function eight(num) {
  return calculating(num, 8);
}

function nine(num) {
  return calculating(num, 9);
}

function times(num) {
  return '*' + num;
}

function plus(num) {
  return '+' + num;
}
function minus(num) {
  return '-' + num;
}

function dividedBy(num) {
  return '/' + num;
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

```



**Other's solution**



```javascript

function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };

```



## Integers: Recreation One



<img src="/Users/henrylong/Desktop/Codewars/Images/27.png" alt="27" style="zoom:50%;" />



**My solution**

```javascript


function listSquared(m, n) {
  let divisors = [];

  let finalResult = [];

  // m = 42

  for (let i = m; i <= n; i++) {
    divisors = [];
    console.log(i);
    // 1. find the divisor of a number, push it into the array
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisors.push(j);
      }
    }

    // loop the array and sum up the squared divisors
    divisors.forEach((element, index) => {
      return (divisors[index] = element * element);
    });

    let result = divisors.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });

    // square root the result, check if it is a integer, if so, push original number and the result into final array
    if (Number.isInteger(Math.sqrt(result))) {
      finalResult.push([i, result]);
    }
    // console.log(divisors);
  }

  return finalResult;
}

listSquared(250, 500);

```



**Others' solution**

```javascript


function listSquared(m, n) {
  let finalResult = [];

  for (let i = m; i <= n; i++) {
    let sum = getDivisors(i).reduce(
      (accumulator, currentValue) => accumulator + currentValue * currentValue
    );

    var ok = Number.isInteger(Math.sqrt(sum));

    if (ok) {
      finalResult.push([i, sum]);
    }
  }

  return finalResult;
}

function getDivisors(n) {
  let divisors = [];

  // 1. find the divisor of a number, push it into the array
  for (let j = 1; j <= n / 2; j++) {
    if (n % j) {
      continue;
    }
    divisors.push(j);
  }

  console.log(divisors);
  // The concat() method is used to merge two or more arrays.
  return divisors.concat([n]);
}


console.log(listSquared(250, 500));

```



## Simple Events

<img src="/Users/henrylong/Desktop/Codewars/Images/28.png" alt="28" style="zoom:50%;" />





<img src="/Users/henrylong/Desktop/Codewars/Images/29.png" alt="29" style="zoom:50%;" />

```javascript

function Event() {
  let subscribers = [];
  /*
  it has a .subscribe() method, which takes a function 
  and stores it as its handler 
  */
  this.subscribe = function (callback) {
    for (let handler of subscribers) {
      if (handler === callback) {
        return;
      }
    }
    subscribers.push(callback);
  };

  /* 
  it has an .unsubscribe() method, which takes a function and removes it from its handlers 
  */

  this.unsubscribe = function (callback) {
    subscribers.forEach((handler, index) => {
      if (handler === callback) {
        return subscribers.splice(index, 1);
      }
    });
  };

  /*
  it has an .emit() method, which takes an arbitrary number of arguments 
  and calls all the stored functions with these arguments
  */

  this.emit = function (...args) {
    subscribers.forEach((callback) => {
      callback(...args);
    });
  };
}

```



