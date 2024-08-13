function removeElement(arr,val){
let i = 0;
for(let j = 0;j<arr.length;j++)
{
if(arr[j]!==val){
arr[i] = arr[j];
i++;
}
}return i;
}

let arr = [3,2,2,5];
let val = 2;

let len1= removeElement(arr,val);
console.log(arr.slice(0,len1));