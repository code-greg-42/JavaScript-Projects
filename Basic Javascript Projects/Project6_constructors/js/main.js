class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

const my_func = () => {
    document.getElementById("keywords-and-constructors").innerHTML =
    "Erik drives a " + Erik.color + "-colored " + Erik.model + " manufactured in "
    + Erik.year;
}