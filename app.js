const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
   painting = false;
}

function startPainting() {
   painting = true;
}

function onMouseMove(event) {
   const x = event.offsetX;
   const y = event.offsetY;
   if (!painting) {
      ctx.beginPath();
   } else {
      ctx.lineTo(x, y);
      ctx.stroke();
   }
}

function onMouseEnter(event) {
   x = event.offsetX;
   y = event.offsetY;
}

function onMouseDown(event) {
   painting = true;
}

if (canvas) {
   canvas.addEventListener('mousemove', onMouseMove);
   canvas.addEventListener('mousedown', startPainting);
   canvas.addEventListener('mouseup', stopPainting);
   canvas.addEventListener('mouseenter', onMouseEnter);
}
