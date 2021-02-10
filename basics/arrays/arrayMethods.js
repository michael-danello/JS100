function first(arr) {
    return arr[0];
}

function last(arr) {
    return arr[arr.length-1];
}


let arr = [1,2,3];

let scores = [96, 47, 113, 89, 100, 102];

let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];


  function readNestedArray(arr) {
      for (i = 0; i < arr.length; i++) {
          for (j = 0; j < arr[i].length; j++) {
              console.log(arr[i][j]);
          }
      }
  }

function contains(item, arr) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        } 
    }
    return false
}

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
    console.log(groceryList.shift());
}

