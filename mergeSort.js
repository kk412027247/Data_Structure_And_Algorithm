const arr1 = [2,4,7,3,8,3,5,4,2];
const arr2 = [2,4,7,3,8,3,5,4,2];

const mergeSort = (array)=>{
  const length = array.length;
  if(length === 1){
    return array;
  }
  const mid = Math.floor(length/2),
    left = array.slice(0,mid),
    right = array.slice(mid, length);
  return merge(mergeSort(left), mergeSort(right))
};

const merge = (left,right)=>{
  const result = [];
  let il=0,ir=0;
  while(il<left.length && ir < right.length){
    if(left[il]<right[ir]){
      result.push(left[il++]);
    }else{
      result.push(right[ir++]);
    }
  }
  while(il<left.length){
    result.push(left[il++]);
  }
  while(ir<right.length){
    result.push(right[ir++]);
  }
  return result;
};

const arr3 = mergeSort(arr1);
console.log(arr3);

const _mergeSort = (array) => {
  if(array.length < 2) return array;
  return _merge(
    _mergeSort(array.slice(0,Math.floor(array.length/2))),
    _mergeSort(array.slice(Math.floor(array.length/2),array.length))
  );
};

const _merge = (left,right) =>{
  if(left.length === 0){
    return right;
  }else if(right.length ===0){
    return left;
  }else if(left[0]<right[0]){
    return [left.shift(), ..._merge(left,right)]
  }else{
    return [right.shift(), ..._merge(left,right)]
  }
};

const arr4 = _mergeSort(arr2) ;
console.log(arr4);


const merge_ = (left, right)=> {
  return [...left,...right].reduce((pre)=>{
    if(left[0]<right[0] || !right[0] ){
      return [...pre,left.shift()]
    }else{
      return [...pre,right.shift()]
    }
  },[]);
};


const merge_sort = (array) => {
  if(array.length < 2) return array;
  return merge_(
    merge_sort(array.splice(0,Math.floor(array.length/2))),
    merge_sort(array)
  );
};

console.log(merge_sort(arr2));
