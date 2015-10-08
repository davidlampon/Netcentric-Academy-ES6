describe("destructuring", function() {
	"use strict";
  
	it("can destructure arrays", function() {

		var doWork = function(){
			return [1, 3, 2];
		};

		let [, x, y, z] = doWork();

		expect(x).toBe("?");
		expect(y).toBe("?");
		expect(z).toBe("?");

	});

	it("can destructure objects", function() {

	    let doWork = function() {
		     return {
			    firstName: "Scott",
		        lastName: "Allen",
		        handles: {
		        	twitter: "OdeToCode"    
		    	}
		    };		   
		};

		let { 
				firstName, 
			  	handles:{twitter}
			} = doWork();

		expect(firstName).toBe("?");
		expect(twitter).toBe("?");

	});


	it("works with parameters", function() {

		let doWork = function(url, {data, cache, headers}){
			return data;
		};

		
		let result = doWork(
				"api/test", {
					data: "test", 
					cache: false
				}
			);
		
		expect(result).toBe("?");

	});

});