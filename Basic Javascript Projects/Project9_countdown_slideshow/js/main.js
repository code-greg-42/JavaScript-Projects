// add img src to array, and change the src of the picture frame on button click

photo_urls = ["./images/cooperstare.jpg", "./images/cooper-hangin.jpg", "./images/summerhusky.jpg"]
current_url = 0;

// set source to 1 forward in array
let next_photo = () => {
    if (current_url < (photo_urls.length - 1)) {
        document.getElementById("pic1").src = photo_urls[current_url + 1]
        console.log('next pic!');
        current_url++;
        }
}

// set source to 1 back in array
let last_photo = () => {
    if (current_url > 0) {
        document.getElementById("pic1").src = photo_urls[current_url - 1]
        console.log('last pic!');
        current_url--;
        }
}