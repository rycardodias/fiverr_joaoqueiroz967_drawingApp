
import { initCanvas, setBackgroundImage, resizeCanvas } from './scripts/canvas.js'
import { setMouseEvents, setButtonsOnClick } from './scripts/mouseEvents.js'
import './scripts/changeEvents.js'
import './scripts/layoutEvents.js'
import { getStamps } from './scripts/stamps.js'
import { getBackgrounds } from './scripts/backgrounds.js'
// initialize the functions
const canvas = initCanvas('canvas');

// adicionar objetos
getStamps()
getBackgrounds()

// setBackgroundImage('images/backgrounds/blank.jpg', canvas)

setMouseEvents(canvas)

setButtonsOnClick(canvas)


window.addEventListener('resize', () => {
    resizeCanvas(canvas)
})







