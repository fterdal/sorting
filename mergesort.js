const mergeSort = a => {
  // Splitting
  if (!a.length) return [];
  if (a.length === 1) {
    return a;
  }
  var splitA = split(a);
  if (a.length === 2) {
    return merge(splitA[0],splitA[1]);
  }
  return merge( mergeSort( splitA[0] ), mergeSort( splitA[1] ));
}

// Returns an array of two arrays
const split = a => {
  var b = [];
  var c = [];
  for (var i=0; i<a.length; i++) {
    if (i < Math.round(a.length / 2) ) {
      b.push(a[i]);
    } else {
      c.push(a[i]);
    }
  }
  return [b,c];
}

// Merges slready-sorted arrays b and c such that resulting array is sorted.
const merge = (b_arg,c_arg) => {
  b = b_arg.slice();
  c = c_arg.slice();
  var d = [];
  while (b.length || c.length) {
    if (b[0] < c[0] || !c.length) {
      d.push(b[0]);
      b.shift();
    } else {
      d.push(c[0]);
      c.shift();
    }
  }
  return d;
}

// The basic idea here is to merge the two arrays without using shift or slice
// We'll loop through the first array and push the smaller element onto d, and
// record the larger on in a temp variable. In following iterations of the loop,
// compare with the temp variable, as well as the elements of the list, pushing
// the smallest element onto d. Return d.
const mergeUnstable = (b,c) => {
  var d = [];
  var temp = null; // Stores values that aren't ready to be sorted
  for (var i=0; i<b.length; null) {

    // temp is not set
    if (temp === null) {
      if (b[0] < c[0]) {
        d.push(b[0]);
        temp = [c[0], 'c'];
      } else {
        d.push(c[0]);
        temp = [b[0], 'b'];
      }

    // temp is set
    } else {
      if (b[i] < temp) {
        d.push(b[i]);
        temp = [c[0], 'c'];
      } else {

      }
    }
    i++;
  }
}
