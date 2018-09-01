/**
 * 
 */



/**
 *  process the numbers 1..100. Print Fizz for multiples of 3, Bizz for multiples of 5, 
 *  FizzBizz for multiples of 3 and 5. 
 *  
 *   Count number of checks (conditions executed)
 */

function printFizzBizzAndCountConditions() {
	
	var checkCount=0, r3, r5, r15;
	
	for (var i = 1; i <= 100; i++){
		
		r3 = i % 3;
		r5 = i % 5;
		r15 = i % 15 ;

		
//		// Solution 1 : Optimised to 200 check count
//		if (r5 === 0 ) {
//			checkCount++;
//			if ( r3 === 0 ){
//				checkCount++;
//				console.log(i + ': FizzBizz');
//			}else{
//				checkCount++;
//				console.log(i + ': Bizz');
//			}
//		}else if (r3 === 0) {
//			checkCount += 2;
//			console.log(i + ':Fizz');
//		}else {
//			checkCount += 2;
//		}
		
		// Solution 2 : Optimised to 100 check count
		if ( r15 === 0 ){
			checkCount++;
			console.log(i + ': FizzBizz');
		}else if (r5 === 0) {
			checkCount++;
			console.log(i + ': Bizz');
		}else if (r3 === 0){
			checkCount++;
			console.log(i + ': Fizz' )
		}else {
			checkCount++;
		}
		
	}
	console.log('checkCount : '+ checkCount)
}