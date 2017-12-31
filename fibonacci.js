const arr = [0,1];
const fibonacci = (n) => {
  const time1 = Date.now();
  if(n>=2){
    for(i=0; i<=n; i++){
      arr.push(arr[i]+arr[i+1]);
      console.log(arr[i]+arr[i+1]);
    }

  }else{
    console.log('something wrong')
  }
  //console.log(arr);
  console.log((Date.now() - time1)/1000+'s');
};

fibonacci(100000);




