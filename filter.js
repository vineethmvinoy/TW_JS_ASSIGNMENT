function Filter(arr,callBackFn){
  let result=[]
  for(let i=0;i<arr.length;i++)
  {
    if(callBackFn(arr[i]))
    result.push(arr[i]);
  }
  return result;
}

let array=[1,2,3,4];
let processed=Filter(array,function(num){
  if(num%2==0)
  return true;
return false;
})
console.log(processed);