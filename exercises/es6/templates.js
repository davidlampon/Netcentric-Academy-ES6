describe("template literals =>", function(){

	it("can easily combine literals and data (1)", function(){

		let doWork = function(name){
			return "Hello, ${name}";
		};

		let result = doWork("David");
		expect(result).toBe("?");
	});

	it("can easily combine literals and data (2)", function(){

		let doWork = function(name){
			return `Hello, ${name}`;
		};

		let result = doWork("David");
		expect(result).toBe("?");
	});


	it("can help build URLs", function(){

		let category = "music";
		let id = 2112;

		let url = `http://apiserver/${category}/${id}`;

		expect(url).toBe("?");
	});

	it("can use expressions", function(){

		var x = 1;
		var y = 3;
		var result = `${x} + ${y} is ${x+y}`;

		expect(result).toBe("?");
	});

	it("can use tags", function(){

		let upper = function(strings, ...values){
			let result = "";
			for(var i = 0; i < strings.length; i++){
				result += strings[i];
				if(i < values.length){
					result += values[i];
				}
			}
			return result.toUpperCase();
		};

		var x = 1;
		var y = 3;
		var result = upper `${x} + ${y} is ${x+y}`;

		expect(result).toBe("?");
	});
});