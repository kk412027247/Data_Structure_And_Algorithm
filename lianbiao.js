
const obj5  = {value:5, next:null};
const obj4 = {value:4, next:obj5};
const obj3 = {value:3, next:obj4};
const obj2 = {value:2, next:obj3};
const obj1 = {value:1, next:obj2};


// const reverse = (head) =>{
//   const nextArr = [];
//   for(let i= 0; true ;i++){
//     if(head.next !== null){
//       console.log(head.next);
//       head=head.next;
//
//     }else{
//       //console.log(head.next);
//       return;
//     }
//   }
//   console.log(nextArr);
//   for(let i= nextArr.length;i--;i===0){
//     nextArr[i].next = nextArr[i-1]||head
//   }
//   head.next=null;
// };

//reverse(obj1);
//console.log(obj5.next.next.next.next.value);
