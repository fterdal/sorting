function randomArray(length) {
  a = [];
  for (var i=0; i<length; i++) {
    var num = Math.floor(Math.random() * (100 - 1) + 1);
    a.push(num);
  }
  return a;
}

describe('Merge Sort Helper', function(){
  it('merges two sorted arrays and returns sorted array', function(){
    expect( mergeSortHelper([1,2],[3,4]) ).toEqual( [1,2,3,4] );
  });

  it('handles an empty array, returns the non-empty array', function(){
    expect( mergeSortHelper([1,2,3,4],[]) ).toEqual( [1,2,3,4] );
  });

  it('handles two large, random, sorted array', function(){
    var random1 = bubbleSort(randomArray(5));
    var random2 = bubbleSort(randomArray(5));
    var answer = bubbleSort(random1.concat( random2 ));
    console.log(
      'random1',random1,
      'random2',random2,
      'answer',answer,
      'mergeSortHelper(random1,random2)',mergeSortHelper(random1,random2)
    );
    expect( mergeSortHelper(random1,random2) ).toEqual( answer );
  });
})

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles a singleton array', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });

  it('handles an array already sorted', function(){
    expect( mergeSort([1,2,3,4]) ).toEqual( [1,2,3,4] );
  });

  it('handles an array in reverse-sorted order', function(){
    expect( mergeSort([4,3,2,1]) ).toEqual( [1,2,3,4] );
  });

  it('handles an array in random order', function(){
    expect( mergeSort([4,1,8,2,5,3,7,6]) ).toEqual( [1,2,3,4,5,6,7,8] );
  });

  it('handles negative numbers', function(){
    expect( mergeSort([-4,1,8,2,5,3,7,6]) ).toEqual( [-4,1,2,3,5,6,7,8] );
  });

  it('handles a large, random array', function(){
    var random = mergeSort(randomArray(51));
    expect( random ).toEqual( random.sort() );
  });
});
