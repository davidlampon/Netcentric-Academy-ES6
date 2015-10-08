describe("using const =>", function() {
  "use strict";

  it("will make a variable read-only (1)", function() {

    const MAX_SIZE = 10;

    expect(MAX_SIZE).toBe("?");
  });

  it("will make a variable read-only (2)", function() {

    const MAX_SIZE = 10;

    //MAX_SIZE = 12; // Error

    expect(MAX_SIZE).toBe("?");
  });

  it("can shadow outer declaration (1)", function() {

    	var doWork = function(){
        var x = 12;
    		var x = 10;
    		return x;
    	};

    	var result = doWork();
    	expect(result).toBe("?");
  });

  it("can shadow outer declaration (2)", function() {

      var doWork = function(){
        const x = 12;
        //var x = 10; // Error
        return x;
      };

      var result = doWork();
      expect(result).toBe("?");
  });

  it("can shadow outer declaration (3)", function() {

      var doWork = function(){
        let x = 12;
        //var x = 10; // Error
        return x;
      };

      var result = doWork();
      expect(result).toBe("?");
  });

  it("can shadow outer declaration (4)", function() {

      let x = 12;
      var doWork = function(){
        var x = 10;
        return x;
      };

      var result = doWork();
      expect(result).toBe("?");
      expect(x).toBe("?");
  });

  it("can shadow outer declaration (5)", function() {

      const x = 12;
      var doWork = function(){
        var x = 10;
        return x;
      };

      var result = doWork();
      expect(result).toBe("?");
      expect(x).toBe("?");
  });

  it("can shadow outer declaration (6)", function() {

      if(true) {
        const x = 12;
      }

      var doWork = function(){
        var x = 10;
        return x;
      };

      var result = doWork();
      expect(result).toBe("?");
      expect(x).toBe("?");
  });
  
