function foo() {
  var bar = 'something';
  quux = 'oh jeez';
  
  function zip() {
    var quux = 'what?';
    bar = true;
  }
  return zip;
}
