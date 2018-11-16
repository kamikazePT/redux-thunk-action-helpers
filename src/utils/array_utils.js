export function toObject(...arr){
  const obj = {};
  for (let i = 0;i < arr.length; i++){
    obj[arr[i]] = arr[i];
  }
  return obj;
}