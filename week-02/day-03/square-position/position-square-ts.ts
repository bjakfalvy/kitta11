'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare (inputX: number, inputY: number) {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;    
    ctx.fillStyle = color;
    ctx.fillRect(inputX, inputY, 50, 50);
}

let indexMaxSq: number = Math.floor(Math.random()*10);
for (let index = 0; index < indexMaxSq ; index++) {
    let x: number = Math.floor(Math.random()*canvas.width/4)
    let y: number = Math.floor(Math.random()*canvas.height/4)
    drawSquare(x, y);
}