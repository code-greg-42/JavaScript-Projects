// function to change text of "par" to these concatenated strings
let test_function = () => {
    let x = "i knew i wasn't";
    let y = " going to like it";
    document.getElementById("par").innerHTML = x + y;
}

// function to concatenate using the += operator
let test_function2 = () => {
    let sent = "ahhhhhhhhhhh";
    sent += " why'd you have to do it!! I'll never be the same!";
    document.getElementById("msg").innerHTML = sent;
}