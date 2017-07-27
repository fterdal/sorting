function bubbleSort(a) {
  for (var j=0; j< a.length/2+1; j++) {
    for (var i=0; i<a.length; i++) {
      if (a[i] > a[i+1]) {
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
      }
    }
  }
  return a;
}
