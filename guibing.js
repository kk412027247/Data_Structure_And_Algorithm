const arr = [0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45,0,1,5,5,7,9,5,1,2,3,5,4,7,8,6,5,123,4,6,1,2,3,5,65,6,67,78,8,89,9,5,54,34,56,7,7,8,34,5345,7,234,523,45];

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
  return arr3;
};

const sort = (arr) =>{
  const obj = {};
  while(arr.length !==0){
    if(!obj.left) obj.left = [arr.shift()];
    const right = [arr.shift()];
    obj.left = [...combine(obj.left, right)];
  }

  console.log(obj.left);

};


sort(arr);
