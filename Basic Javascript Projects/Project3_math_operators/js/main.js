// one big function that utilizes all necessary math operators in a similar manner.
// take an input, calculate a basic math operation, change the corresponding
// <p> tag on the html page to the result of the operation

let basic_math_func = () => {
    let x = Number.parseInt(document.getElementById("inp1").value)
    let y = document.getElementById("inp2").value;
    document.getElementById("math1").innerHTML = x - y;
    document.getElementById("math2").innerHTML = x * y;
    document.getElementById("math3").innerHTML = x / y;
    document.getElementById("math4").innerHTML = x % y;
    document.getElementById("math5").innerHTML = -x;
    x++;
    document.getElementById("math6").innerHTML = x;
    x--;
    document.getElementById("math7").innerHTML = x;
    document.getElementById("math8").innerHTML = Math.random();
    document.getElementById("math9").innerHTML = Math.PI;
}