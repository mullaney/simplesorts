describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });
  it('handles an array of length one', function() {
    expect(bubbleSort([1])).toEqual([1]);
    expect(window.swap.calls.count()).toEqual(0);
  });
  it('sorts an array', function() {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(bubbleSort([4, 7, 2, 3, 9])).toEqual([2, 3, 4, 7, 9]);
    expect(window.swap.calls.count()).toBeLessThan(30);
  });
});

describe('Swap function', function() {
  it('swaps two elements of an array', function() {
    let array1 = [3, 2];
    swap(array1, 0, 1);
    expect(array1).toEqual([2, 3]);

    let array2 = [4, 7, 2, 9, 3];
    swap(array2, 3, 4);
    expect(array2).toEqual([4, 7, 2, 3, 9]);
  });
})
