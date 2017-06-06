/**
 * Functions can use objects to remember the results
 * of the previous operation making it possible to 
 * avoid unnecessary work. This optimization is called
 * memoization.
 *
 */ 
var makeMemoizer = function () {
	function memoizer(memo, formula) {
		var recur = function (n) {
			var result = memo[n];
			if (typeof result !== 'number') {
				result = formula(recur, n);
				memo[n] = result;
			}
			
		//	console.log('memo: ' + memo)

			return result;
		};
		return recur;
	}
	return {
		fibonacci:  memoizer([0, 1], function (recur, n) {
			return recur(n - 1) + recur(n - 2);
		}),

		factorial:  memoizer([1, 1], function (recur, n) {
			return n * recur(n - 1);
		})
	};
};

