import { getDrawingColor, getLineSize } from './userPreferences.js'
let mousePressed = false;

const modes = {
    default: '',
    pan: 'pan',
    drawing: 'drawing'
}

let currentMode = '';

const setDefaultMode = (canvas) => {
    canvas.isDrawingMode = false;
    canvas.setCursor('default');
    canvas.renderAll();
}

const setPanMode = (canvas, e) => {
    setDefaultMode(canvas);
    const delta = new fabric.Point(e.e.movementX, e.e.movementY)
    canvas.relativePan(delta)
    canvas.setCursor('move');
    canvas.renderAll();
}

const setDrawingMode = (canvas) => {
    setDefaultMode(canvas);

    canvas.freeDrawingBrush.color = getDrawingColor();
    canvas.freeDrawingBrush.width = getLineSize()
    canvas.freeDrawingBrush.blur = 3
    canvas.isDrawingMode = true;

    canvas.renderAll();
}

export const setMouseEvents = (canvas) => {

    canvas.on('mouse:move', (e) => {
        if (!mousePressed) return;
        switch (currentMode) {
            case modes.pan:
                setPanMode(canvas, e)
                break;
            case modes.drawing:
                setDrawingMode(canvas)
                break;
            default:
                setDefaultMode(canvas)
                break;
        }
    });

    canvas.on('mouse:down', (e) => {
        mousePressed = true;
    });

    canvas.on('mouse:up', (e) => {
        mousePressed = false;
    });
};


export const setButtonsOnClick = (canvas) => {

    document.getElementById('btn-pan').onclick = () => {
        if (currentMode === modes.pan) {
            currentMode = modes.default
        } else {
            currentMode = modes.pan
        }
    }

    document.getElementById('btn-drawing').onclick = () => {
        if (currentMode === modes.drawing) {
            currentMode = modes.default
        } else {
            currentMode = modes.drawing
        }
    }

    document.getElementById('btn-clear').onclick = () => {
        canvas.getObjects().forEach(obj => {
            if (obj !== canvas.backgroundColor) {
                canvas.remove(obj)
            }
        })
    }

}

