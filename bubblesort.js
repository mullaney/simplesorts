function bubbleSort (arr, timesIterated){
  timesIterated = timesIterated || 0;

  if(arr.length <= 1){
    return arr;
  }
  var swapped = false;
  for(var i = 0; i < arr.length - 1 - timesIterated; i++){
    if(arr[i] > arr[i + 1]){
      swap(arr, i, i + 1);
      swapped = true;
    }
  }
  if(swapped === false){
    return arr;
  } else {
    return bubbleSort(arr, ++timesIterated);
  }
}

function swap(arr, index1, index2){
  var toBeSwapped = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = toBeSwapped;
}
