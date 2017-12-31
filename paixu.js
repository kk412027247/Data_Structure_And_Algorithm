const _arr1 = [1,2,3];
const _arr2 = [0,1];

const combine = (arr1, arr2)=>{
  const length = arr1.length + arr2.length;
  const arr3 = [];
  for(let i= 0;i<length;i++){

    if(arr1[0]>arr2[0]){
      if(arr2[0] !== undefined) arr3.push(arr2.shift());
    }else{
      if(arr1[0] !== undefined) arr3.push(arr1.shift())
    }
  }
  arr3.push(...arr1,...arr2);
  console.log(arr3)
};

combine(_arr1, _arr2);
