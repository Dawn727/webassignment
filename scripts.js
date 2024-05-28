const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');

let isDrawing = false;
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [mouseX, mouseY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = colorPicker.value;
        ctx.lineWidth = brushSize.value; 
        ctx.stroke();
        [mouseX, mouseY] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener('mouseup', (e) => {
    isDrawing = false;
    [mouseX, mouseY] = [0, 0];
});

canvas.addEventListener('mouseleave', (e) => {
    isDrawing = false;
});
