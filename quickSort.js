const arr2 = [3,5,1,6,4,7,2];

const quickSort = (array) =>{
  quick(array, 0, array.length - 1)
};


const quick = (array,left,right)=>{
  let index;
  if(array.length>1){
    index = partition(array,left,right);
    if(left < index -1){
      quick(array, left, index -1);
    }
    if(index<right){
      quick(array, index, right);
    }
  }
  return array
};

const partition = (array, left, right) =>{
  const pivot = array[Math.floor((left+right)/2)];
  let i = left,
    j = right;                      
  while(i<=j){
    while(array[i]<pivot){
      i++;
    }
    while(array[j]>pivot){
      j--;
    }
    if(i<=j){
      [array[i],array[j]]=[array[j],array[i]];
      i++;
      j--;
    }
  }
  return i;
};


quickSort(arr2);
//console.log(arr2);


const arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];


const quick_sort =(array)=> {
  if(array.length < 2) return array;
  const left = array.filter((item,index) => item<array[0] && index>0);
  const right = array.filter((item,index) => item>= array[0] && index>0);
  return [...quick_sort(left), array[0], ...quick_sort(right)]
};

console.log(quick_sort(arr));
