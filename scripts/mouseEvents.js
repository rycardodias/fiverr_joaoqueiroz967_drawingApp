import { setDefaultMode } from './modes/default.js'
import { setPenMode } from './modes/pen.js'
import { setSprayMode } from './modes/spray.js'
import { setPatternMode } from './modes/pattern.js'
import { getStampLevel, getTotalStampsRows, setDecreaseStampLevel, setIncreaseStampLevel, stampsList, updateStampLayout, setStampMarked } from './stamps.js';
import { backgroundsList, updateBackgroundLayout, setIncreaseBackgroundLevel, setDecreaseBackgroundLevel, getBackgroundLevel, getTotalBackgroundRows, defaultBackground } from './backgrounds.js';
import { setStampMode } from './modes/stamp.js'
import { initCanvas, removeBackgroundImage, removeOverlayImage, setBackgroundImage, setOverlayImage } from './canvas.js';
import { setCircleMode } from './modes/circle.js';
import { setHLineMode } from './modes/hline.js';
import { setSquareMode } from './modes/square.js';
import { addAlpha } from './functions/colors.js';
import {
    getBlur, setBlur, getDrawingColor, getLineSize, getOpacity, setDecreaseLineSize,
    setDrawingColor, setIncreaseLineSize, setLineSize, setOpacity, sizeMultiples
} from './userPreferences.js';
import { defaultOverlay, getOverlayLevel, getTotalOverlayRows, overlaysList, setDecreaseOverlayLevel, setIncreaseOverlayLevel, updateOverlayLayout } from './overlays.js';

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

let mousePressed = false;
export let currentMode = '';
let currentStamp = ''





export const setMouseEvents = (canvas) => {

    (function init() {
        setButtonMarked('btn-pen')
        currentMode = modes.pen;
        setPenMode(canvas);
        setBackgroundImage(defaultBackground ? `images/backgrounds/${defaultBackground}` : null, canvas)
        setOverlayImage(defaultOverlay ? `images/overlays/${defaultOverlay}` : null, canvas)
        // canvas.setOverlayImage(`images/backgrounds/teste2.png`, canvas.renderAll.bind(canvas));
    })();



    canvas.on('mouse:move', (e) => {
        if (!mousePressed) return;
    });

    canvas.on('mouse:down', (e) => {
        mousePressed = true;

        if (currentMode === modes.stamp) {
            setStampMode(canvas, e, currentStamp)
            currentMode = modes.default
            setStampMarked()
        }

    });

    canvas.on('mouse:up', (e) => {
        mousePressed = false;
        const objects = canvas.getObjects();

        if (objects.length > 0) {
            if (objects[objects.length - 1].get('type') !== 'image') {
                objects[objects.length - 1].selectable = false
                objects[objects.length - 1].evented = false
            }
        }

        // canvas.remove(canvas.getActiveObject());

    });
};

function setButtonMarked(id) {
    document.querySelectorAll('.pincel').forEach(item => {

        document.getElementById(item.id).classList.remove('contorno')
    });
    if (id)
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
            setDefaultMode(canvas)
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
            setDefaultMode(canvas)

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
            setDefaultMode(canvas)

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
            setDefaultMode(canvas)
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
            setDefaultMode(canvas)
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
        setBackgroundImage(`images/backgrounds/${defaultBackground}`, canvas)
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
        currentMode = modes.default
        setDefaultMode(canvas)
        setButtonMarked()
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
        setButtonMarked()
        // canvas.isDrawingMode = true;
        // canvas.renderAll();
        document.getElementById('base-container').hidden = true
        document.getElementById('stamps-container').hidden = false
    }

    document.getElementById('stamps-back-arrow').onclick = (e) => {
        document.getElementById('base-container').hidden = false
        document.getElementById('stamps-container').hidden = true
    }

    // change to overlays container

    document.getElementById('btn-overlays').onclick = (e) => {
        currentMode = modes.default
        setDefaultMode(canvas)
        setButtonMarked()
        document.getElementById('base-container').hidden = true
        document.getElementById('overlays-container').hidden = false
    }

    document.getElementById('overlays-back-arrow').onclick = (e) => {
        document.getElementById('base-container').hidden = false
        document.getElementById('overlays-container').hidden = true
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

        document.getElementById('keyboard-container').hidden = false
    }

    document.querySelector('.fechar_formulario').addEventListener('click', function () {
        document.getElementById('keyboard-container').hidden = true
    });


    function setBackgroundMarked(id, background) {
        let alreadyMarked;

        if (id) {
            alreadyMarked = document.getElementById(id).classList.contains('contorno')
        }

        document.querySelectorAll('.background-list-item').forEach(item => {
            document.getElementById(item.id).classList.remove('contorno')

        });

        if (!id) return

        if (!alreadyMarked) {
            document.getElementById(id).classList.add('contorno')
            setBackgroundImage(`images/backgrounds/${background}`, canvas)
        } else {
            removeBackgroundImage(canvas)
        }
    }


    // create onclick event to all backgrounds
    backgroundsList.map((background) => {
        document.getElementById("background_" + background).onclick = (e) => {
            setBackgroundMarked("background_" + background, background)
            // if (background === 'blank.jpg') {
            //     return removeBackgroundImage(canvas)
            // }
            // setBackgroundImage(`images/backgrounds/${background}`, canvas)
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

        const stampName = "stamps_" + item
        document.getElementById(stampName).onclick = (e) => {
            setStampMarked(stampName)

            const alreadyMarked = document.getElementById(stampName).classList.contains('contorno')

            if (currentMode === modes.stamp) {
                currentMode = modes.default
                currentStamp = ''
            } else {
                currentMode = modes.stamp
                currentStamp = item;

                if (!alreadyMarked) {
                    currentMode = modes.default
                    currentStamp = ''
                }


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

    // OVERLAYS

    function setOverlaysMarked(id, overlay) {
        let alreadyMarked;

        if (id) {
            alreadyMarked = document.getElementById(id).classList.contains('contorno')
        }

        document.querySelectorAll('.overlay-list-item').forEach(item => {
            document.getElementById(item.id).classList.remove('contorno')

        });

        if (!id) return

        if (!alreadyMarked) {
            document.getElementById(id).classList.add('contorno')
            setOverlayImage(`images/overlays/${overlay}`, canvas)
        } else {
            removeOverlayImage(canvas)
        }
    }


    // create onclick event to all overlays
    overlaysList.map((item) => {
        document.getElementById("overlay_" + item).onclick = (e) => {
            setOverlaysMarked("overlay_" + item, item)
        }
    })


    document.getElementById('overlays-down-arrow').onclick = (e) => {
        if ((getBackgroundLevel() + 1) * getTotalOverlayRows() > overlaysList.length) return
        setIncreaseOverlayLevel();
        updateOverlayLayout();
    };

    document.getElementById('overlays-up-arrow').onclick = (e) => {
        if (getOverlayLevel() === 0) return
        setDecreaseOverlayLevel();
        updateOverlayLayout()
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

        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: getBlur(),
            offsetX: 0,
            offsetY: 0,
            affectStroke: true,
            color: addAlpha(getDrawingColor(), getOpacity()),
        });

    }

    picker.addEventListener('change', colorChanged)

}

