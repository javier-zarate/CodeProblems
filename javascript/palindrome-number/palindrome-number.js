/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if (x < 0) return false;
    const str = x.toString();

	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}

	return true;
};

// Time complexity: O(n)
// Space complexity: O(n)

/**
 * Solution not converting number to string
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
	// negatives cant be palindromes
	if (x < 0) return false;

	// numbers ending in 0, except for 0 alone, cant be palindromes
	if (x % 10 === 0 && x !== 0) return false;

	const og = x;
	let reversed = 0;

	// reverse number
	// extract last digit and remove it from input num x
	// build up number back backwards
	while( x > 0) {
        let LastDigit = x % 10;
        reversed = ( reversed * 10 ) + LastDigit;
        x = Math.floor( x / 10 );
    }

	return og === reversed;

};
// Time complexity: O(log n)
// Space complexity: O(1)

// Test cases
const tests = [
	121,		// true
	-121,		// false
	10,			// false
	555,		// true
	9001009, 	// true
	12345,		// false
];

for (test of tests) {
	console.log(test, isPalindrome2(test))
}