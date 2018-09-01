'user strict';

/**
 * TODO: write square root program without using library function
 */

/**
 * fibonacci series
 * @returns
 */
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

/**
 * prime number
 * A prime number (or a prime) is a natural number greater than 1 that 
 * has no positive divisors other than 1 and itself. 
 * 
 * if the squre root funciton is not allowed in the for look then use  n/2 .
 */

function checkPrimeNumber(n) {
	
	if (typeof n !== 'number' || n < 2){
		return false;
	}
	
	//  use n/2 if the sqrt() library function is not allowed
	for (var i = 2; i <= Math.sqrt(n); i++){
		if ( n % i === 0 ){
			return false;
		}
	}
	
	return true;
}


