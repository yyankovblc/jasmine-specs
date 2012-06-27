describe("Spies", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });
  
  it ('tracks bar value', function() {
    expect(bar).toBeNull();
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });


  it("tracks its number of calls", function() {
    expect(foo.setBar.calls.length).toEqual(2);
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it("allows access to the most recent call", function() {
    expect(foo.setBar.mostRecentCall.args[0]).toEqual(456);
  });

  it("allows access to other calls", function() {
    expect(foo.setBar.calls[0].args[0]).toEqual(123);
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});