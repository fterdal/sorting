function mergeSort(a) {
  // Splitting
  if (a.length) {

  }
}

// Merges slready-sorted arrays b and c such that resulting array is sorted.
function mergeSortHelper(barg,carg) {
  b = barg.slice();
  c = carg.slice();
  var d = [];
  while (b.length || c.length) {
    if (b[0] < c[0] || !c.length) {
      d.push(b[0])
      b.shift();
    } else {
      d.push(c[0])
      c.shift();
    }
    // console.log('b',b);
    // console.log('c',c);
  }
  return d;
}
