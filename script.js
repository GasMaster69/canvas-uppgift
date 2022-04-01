// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
  var s = document.getElementById("canvas");
  c.beginPath();
  c.rect(20, midY * 1.5, canvas.width / 3, midY / 2);
  c.stroke();

  c.beginPath();
  c.rect(canvas.width - canvas.width / 3 - 20, midY * 1.5, canvas.width / 3, midY / 2);
  c.stroke();

  c.beginPath();
  c.moveTo(20, midY * 1.5);
  c.lineTo(canvas.width / 6 + 20, midY);
  c.stroke();

  c.beginPath();
  c.moveTo(canvas.width / 6 + 20, midY);
  c.lineTo(canvas.width / 3 + 20, midY * 1.5);
  c.stroke();

  c.beginPath();
  c.moveTo(canvas.width - canvas.width / 3 - 20, midY * 1.5);
  c.lineTo(canvas.width - canvas.width / 6 - 20, midY);
  c.stroke();

  c.beginPath();
  c.moveTo(canvas.width - canvas.width / 6 - 20, midY);
  c.lineTo(canvas.width - 20, midY * 1.5);
  c.stroke();

  c.beginPath();
  c.fillStyle = 'brown';
  c.fillRect(midX - 25, midY, 50, canvas.height / 2);
  c.stroke();

  c.beginPath();
  c.fillStyle = 'green';
  c.ellipse(midX, midY * 1.3, 80, 150, 0, 0.6 * Math.PI, 2.4 * Math.PI);
  c.fill();
  c.stroke();
}
drawPicture();

