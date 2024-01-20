let header = document.querySelector('#header');
let hadith = document.querySelector('#hadith-text');
let book = document.querySelector('#book');
let button = document.querySelector('button');

// Load Hadith Data from external JSON file 
function loadHadith() {
    let hadithText = JSON.parse(request.responseText);

    let randomHadith = Math.floor(Math.random() * hadithText.hadees.length);
    header.innerHTML = hadithText.hadees[randomHadith].header;
    hadith.innerHTML = hadithText.hadees[randomHadith].hadith_english;
    book.innerHTML = hadithText.hadees[randomHadith].book;
}

// Request Hadith Data from external JSON file
let request = new XMLHttpRequest();
request.open('GET', 'hadees.json');

request.addEventListener('load', loadHadith);

request.send();

// Get a random hadith when button is clicked
function loadHadithOnButtonClick() {
    loadHadith();
}

// Get a random hadith when spacebar is pressed
function loadHadithOnSpacebarPress(e) {
    if (e.keyCode === 32) {
        loadHadith();
    }
}

button.addEventListener('click', loadHadithOnButtonClick);
window.addEventListener('keyup', loadHadithOnSpacebarPress);