let arr1 = [2,4,7,3,8,3,5,4,2];

let quickSort = function(array){
  quick(array,  0, array.length - 1);
};

let partition = function(array, left, right) {

  let pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right);

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
      console.log('i = ' + i);
    }

    while (array[j] > pivot) {
      j--;
      console.log('j = ' + j);
    }

    if (i <= j) {
      console.log('swap ' + array[i] + ' with ' + array[j]);
      [array[i],array[j]]=[array[j],array[i]];
      i++;
      j--;
    }
  }

  return i;
};

let quick = function(array, left, right){

  let index;

  if (array.length > 1) {

    index = partition(array, left, right);

    if (left < index - 1) {
      quick(array, left, index - 1);
    }

    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
};
quickSort(arr1);

console.log(arr1);

