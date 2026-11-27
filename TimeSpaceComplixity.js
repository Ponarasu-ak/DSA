// it is used to measure the effincency of the algorithm in terms of speed as the input size grows 

// linear search :

// It checks the elements one by one, starting from the first element.
// It continues until the target element is found or all elements are checked.

// binary search -

// Make sure the array is sorted in ascending order (small to large).
// It divides the array into two halves and checks the middle element.
// If the target is smaller than the middle element, it searches the left half.
// If the target is greater than the middle element, it searches the right half.
// If the target is equal to the middle element, the element is found.
// It repeats the same process by dividing the remaining search area into halves
// until the target is found or no elements are left.

// n = number of elements / input size

// O(1) - Constant
// The operation takes the same amount of time regardless of the input size.
// Example: Accessing an array element using its index.
// Think: Same amount of work.

let arr = [10, 20, 30, 40, 50];

console.log(arr[0]);

// O(log n) - Logarithmic
// The search area is divided into half in every step.
// Example: Binary Search.
// Think: Keep dividing by 2.

// O(n) - Linear
// The operation runs once for every element.
// Example: Linear Search.
// Think: More elements = more work.

for (let i = 0; i < n; i++) {
  console.log(i);
}

// O(n log n) - Linearithmic
// The operation involves n iterations, and each iteration performs
// an operation that takes log n time.
// Example: Efficient sorting algorithms like Merge Sort.
// Think: Loop + divide by half.

for (let i = 0; i < n; i++) {
  // Binary search
}

// O(n^2) - Quadratic
// A loop inside another loop, where both loops run n times.
// Example: Two nested loops.
// If n = 5, total operations = 5 * 5 = 25.
// Think: n multiplied by n.

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}

// O(n^3) - Cubic
// Three nested loops, where each loop runs n times.
// If n = 5, total operations = 5 * 5 * 5 = 125.
// Think: n multiplied three times.

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      console.log(i, j, k);
    }
  }
}

// Easy sheet:

// Big O	             meaning	            Example

// O(1)	                 Same amount of work	Access array index
// O(log n)	             Divide by half	        Binary search
// O(n)	                 Check every item	    Linear search
// O(n log n)	         Loop + divide by half	Efficient sorting
// O(n²)	             Loop inside loop	    Compare every item with every item
// O(n³)	             Three nested loops	    Three levels of combinations



// ------------------------------------------------------------------------------------// 