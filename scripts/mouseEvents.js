import { getDrawingColor, getLineSize } from './userPreferences.js'
import { setDefaultMode } from './modes/default.js'
import { setPenMode } from './modes/pen.js'
import { setSprayMode } from './modes/spray.js'
import { setPatternMode } from './modes/pattern.js'
import { setVLineMode } from './modes/vline.js'
import { setLineMode, updateLineMode } from './modes/line.js'
import { setCircleMode, updateCircleMode } from './modes/circle.js'
import { setRectangleMode, updateRectangleMode } from './modes/rectangle.js'

let mousePressed = false;
let currentMode = '';

const modes = {
    default: '',
    pen: 'pen',
    spray: 'spray',
    pattern: 'pattern',
    vline: 'vline',
    hline: 'hline',
    line: 'line',
    circle: 'circle',
    rectangle: 'rectangle',
}

export const setMouseEvents = (canvas) => {

    canvas.on('mouse:move', (e) => {
        if (!mousePressed) return;
        switch (currentMode) {
            case modes.pen:
                break;
            case modes.spray:

                break;
            case modes.pattern:

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
        document.getElementById('active-mode').innerText = currentMode
        mousePressed = true;

        switch (currentMode) {
            case modes.pen:
                setPenMode(canvas);
                break;
            case modes.spray:
                setSprayMode(canvas);
                break;
            case modes.pattern:
                setPatternMode(canvas);
                break;
            case modes.vline:
                setVLineMode(canvas);
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
                setDefaultMode(canvas);
                break;
        }
    });

    canvas.on('mouse:up', (e) => {
        mousePressed = false;
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

    document.getElementById('btn-pen').onclick = () => {
        if (currentMode === modes.pen) {
            currentMode = modes.default
        } else {
            currentMode = modes.pen
        }
    }

    document.getElementById('btn-spray').onclick = () => {
        if (currentMode === modes.spray) {
            currentMode = modes.default
        } else {
            currentMode = modes.spray
        }
    }

    // document.getElementById('btn-pattern').onclick = () => {
    //     if (currentMode === modes.pattern) {
    //         currentMode = modes.default
    //     } else {
    //         currentMode = modes.pattern
    //     }
    // }


    // document.getElementById('btn-vline').onclick = () => {
    //     if (currentMode === modes.vline) {
    //         currentMode = modes.default
    //     } else {
    //         currentMode = modes.vline
    //     }
    // }

    // document.getElementById('btn-hline').onclick = () => {
    //     if (currentMode === modes.hline) {
    //         currentMode = modes.default
    //     } else {
    //         currentMode = modes.hline
    //     }
    // }


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

