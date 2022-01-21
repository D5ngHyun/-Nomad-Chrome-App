const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = new Image();
bgImage.src = `../imgs/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
