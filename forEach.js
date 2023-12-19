function ForEach(arr,callBackFn){
  for(let i=0;i<arr.length;i++)
  {
    callBackFn(arr[i]);
  }
}
let array=[1,2,3,4];
ForEach(array,(num)=>{console.log(num);});