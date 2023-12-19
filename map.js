//Program to implement map
function mapCreate(arr,callBackFn){
  let result=[];
  for(let i=0;i<arr.length;i++)
    result.push(callBackFn(arr[i]));
return result;
}
let array=[1,2,3,4];
let squared=mapCreate(array,function(num){return num*num;});
for(let i=0;i<squared.length;i++)
{
  console.log(array[i]+" => "+squared[i]);
}
console.log(squared);
