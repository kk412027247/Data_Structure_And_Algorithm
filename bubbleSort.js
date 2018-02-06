const arr = [2,4,7,3,8,3,5,4,2];
const arr2 = [2,4,7,3,8,3,5,4,2];

const _bubbleSort = (array) =>{
  for(let i=0; i<array.length; i++){
    for(let i=0; i<array.length; i++){
      if(array[i]>array[i+1]){
        [array[i],array[i+1]]=[array[i+1],array[i]]
      }
    }
  }
};

_bubbleSort(arr);
console.log(arr);


//算法复杂度为 O(n^2)
const bubbleSort = (array)=>{
  return array.reduce((pre)=>{
    return pre.reduce((p,c,i,arr)=>{
      if(arr[i]>arr[i+1]){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
      }
      return arr
    },[]);
  },[...array]);
};


arr3 = bubbleSort(arr2);
console.log(arr2);
console.log(arr3);

