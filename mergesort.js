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
      d.push(b[0])
      b.shift();
    } else {
      d.push(c[0])
      c.shift();
    }
  }
  return d;
}
