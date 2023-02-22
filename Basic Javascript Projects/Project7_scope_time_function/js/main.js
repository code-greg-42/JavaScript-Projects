// example of global variable
let x = 42;

// example of local variable
function default_func() {
    y = 17;
    console.log(x + y);
}

// purposeful error
function second_func() {
    console.log(x + y);
}

// check if the hours attribute is am or pm and send corresponding message
function date_func() {
    if (new Date().getHours() < 12) {
        document.getElementById("par").innerHTML = "good morning!"
    } else {
        document.getElementById("par").innerHTML = "good afternoon!"
    }
}

// print heads or tails depending on random roll. include name as a personalization feature
function my_if_func() {
    let username = document.getElementById("username").value;
    let roll = Math.random();
    console.log(roll)
    if (roll >= .5) {
        document.getElementById("coin").innerHTML = username + " rolled heads!"
    } else {
        document.getElementById("coin").innerHTML = username + " rolled tails!"
    }
}