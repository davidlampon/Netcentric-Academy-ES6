describe("default parameters", function(){

	it("provides defaults", function(){

		var doWork = function(name="Scott") {
			return name;
		};

		var result = doWork();

		expect(result).toBe("?"); 

	});

	it("will provide a value for undefined", function(){

		let doWork = function(a = 1, b = 2, c = 3){
			return [a,b,c];
		};

		let [a,b,c] = doWork(5, undefined);

		expect(a).toBe("?");
		expect(b).toBe("?");
		expect(c).toBe("?");
	});

	it("works with destructuring", function() {

		let doWork = function(
			     url,
				{data = "Scott", cache = true}){
			return data;
		};


		let result = doWork(
				"api/test", {
					cache: false
				}
			);

		expect(result).toBe("?");

	});

});
