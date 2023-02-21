
// checks for height to be 52 or over, rolls once randomly if not
const ride_function = () => {
    let height, can_ride;
    // added randomizer function
    const randomize = () => {
        return Math.random() * 100;
    }
    height = document.getElementById("Height").value;
    winked = height < 52 ? "*wink*": ""
    if (height < 52) {
        height = randomize()
    }
    can_ride = height < 52 ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride.";
    // add a wink if someone was lucky enough to roll their way onto the ride
    if ((winked === "*wink*") && (height >= 52)) {
        document.getElementById("Ride").innerHTML = can_ride + " to ride. " + winked;
    }
}

