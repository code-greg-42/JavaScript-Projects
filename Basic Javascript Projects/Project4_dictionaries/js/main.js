let dict1 = {
    "waterType": "squirtle",
    "fireType": "charmander"
}

delete dict1.waterType;

const dict_func = () => {
    document.getElementById("Dictionary").innerHTML = dict1['waterType'];
}

