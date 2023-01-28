
import { initCanvas, resizeCanvas } from './scripts/canvas.js'
import { setMouseEvents, setButtonsOnClick } from './scripts/mouseEvents.js'
import './scripts/changeEvents.js'
import './scripts/layoutEvents.js'
import { getStamps } from './scripts/stamps.js'
import { getBackgrounds } from './scripts/backgrounds.js'
import { changeEvents } from './scripts/changeEvents.js'
import './scripts/functions/controlObjects.js'
import { getOverlays } from './scripts/overlays.js'

// initialize the functions
const canvas = initCanvas('canvas');

// adicionar objetos
getStamps()
getBackgrounds()
getOverlays()

changeEvents(canvas)

setMouseEvents(canvas)

setButtonsOnClick(canvas)

window.addEventListener('resize', () => {
    resizeCanvas(canvas)
})








