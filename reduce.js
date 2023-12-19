function Reduce(arr,callBackFn,initialValue){
  let accumulator=initialValue!==undefined?initialValue:arr[0];
  let startIndex=initialValue!==undefined?0:1;

  for(let i=startIndex;i<arr.length;i++)
  {
    accumulator=callBackFn(accumulator,arr[i]);
  }
  return accumulator;
}

let array=[1,2,3,4];
let reducedValue=Reduce(array,function(acc,num){return acc*num;},1);
console.log(reducedValue);
