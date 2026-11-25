function isPalindrome(x) {

    if (typeof (x) !== "number" || x < 0) {
        return false
    }

    const original = x;
    let reversed = 0;

    while (x > 0) {

        reversed = (reversed * 10) + x % 10;
        x = Math.floor(x / 10)

    }


    return original === reversed ? true : false

}


// To check whether the number is reversed, the original and reversed values should be the same, like:

// 121 === 121 : true
// 123 === 321 : false

// The main thing here is to find the last digit from the parameter, and after finding the last digit, we need to remove it from the parameter.

// For that, we need mathematical expressions:

// Modulo (%) – Which gives the remainder value.

// Division (/) – Which gives the quotient value.

// Another catch here is that when adding the number to the reverse, it will be directly added. For example, if the last digit is 1, it will be assigned to the reverse. After that, when we get 2, it will be added to 1, and the reverse will become 3. This should not happen.

// To fix this, we need to multiply the reverse value by 10 and then add the last digit using the modulo method. With the help of the whole loop, we can execute this.