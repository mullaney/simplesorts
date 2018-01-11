describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    let wholeArray = [1, 2];
    let result = split(wholeArray);
    expect(result).toEqual([[1], [2]]);

    let wholeArray2 = [1, 2, 4, 5, 6, 7];
    let result2 = split(wholeArray2);
    expect(result2).toEqual([[1, 2, 4], [5, 6, 7]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    let firstArr = [1];
    let secondArr = [2];
    expect(merge(firstArr, secondArr)).toEqual([1, 2]);

    firstArr = [1, 2];
    secondArr = [3, 4];
    expect(merge(firstArr, secondArr)).toEqual([1, 2, 3, 4]);

    firstArr = [0, 7, 13];
    secondArr = [3, 4, 5];
    expect(merge(firstArr, secondArr)).toEqual([0, 3, 4, 5, 7, 13]);

    firstArr = [3, 4, 5];
    secondArr = [1, 7, 13];
    expect(merge(firstArr, secondArr)).toEqual([1, 3, 4, 5, 7, 13]);

    firstArr = [1, 7, 13, 19];
    secondArr = [3, 4, 5];
    expect(merge(firstArr, secondArr)).toEqual([1, 3, 4, 5, 7, 13, 19]);
  });
});

describe('mergeSort function', function() {
  it('should return a sorted array', function() {
    let array1 = [2, 1];
    expect(mergeSort(array1)).toEqual([1, 2]);

    let array2 = [8, 4, 6, 9, 1];
    expect(mergeSort(array2)).toEqual([1, 4, 6, 8, 9]);
  });
});
