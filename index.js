
import { initCanvas, setBackgroundImage } from './scripts/canvas.js'

// Set required values
let mousePressed = false;

const modes = {
    pan: 'pan',
    drawing: 'drawing'
}

let currentMode = '';


document.getElementById('btn-pan').onclick = () => {
    if (currentMode === modes.pan) {
        currentMode = ''
    } else {
        currentMode = modes.pan
    }
}

document.getElementById('btn-drawing').onclick = () => {
    if (currentMode === modes.drawing) {
        currentMode = ''
        canvas.isDrawingMode = false;
        canvas.renderAll();
    } else {
        currentMode = modes.drawing
    }
}


const setPanEvents = (canvas) => {
    canvas.on('mouse:move', (e) => {
        if (mousePressed && currentMode === modes.pan) {
            const delta = new fabric.Point(e.e.movementX, e.e.movementY)
            canvas.relativePan(delta)
            canvas.setCursor('grab');
            canvas.renderAll();
        } else if (mousePressed && currentMode === modes.drawing) {
            canvas.isDrawingMode = true;
            canvas.renderAll();
        }
    });

    canvas.on('mouse:down', (e) => {
        mousePressed = true;
        if (currentMode === modes.pan) {
            canvas.setCursor('grab');
            canvas.renderAll();
        }
    });

    canvas.on('mouse:up', (e) => {
        mousePressed = false;
        canvas.setCursor('default');
    });
};

// initialize the functions
const canvas = initCanvas('canvas');

setBackgroundImage('./images/sky.jpg', canvas)

setPanEvents(canvas)
