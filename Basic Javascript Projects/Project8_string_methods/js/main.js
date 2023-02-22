// did most of the assignment in console.log as I felt --
// it was an adequate place for testing these functions.
x = "Hello,"
y = " World!"

// concat method
z = x.concat(y);
console.log(z)

// function to slice a string from a random starting point to end
let slice_random = str => {
    let rand = Math.random() * str.length;
    console.log(rand)
    new_str = str.slice(rand)
    console.log(new_str);
    return new_str;
}

// calling rand slice function
let rand_str = slice_random(z);

// make entire string uppercase
rand_str = rand_str.toUpperCase();
console.log(rand_str);

// search for the first char not a word character or whitespace
let regex = /[^\w\s]/g;
console.log(rand_str.search(regex))

// convert number to string (and check type)
a = 42
a = a.toString()
console.log(typeof(a));

// cutoff number at the specified # of digits
let b = 42.4242
b = b.toPrecision(4);
console.log(b);
b = b.toString();
console.log(b);
console.log(typeof(b));

// add or subtract decimals to get the specified amount (4 = 4 decimals)
c = 1717
c = c.toFixed(4);
console.log(c);

// show the value of the variable (what is happening behind the scenes via js normally)
username = "grandersson";
console.log(username.valueOf());