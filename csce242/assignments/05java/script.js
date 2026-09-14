/*speech*/
const speechBox = document.getElementById("speech-box");
const speechBubble = document.getElementById("speech-bubble");

const showSpeech = () => {
    speechBubble.classList.toggle("hidden");
};

speechBox.onclick = showSpeech;

/*Beverage*/
const beverage = document.getElementById("beverage");
const message = document.getElementById("beverage-message");

const showDrink = () => {
    const drink = beverage.value;
    message.innerHTML = drink + ": Nice Choice!";
};

beverage.onchange = showDrink;

/*Sun*/
const sun = document.getElementById("sun");
const sticker = document.getElementById("sticker");

const showSticker = () => {
    sticker.style.display = "block";
};

sun.onclick = showSticker;