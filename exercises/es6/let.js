describe("how let works =>", function(){

	it("will not provide functional scoping, like var (1)", function(){

		var doWork = function(flag){
			if(flag){
				var x = 3;
				return x;
			}
		};

		var result = doWork(true);
		expect(result).toBe("?");
	});

	it("will not provide functional scoping, like var (2)", function(){

		var doWork = function(flag){
			if(flag){
				var x = 3;
			}
		return x;
		};

		var result = doWork(true);
		expect(result).toBe("?");
	});

	it("will not provide functional scoping, like var (3)", function(){

		var doWork = function(flag){
			if(flag){
				var x = 3;
			}
		return x;
		};

		var result = doWork(false);
		expect(result).toBe("?");
	});

	it("will provide block scoping, unlike var (1)", function(){

		var doWork = function(flag){
			if(flag){
				let x = 3;
				return x;
			}
		};

		var result = doWork(true);
		expect(result).toBe("?");
	});

	it("will provide block scoping, unlike var (2)", function(){

		var doWork = function(flag){
			if(flag){
				let x = 3;
			}
			return x;
		};

		var result = doWork(true);
		expect(result).toBe("?");
	});

	it("will provide block scoping, unlike var (3)", function(){

		var doWork = function(flag){
			if(flag){
				let x = 3;
			}
			return x;
		};

		var result = doWork(false);
		expect(result).toBe("?");
	});

	it("won't provide functional scoping with for (1)", function(){

		var doWork = function(){
			for(var i = 0; i< 10; i++){
			}
			return i;
		};

		var result = doWork();
		expect(result).toBe("?");
	});

	it("won't provide functional scoping with for (2)", function(){

		var doWork = function(){
			for(var i = 0; i< 10; i++){
				return i;
			}
		};

		var result = doWork();
		expect(result).toBe("?");
	});

	it("will provide block scoping with for (1)", function(){

		var doWork = function(){
			for(let i = 0; i< 10; i++){
			}
			return i;
		};

		var result = doWork();
		expect(result).toBe("?");
	});

	it("will provide block scoping with for (2)", function(){

		var doWork = function(){
			for(let i = 0; i< 10; i++){
				return i;
			}
		};

		var result = doWork();
		expect(result).toBe("?");
	});
});
