// function for changing img source based on answer

const dog_breed_res = () => {
    let breed_title = "";
    let breed_src = "";
    let breed_writeup = "";
    let trait_sel = document.querySelector("#pers-select").value;
    switch(trait_sel) {
        case "Active":
            breed_title = "Siberian Husky"
            breed_src = "./images/dog-pics/sib-husky.webp";
            breed_writeup = "A Siberian Husky is a high-energy breed that thrives on physical activity and enjoys outdoor adventures, making them an ideal companion for active individuals who enjoy hiking, running, and other outdoor activities. Their natural athleticism and endurance make them great exercise partners, and they love to explore new terrain with their humans.";
        break;
        case "Laid Back":
            breed_title = "Bulldog"
            breed_src = "./images/dog-pics/Bulldog-pic.jpg";
            breed_writeup = "A Bulldog is a relatively low-energy breed that enjoys lounging around and taking it easy, making them a great choice for a laid back person. Their affectionate and calm nature makes them great companions for relaxing at home, and they require relatively little exercise compared to other breeds.";
        break;
        case "Goofy":
            breed_title = "Pug"
            breed_src = "./images/dog-pics/pug-pic.jpg";
            breed_writeup = "The Pug is a small breed known for its affectionate and comical personality, making them a great choice for a goofy person. They enjoy entertaining their owners with their silly antics and are always up for a good play session or cuddle, making them a delightful and entertaining companion.";
        break;
        case "Serious":
            breed_title = "German Shepherd"
            breed_src = "./images/dog-pics/german_shep.jpeg";
            breed_writeup = "The German Shepherd is a highly intelligent and loyal breed known for their serious and focused personality, making them an excellent choice for a person with a serious personality. They are often used as working dogs and are highly trainable, which can provide a sense of purpose and fulfillment for their owner. Additionally, their natural protective instincts and loyalty make them excellent companions for those who value trust and dependability.";
        break;
        default:
        breed_writeup = "Please enter a personality trait so we can correctly suggest a dog breed for you.";
    }
    document.querySelector("#result-pic").src = breed_src;
    document.querySelector("#result-pic").style.display = "flex";
    document.querySelector("#result-title").innerHTML = breed_title
    document.querySelector("#result-writeup").innerHTML = breed_writeup;
}