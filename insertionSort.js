const arr1 = [2,4,7,3,8,3,5,4,2];
const arr2 = [2,4,7,3,8,3,5,4,2];

const insertionSort = (array)=>{
  const length = array.length;
  let j,temp;
  for(let i=1; i<length; i++){
    j=i;
    temp = array[i];
    while(j>0 && array[j-1]>temp){
      array[j] = array[j-1];
      j--;
    }
    array[j] = temp;
  }
};

insertionSort(arr1);
console.log(arr1);

//算法复杂度为 O(n^2)
const _insertionSort = (array) => {
 return array.reduce((pre,cur)=>{
   return [...pre,cur].reduce((_pre,_cur,index,arr)=>{
     if(arr[arr.length - index] < arr[arr.length - index - 1]){
      [arr[arr.length - index], arr[arr.length - index - 1]] = [arr[arr.length - index - 1], arr[arr.length - index]];
     }
     return arr
   },[]);
 },[])
};

const arr3 = _insertionSort(arr2);
console.log(arr2);
console.log(arr3);
