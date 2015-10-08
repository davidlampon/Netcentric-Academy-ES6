describe("the spread", function(){

	it("can spread an array across parameters", function(){

		let doWork = function(x, y, z) {
			return x + y + z;
		}

		var result = doWork(...[1, 2, 3]);
		
		expect(result).toBe("?"); 

	});




	it("can build arrays", function(){

		var a = [4, 5, 6];
		var b = [1, 2, 3, ...a, 7, 8, 9];

		expect(b).toEqual("?");

	});

});