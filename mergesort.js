function split(arr){
  var splitIndex = Math.floor(arr.length / 2);
  var firstArr = arr.slice(0, splitIndex);
  var secondArr = arr.slice(splitIndex);
  return [firstArr, secondArr];
}

function merge(arr1, arr2) {
  var index1 = 0;
  var index2 = 0;
  var finalArray = [];

  while (index1 < arr1.length || index2 < arr2.length) {
    if (arr1[index1] < arr2[index2] || !arr2[index2]) {
      finalArray.push(arr1[index1++]);
    } else {
      finalArray.push(arr2[index2++]);
    }
  }
  return finalArray;
}

function mergeSort(arr){
  // if array is length 1 teminating
  // else split arr

  // arr.forEach(function(arrChild){
  //   if(arrChild.length > 1){
  //     split(arrChild);
  //   }
  // });
}
