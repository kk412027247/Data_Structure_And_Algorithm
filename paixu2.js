const arr = [0,1,2,3,3,4,5,6,7];


const th = (num,arr)=>(
  arr.reduce((pre,curr)=>{
    if(num>curr){
      return pre+1;
    }else{
      return pre;
    }
  },0)
);

const result = th(3,arr);
console.log(result);
