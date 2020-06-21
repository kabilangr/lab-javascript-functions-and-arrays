// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a > b) return a;
  else return b;
}

//Progression #2: The lengthy word

function findScaryWord(arr) {
  var l = 0;
  var name = arr;
  var k = name.length;
  if (k == 0)
    return null;
  for (var i = k - 1; i >= 0; i--) {
    if ((name[i].length) >= name[l].length) {
      l = i;
    }
  }
  return name[l];
}


const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(arr1) {
  var a = arr1;
  var l = a.length;
  var k = 0;
  for (var i = 0; i < l; i++)
    k = a[i] + k;
  return k;
}

function add() {

}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(arr2) {
  var f = arr2;
  var l = f.length;
  if (l == 0)
    return null;
  var a = netPrice(f);

  return (a / l);
}

// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function avg(arr) {
  var s = arr;
  var l = s.length;
  if (l == 0)
    return null;
  var a = netPrice(s);
  return (a / l);

}

function averageWordLength(arr3) {
  var l = arr3;
  var n = l.length;
  if (n == 0)
    return null;
  var k = 0;
  for (var i = 0; i < n; i++) {
    k = k + (l[i].length);
  }
  return (k / i);
}
// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour",
];

function uniqueArray(arr1) {
  var s = arr1;
  var l = s.length;
  var k = [];
  if (l == 0)
    return null;
  for (var i = 0; i < l - 1; i++) {
    for (var j = 0; j < l; j++)
      if (arr1[i] == arr1[j])
        k[i]++;
  }
  return s;
}

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function searchElement(arr, s) {
  var l = arr.length;
  if (l == 0)
    return null;
  if (arr.indexOf(s) > 0)
    return true;
  return false;

}

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimesElementRepeated(arr, s) {
  var k = 0;
  var l = arr.length;
  for (var i = 0; i < l; i++) {
    if (arr[i] == s)
      k++;
  }
  return k;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];

function maximumProduct(matrix) {
  var l = 0;
  var k = 0;
  var max = 0;
  var ar = matrix;
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      l = ar[i][j] * ar[i][j + 1] * ar[i][j + 2] * ar[i][j + 3];
      k = ar[i][j] * ar[i + 1][j] * ar[i + 2][j] * ar[i + 3][j];
      if (max <= l)
        max = l;
      if (max <= k)
        max = k;
    }
  }
  return max;
}