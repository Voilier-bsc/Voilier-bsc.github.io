const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.height = "100vh";
document.body.style.width = "100vw";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover ";
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
