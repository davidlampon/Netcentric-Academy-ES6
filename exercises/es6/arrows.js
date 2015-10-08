describe("arrow functions =>", function(){

	it("provide a compact syntax to define a function", function(){

		let addES5 = function(x,y) {
			let temp = x + y;
			return temp;
		};

		let addES6 = (x,y) => {
			let temp = x + y;
			return temp;
		};

		expect(addES5(2,3)).toBe("?");
		expect(addES6(2,3)).toBe("?");
	});

	it("provide a compact syntax to define a function with just a return statement", function(){

		// several parameters
		let add = (x,y) => x + y;

		// single parameter
		let square = x => x * x;

		// no parameters
		let three = () => 3;

		expect(square(add(2,three()))).toBe("?");
	});

	it("can be used with array methods", function(){

		var numbers = [1,2,3,4];

		var sumES5 = 0,
				sumES6 = 0;

		numbers.forEach(function(n) {
			sumES5 += n;
		});

		numbers.forEach(n => sumES6 += n);

		expect(sumES5).toBe("?");
		expect(sumES6).toBe("?");

		var doubledES5 = numbers.map(function(n) {
			return n * 2;
		});
		var doubledES6 = numbers.map(n => n * 2);

		expect(doubledES5).toEqual("?");
		expect(doubledES6).toEqual("?");
	});

	it("lexically binds to 'this' (1)", function() {

		this.name = "David";
		expect(this.name).toBe("?");

	});

	it("lexically binds to 'this' (2)", function(done) {

		// var self = this;

		this.name = "David";

		setTimeout( function() {
			expect(this.name).toBe("?");
			done();
		},15);
	});

	it("lexically binds to 'this' (3)", function(done) {

		this.name = "David";

		setTimeout(() => {
			expect(this.name).toBe("?");
			done();
		},15);
	});
});
