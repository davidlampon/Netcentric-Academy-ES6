describe("destructuring =>", function() {
	"use strict";

	it("can destructure arrays (1)", function() {

		let x = 2;
		let y = 3;

		[x, y] = [y, x];

		expect(x).toBe("?");
		expect(y).toBe("?");
	});

	it("can destructure arrays (2)", function() {

		let [x, y] = [3, 2];

		expect(x).toBe("?");
		expect(y).toBe("?");
	});

	it("can destructure arrays (3)", function() {

		var doWork = function(){
			return [3, 2];
		};

		let [x, y] = doWork();

		expect(x).toBe("?");
		expect(y).toBe("?");
	});

	it("can destructure arrays (4)", function() {

		var doWork = function(){
			return [1, 3, 2];
		};

		let [, x, y] = doWork();

		expect(x).toBe("?");
		expect(y).toBe("?");
	});

	it("can destructure arrays (5)", function() {

		var doWork = function(){
			return [1, 3, 2];
		};

		let [, x, y, z] = doWork();

		expect(x).toBe("?");
		expect(y).toBe("?");
		expect(z).toBe("?");
	});

	it("can destructure objects (1)", function() {

	    let doWork = function() {
		     return {
			    firstName: "David",
		        lastName: "Lampon",
		        twitter: "davidlampon"
		    };
		};

		let {
					firstName: firstNameVar,
					twitter: twitterVar
				} = doWork();

		expect(firstNameVar).toBe("?");
		expect(twitterVar).toBe("?");
	});

	it("can destructure objects (2)", function() {

	    let doWork = function() {
		     return {
			    firstName: "David",
		        lastName: "Lampon",
		        handles: {twitter: "davidlampon"}
		    };
		};

		let {
					firstName: firstNameVar,
					handles:{twitter: twitterVar}
				} = doWork();

		expect(firstNameVar).toBe("?");
		expect(twitterVar).toBe("?");
	});


	it("can destructure objects (3)", function() {

	    let doWork = function() {
		     return {
			    firstName: "David",
		        lastName: "Lampon",
		        handles: {
		        	twitter: "davidlampon"
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
