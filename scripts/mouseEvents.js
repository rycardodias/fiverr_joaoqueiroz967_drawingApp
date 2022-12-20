import { setDefaultMode } from './modes/default.js'
import { setPenMode } from './modes/pen.js'
import { setSprayMode } from './modes/spray.js'
import { setPatternMode } from './modes/pattern.js'

let mousePressed = false;
let currentMode = '';

const modes = {
    default: '',
    pen: 'pen',
    circle: 'circle',
    spray: 'spray',
    pattern: 'pattern',
    hline: 'hline',
    square: 'square',
}

export const setMouseEvents = (canvas) => {

    canvas.on('mouse:move', (e) => {
        if (!mousePressed) return;
    });

    canvas.on('mouse:down', (e) => {
        mousePressed = true;

        switch (currentMode) {
            case modes.pen:
                setPenMode(canvas);
                break;
            case modes.circle:

                break;
            case modes.spray:
                setSprayMode(canvas);
                break;
            // case modes.pattern:
            //     setPatternMode(canvas);
            //     break;

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

    document.getElementsByTagName('')

    document.getElementById('btn-pen').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.pen) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.pen
        }
    }

    document.getElementById('btn-circle').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.circle) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.circle
        }
    }

    document.getElementById('btn-spray').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.spray) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.spray
        }
    }

    document.getElementById('btn-pattern').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.pattern) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.pattern
        }
    }

    document.getElementById('btn-hline').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.hline) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.hline
        }
    }

    document.getElementById('btn-square').onclick = (e) => {
        setButtonMarked(e.target.id)

        if (currentMode === modes.square) {
            currentMode = modes.default
            document.getElementById(e.target.id).classList.remove('contorno')
        } else {
            currentMode = modes.square
        }
    }

    document.getElementById('btn-new').onclick = (e) => {
        canvas.getObjects().forEach(obj => {
            if (obj !== canvas.backgroundColor) {
                canvas.remove(obj)
            }
        })
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

        downloadImage(dataURL, 'my-canvas.jpeg');

        // Save | Download image
        function downloadImage(data, filename = 'untitled.jpeg') {
            var a = document.createElement('a');
            a.href = data;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
        }
    }




}

