/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let highToLow = 0, n = nums.length;

    for (let i = 0; i < n; i++) {
		// check curr and next
		// if next is less then curr, rotation point is reached
		// there should only be one rotation point
        if (nums[i] > nums[(i + 1) % n]) {
            highToLow++;
        }
		// if there is more then one "rotation point"
		// array is either not sorted or not ascending
        if (highToLow > 1)
            return false;
    }

    return true;
};

// Test Cases
const tests = [
	[1,2,3,4,5], // true
	[3,4,5,1,2], // true
	[2,1,3,4], // false
	[5,4,3,2,1,1], // false
	[5,5,6,6,6,9,1,2], // true
];

for (test of tests) {
	console.log(test, check(test));
}

// Time complexity: O(n)
// Space complexity: O(1)
