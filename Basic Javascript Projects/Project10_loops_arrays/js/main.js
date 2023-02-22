// loop that rolls and multiplies rand numbers until it hits a certain point

TARGET_NUM = 1000000000;

let Call_Loop = () => {
    let x = 1, counter = 0;
    // start loop
    while (x < TARGET_NUM) {
        rand = (Math.random() * 10) + 1;
        x *= rand;
        counter++;
        console.log(x + " after" + counter + " rolls.");
    }
    // print how many rolls it took now that loop escaped
    let win_msg = "Target reached after " + counter + " rolls!"
    document.getElementById("Loop").innerHTML = win_msg;
}

let word_len_func = () => {
    let str = document.querySelector("#word").value;
    let len = str.length;
    console.log(str, len);
    document.querySelector("#len-res").innerHTML = "this phrase is " + len + " characters in length!";
}

// array of different instruments
instr = ["piano", "guitar", "violin", "drums", "saxophone"]

// had to write separate function to get alerts to work
let one_at_a_time = count => {
    setTimeout(() => {
        console.log(instr[count])
        alert(instr[count])
    }, 1000)
}

// for loop to loop through alerts function
let for_Loop = () => {
    for (let i = 0; i < instr.length; i++) {
        one_at_a_time(i);
    }
}

// obvject made with let keyword
let my_car = {
    "make": "Nissan",
    "model": "Rogue",
    "year": 2019,
    "color": "blue"
}