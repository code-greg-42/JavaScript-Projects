x = "4";
y = 5;

// document.write(typeof(x));
// document.write(Number.parseInt(x) + y)

// vals = [0/0, isNaN(0/0), isNaN(.007)]

// for (let i = 0; i < 3; i++) {
    //console.log(vals[i]);
    //document.write(vals[i]);
// }
let this_func = () => {
    //document.getElementById("inf").innerHTML = 1 * (10**400);
    //document.getElementById("neg-inf").innerHTML = -(1 * (10**400));
    document.getElementById("inf").innerHTML = 6 > 2;
    document.getElementById("neg-inf").innerHTML = 7 < 1;
    console.log(42 + 42);
    console.log(42 < 42);
    console.log(42 == 42);
    console.log(42 == 4.2);
    // === equality
    console.log("forty-two" === "forty-two");
    console.log("forty-two" === 41)
    console.log("42" === 42);
    console.log(4.2 === 42);
    // operators && || !
    console.log(7 > 1 && 8 > 5);
    console.log(7 > 1 && 8 < 5);
    console.log(7 > 1 || 8 < 5);
    console.log(7 < 1 || 8 < 5);
    console.log(!(7 < 1));
    console.log(!(42 === 42));
}

this_func();