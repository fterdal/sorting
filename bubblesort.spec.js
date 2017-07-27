function randomArray(length) {
  a = [];
  for (var i=0; i<length; i++) {
    var num = Math.floor(Math.random() * (100 - 1) + 1);
    a.push(num);
  }
  return a;
}

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a singleton array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles an array already sorted', function(){
    expect( bubbleSort([1,2,3,4]) ).toEqual( [1,2,3,4] );
  });

  it('handles an array in reverse-sorted order', function(){
    expect( bubbleSort([4,3,2,1]) ).toEqual( [1,2,3,4] );
  });

  it('handles an array in random order', function(){
    expect( bubbleSort([4,1,8,2,5,3,7,6]) ).toEqual( [1,2,3,4,5,6,7,8] );
  });

  it('handles negative numbers', function(){
    expect( bubbleSort([-4,1,8,2,5,3,7,6]) ).toEqual( [-4,1,2,3,5,6,7,8] );
  });

  it('handles a large, random array', function(){
    var random = bubbleSort(randomArray(51));
    expect( random ).toEqual( random.sort() );
  });
});
