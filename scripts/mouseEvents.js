import { setDefaultMode } from './modes/default.js'
import { setPenMode } from './modes/pen.js'
import { setSprayMode } from './modes/spray.js'
import { setPatternMode } from './modes/pattern.js'
import { getStampLevel, getTotalStampsRows, setDecreaseStampLevel, setIncreaseStampLevel, stampsList, updateStampLayout } from './stamps.js';
import { backgroundsList, updateBackgroundLayout, setIncreaseBackgroundLevel, setDecreaseBackgroundLevel, getBackgroundLevel, getTotalBackgroundRows } from './backgrounds.js';
import { setStampMode } from './modes/stamp.js'
import { removeBackgroundImage, setBackgroundImage } from './canvas.js';
import { setCircleMode } from './modes/circle.js';
import { setHLineMode } from './modes/hline.js';
import { setSquareMode } from './modes/square.js';
import { addAlpha } from './functions/colors.js';
import { getBlur, getDrawingColor, getLineSize, getOpacity, setDecreaseLineSize, setDrawingColor, setIncreaseLineSize, setLineSize, setOpacity, sizeMultiples } from './userPreferences.js';

let mousePressed = false;
export let currentMode = '';
let currentStamp = ''

const modes = {
    default: '',
    pen: 'pen',
    circle: 'circle',
    spray: 'spray',
    pattern: 'pattern',
    hline: 'hline',
    square: 'square',

    stamp: 'stamp'
}

