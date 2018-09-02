/**
 * Jasmine spec for the fibonacci series
 */
describe('Fibonacci Spec', function () {
	
	var fib;
	
	beforeEach(function () {
		fib = makeFibonacciSeries();
	});
	
	it("fibonacci() should return  10th term in the fibonacci series", function () {
		
		var result = fib.fibonacci(10);
		expect(result).toBe(34);
	});
	
	it("fibonacciWithRecursion() should return  10th term in the fibonacci series", function () {
		
		var result = fib.fibonacciWithRecursion(10);
		expect(result).toBe(34);
	});
	
	it("fibonacciWithRecursion() should give invalid message", function () {
		
		var result = fib.fibonacciWithRecursion(-1);
		expect(typeof result).toBe("string");
	});
});