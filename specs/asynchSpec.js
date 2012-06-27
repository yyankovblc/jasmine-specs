describe("Asynchronous specs", function() {
  var value, flag;

  it("should support async execution of test preparation and exepectations", function() {
    
    runs(function() {
      flag = false;
      value = 0;

      setTimeout(function() {
        flag = true;
      }, 500);
    });

    waitsFor(function() {
      value++;
      return flag;
    }, "The Value should be incremented", 750);

    runs(function() {
      expect(value).toBeGreaterThan(0);
    });
  });
});