export const setMouseEvents = (canvas) => {

    canvas.on('mouse:move', (e) => {
        if (!mousePressed) return;
    });

    canvas.on('mouse:down', (e) => {
        mousePressed = true;

        switch (currentMode) {
            case modes.pen:
                setPenMode(canvas, mousePressed);
                break;
            case modes.circle:
                setCircleMode(canvas);
                break;
            case modes.spray:
                setSprayMode(canvas);
                break;
            case modes.pattern:
                setPatternMode(canvas);
                break;
            case modes.hline:
                setHLineMode(canvas);
                break;
            case modes.square:
                setSquareMode(canvas);
                break;
            case modes.stamp:
                setStampMode(canvas, e, currentStamp)
                currentMode = modes.default
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

function setButtonMarked(id) {
    document.querySelectorAll('.pincel').forEach(item => {
        document.getElementById(item.id).classList.remove('contorno')
    });
    document.getElementById(id).classList.add('contorno')
}

export const setButtonsOnClick = (canvas) => {

    document.getElementById('btn-pen').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.pen) {
            currentMode = modes.default
            setDefaultMode(canvas)
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.pen
            setPenMode(canvas);
        }
    }

    document.getElementById('btn-circle').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.circle) {
            currentMode = modes.default

            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.circle
            setCircleMode(canvas);
        }
    }

    document.getElementById('btn-spray').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.spray) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.spray
            setSprayMode(canvas);
        }
    }

    document.getElementById('btn-pattern').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.pattern) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.pattern
            setPatternMode(canvas);
        }
    }

    document.getElementById('btn-hline').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.hline) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.hline
            setHLineMode(canvas)
        }
    }

    document.getElementById('btn-square').onclick = (e) => {
        setButtonMarked(e.target.id)
        if (currentMode === modes.square) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.square
            setSquareMode(canvas)
        }
    }

    document.getElementById('btn-new').onclick = (e) => {
        canvas.getObjects().forEach(obj => {
            if (obj !== canvas.backgroundColor) {
                canvas.remove(obj)
            }
        })
        removeBackgroundImage(canvas)
    }

    /// CHANGE CONTAINERS

    // change to color container

    document.getElementById('div-cor').onclick = (e) => {
        document.getElementById('base-container').hidden = true
        document.getElementById('palette-container').hidden = false
    }

    document.getElementById('palette-back-arrow').onclick = (e) => {
        document.getElementById('base-container').hidden = false
        document.getElementById('palette-container').hidden = true
    }

    // change to backgrounds container

    document.getElementById('btn-backgrounds').onclick = (e) => {
        document.getElementById('base-container').hidden = true
        document.getElementById('backgrounds-container').hidden = false
    }

    document.getElementById('backgrounds-back-arrow').onclick = (e) => {
        document.getElementById('base-container').hidden = false
        document.getElementById('backgrounds-container').hidden = true
    }


    // change to stamps-container

    document.getElementById('btn-stamps').onclick = (e) => {
        // canvas.freeDrawingBrush = undefined
        currentMode = modes.stamps
        setDefaultMode(canvas)
        // canvas.isDrawingMode = true;
        // canvas.renderAll();
        document.getElementById('base-container').hidden = true
        document.getElementById('stamps-container').hidden = false
    }

    document.getElementById('stamps-back-arrow').onclick = (e) => {
        document.getElementById('base-container').hidden = false
        document.getElementById('stamps-container').hidden = true
    }

    // change to send-container

    document.getElementById('btn-send').onclick = (e) => {
        document.getElementById('base-container').hidden = true
        document.getElementById('send-container').hidden = false
    }

    document.getElementById('send-back-arrow').onclick = (e) => {
        document.getElementById('base-container').hidden = false
        document.getElementById('send-container').hidden = true
    }

    document.getElementById('send-save').onclick = (e) => {
        document.getElementById('base-container').hidden = false
        document.getElementById('send-container').hidden = true

        var dataURL = canvas.toDataURL("image/jpeg", 1.0);

        let name = prompt("Por favor, introduza o seu nome", "");

        downloadImage(dataURL, `${Date.now()}_${name.replace(' ', '')}.jpeg`);

        // Save | Download image
        function downloadImage(data, filename = 'untitled.jpeg') {
            var a = document.createElement('a');
            a.href = data;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
        }
    }

    // create onclick event to all backgrounds
    backgroundsList.map((background) => {
        document.getElementById("background_" + background).onclick = (e) => {
            if (background === 'blank.jpg') {
                return removeBackgroundImage(canvas)
            }
            setBackgroundImage(`images/backgrounds/${background}`, canvas)
        }
    })


    document.getElementById('backgrounds-down-arrow').onclick = (e) => {
        if ((getBackgroundLevel() + 1) * getTotalBackgroundRows() > backgroundsList.length) return
        setIncreaseBackgroundLevel();
        updateBackgroundLayout();
    };

    document.getElementById('backgrounds-up-arrow').onclick = (e) => {
        if (getBackgroundLevel() === 0) return
        setDecreaseBackgroundLevel();
        updateBackgroundLayout()
    };

    stampsList.map(item => {
        document.getElementById("stamps_" + item).onclick = (e) => {
            if (currentMode === modes.stamp) {
                currentMode = modes.default
                currentStamp = ''
            } else {
                currentMode = modes.stamp
                currentStamp = item;

            }
        }
    })

    document.getElementById('stamps-down-arrow').onclick = (e) => {
        if ((getStampLevel() + 1) * getTotalStampsRows() > stampsList.length) return
        setIncreaseStampLevel();
        updateStampLayout();
    };

    document.getElementById('stamps-up-arrow').onclick = (e) => {
        if (getStampLevel() === 0) return
        setDecreaseStampLevel();
        updateStampLayout()
    };

    // Change values + -
    document.getElementById('btn-linesize-decrease').onclick = (e) => {
        const element = document.getElementById('input-linesize')
        element.value--;
        canvas.freeDrawingBrush.width = 10 + parseInt((element.value) * sizeMultiples[currentMode]);
        setDecreaseLineSize()
    }

    document.getElementById('btn-linesize-increase').onclick = (e) => {
        const element = document.getElementById('input-linesize')
        element.value++;
        canvas.freeDrawingBrush.width = 10 + parseInt((element.value) * sizeMultiples[currentMode]);
        setIncreaseLineSize()
    }

    document.getElementById('btn-opacity-decrease').onclick = (e) => {
        const element = document.getElementById('input-opacity')
        element.value--;
        canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), element.value / 10);
        return setOpacity(element.value / 10)
    }

    document.getElementById('btn-opacity-increase').onclick = (e) => {
        const element = document.getElementById('input-opacity')
        element.value++;
        canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), element.value / 10);
        return setOpacity(element.value / 10)
    }

    document.getElementById('btn-blur-decrease').onclick = (e) => {
        const element = document.getElementById('input-blur')
        element.value--;

        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: parseInt(element.value * 10, 10),
            offsetX: 0,
            offsetY: 0,
            affectStroke: true,
            color: addAlpha(getDrawingColor(), getOpacity()),
        });

        return setBlur(element.value * 10)
    }

    document.getElementById('btn-blur-increase').onclick = (e) => {
        const element = document.getElementById('input-blur')
        element.value++;

        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: parseInt(element.value * 10, 10),
            offsetX: 0,
            offsetY: 0,
            affectStroke: true,
            color: addAlpha(getDrawingColor(), getOpacity()),
        });

        return setBlur(element.value * 10)
    }


    var picker = document.getElementById('picker') // get the color picker element

    function colorChanged(event) {
        var color = event.detail[0] // get the color
        picker.value = color // set the value of the picker to the selected color

        setDrawingColor(color)
        document.getElementById('div-cor').style.backgroundColor = color

        var brush = canvas.freeDrawingBrush;
        brush.color = addAlpha(color, getOpacity());
        if (brush.getPatternSrc) {
            brush.source = brush.getPatternSrc.call(brush);
        }

    }

    picker.addEventListener('change', colorChanged)

}

