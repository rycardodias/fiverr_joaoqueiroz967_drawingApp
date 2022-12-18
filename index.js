
import { initCanvas, setBackgroundImage, resizeCanvas } from './scripts/canvas.js'
import { setMouseEvents, setButtonsOnClick } from './scripts/mouseEvents.js'
import './scripts/changeEvents.js'

// initialize the functions
const canvas = initCanvas('canvas');

setBackgroundImage('./images/sky.jpg', canvas)

setMouseEvents(canvas)

setButtonsOnClick(canvas)

window.addEventListener('resize', () => {
    resizeCanvas(canvas)
})







