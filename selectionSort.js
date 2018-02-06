const arr1 = [2,4,7,3,8,3,5,4,2];
const arr2 = [2,4,7,3,8,3,5,4,2];

const selectionSort = (array)=>{
  const length = array.length;
  let indexMin;
  for(let i=0; i<length-1; i++){
    indexMin = i;
    for(let j=i;j<length;j++){
      if(array[indexMin]>array[j]){
        indexMin = j;
      }
    }
    if(i !== indexMin){
     [array[indexMin],array[i]] = [array[i],array[indexMin]]
    }
  }
};

selectionSort(arr1);
console.log(arr1);

//算法复杂度为 O(n^2)
const _selectionSort = (array)=>{
  return array.reduce((pre,cur,index)=>{
    return pre.reduce((_pre,_cur,_index,arr)=>{
      if(_index>=index && arr[_index]<arr[index]){
        [arr[_index],arr[index]]=[arr[index],arr[_index]]
      }
      return arr;
    },[])
  },[...array])
};

const arr3 =_selectionSort(arr2);
console.log(arr2);
console.log(arr3);
