import { getDrawingColor, getLineSize } from './userPreferences.js'

let mousePressed = false;
let currentMode = '';

const modes = {
    default: '',
    drawing: 'drawing',
    line: 'line',
    circle: 'circle',
    rectangle: 'rectangle',
}

// Drawing objects
let line;
let circle;
let rectangle;


const setDefaultMode = (canvas) => {
    canvas.isDrawingMode = false;
    canvas.setCursor('default');
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

const setLineMode = (canvas) => {
    let pointer = canvas.getPointer(canvas);

    line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        stroke: getDrawingColor(),
        strokeWidth: getLineSize()
    })

    canvas.add(line)
    canvas.renderAll()
}

const updateLineMode = (canvas) => {
    let pointer = canvas.getPointer();
    line.set({
        x2: pointer.x,
        y2: pointer.y
    })
    canvas.renderAll()
}


const setCircleMode = (canvas) => {
    let pointer = canvas.getPointer(canvas);

    circle = new fabric.Circle({
        left: pointer.x,
        top: pointer.y,
        radius: 0,
        fill: getDrawingColor(),
        strokeWidth: getLineSize(),
    })

    canvas.setActiveObject(circle)

    canvas.add(circle)
    canvas.renderAll()
}

const updateCircleMode = (canvas) => {
    let pointer = canvas.getPointer();
    let initialPosition = circle.getCoords()[0];

    let distance = Math.abs(((pointer.x - initialPosition.x) ^ 2) + ((pointer.y - initialPosition.y) ^ 2))

    circle.set({
        radius: distance
    })

    canvas.renderAll()
}


const setRectangleMode = (canvas) => {
    let pointer = canvas.getPointer(canvas);

    rectangle = new fabric.Rect({
        left: pointer.x,
        top: pointer.y,
        width: 0,
        height: 0,
        fill: getDrawingColor(),
        strokeWidth: getLineSize(),
    })

    canvas.setActiveObject(rectangle)

    canvas.add(rectangle)
    canvas.renderAll()
}

const updateRectangleMode = (canvas) => {
    let pointer = canvas.getPointer();
    let initialPosition = rectangle.getCoords()[0];

    rectangle.set({
        width: pointer.x - initialPosition.x,
        height: pointer.y - initialPosition.y
    })

    canvas.renderAll()
}

export const setMouseEvents = (canvas) => {

    canvas.on('mouse:move', (e) => {
        if (!mousePressed) return;
        switch (currentMode) {
            case modes.drawing:
                break;
            case modes.line:
                updateLineMode(canvas);
                break;
            case modes.circle:
                updateCircleMode(canvas);
                break;
            case modes.rectangle:
                updateRectangleMode(canvas);
                break;
            default:
                setDefaultMode(canvas)
                break;
        }
    });

    canvas.on('mouse:down', (e) => {
        mousePressed = true;

        switch (currentMode) {
            case modes.drawing:
                setDrawingMode(canvas);
                break;
            case modes.line:
                setLineMode(canvas)
                break;
            case modes.circle:
                setCircleMode(canvas);
                break;
            case modes.rectangle:
                setRectangleMode(canvas);
                break;
            default:
                break;
        }
    });

    canvas.on('mouse:up', (e) => {
        mousePressed = false;

        document.getElementById('active-mode').innerText = currentMode
    });
};


export const setButtonsOnClick = (canvas) => {

    document.getElementById('btn-clear').onclick = () => {
        canvas.getObjects().forEach(obj => {
            if (obj !== canvas.backgroundColor) {
                canvas.remove(obj)
            }
        })
    }

    document.getElementById('btn-drawing').onclick = () => {
        if (currentMode === modes.drawing) {
            currentMode = modes.default
        } else {
            currentMode = modes.drawing
        }
    }

    document.getElementById('btn-line').onclick = () => {
        if (currentMode === modes.line) {
            currentMode = modes.default
        } else {
            currentMode = modes.line
        }
    }

    document.getElementById('btn-circle').onclick = () => {
        if (currentMode === modes.circle) {
            currentMode = modes.default
        } else {
            currentMode = modes.circle
        }
    }

    document.getElementById('btn-rectangle').onclick = () => {
        if (currentMode === modes.rectangle) {
            currentMode = modes.default
        } else {
            currentMode = modes.rectangle
        }
    }

}

