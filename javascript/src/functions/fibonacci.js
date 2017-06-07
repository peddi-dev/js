'user strict';
function makeFibonacciSeries() {
	return {
		fibonacci : function fibonacci(n) {
			var fs = [ 0, 1 ], termN;

			termN = fs[n - 1];

			if (typeof termN === 'number') {
				return termN;
			}

			for (var i = 2; i < n; i++) {
				fs[i] = fs[i - 1] + fs[i - 2];
			}
			//console.log('fs: ' + fs)
			termN = fs[n - 1];

			return termN;
		},

		fibonacciWithRecursion : function fibonacciWithRecursion(n) {

			var fs = [ 0, 1 ], termN;
			termN = fs[n - 1];

			if (typeof termN === 'number') {
				return termN;
			} else if (n > 2) {
				return fibonacciWithRecursion(n - 1)
						+ fibonacciWithRecursion(n - 2)
			} else {
				return 'Input is invalid: ' + n;
			}
		}
	}
}