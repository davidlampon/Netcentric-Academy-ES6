describe("iterators =>", function(){

	it("can work with iterators at a low level", function(){

		let sum = 0;
		let numbers = [1,2,3,4];

		// for loop
		sum = 0;
		for(let i =0; i < numbers.length; i++){
			sum += numbers[i];
		}
		expect(sum).toBe("?");

		// for in
		sum = 0;
		for(let i in numbers) {
			sum += numbers[i];
		}
		expect(sum).toBe("?");

		// iterator
		sum = 0;

		// let iterator = numbers.values();
		let iterator = numbers[Symbol.iterator]();
		let next = iterator.next();

		while(!next.done){
			sum += next.value;
			next = iterator.next();
		}
		expect(sum).toBe("?");
	});
});

describe("for of", function() {

	it("can work with iteratables at a high level", function(){

		let sum = 0;
		let numbers = [1,2,3,4];

		for(let n of numbers){
			sum += n;
		}

		expect(sum).toBe("?");
	});
});
