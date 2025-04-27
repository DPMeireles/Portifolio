const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}'.split('');
const fontSize = 16;
const columns = Math.floor(width / fontSize);

const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = Math.floor(Math.random() * height / fontSize);
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // efeito rastro
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#0F0'; // verde matrix
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});
