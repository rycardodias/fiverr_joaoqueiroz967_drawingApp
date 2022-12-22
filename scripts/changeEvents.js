import { addAlpha } from './functions/colors.js';
import { currentMode } from './mouseEvents.js';
import { setDrawingColor, setLineSize, setOpacity, setBlur, sizeMultiples, getDrawingColor, getOpacity } from './userPreferences.js'

// document.getElementById('input-color').addEventListener('change', (e) => {
//     return setDrawingColor(e.target.value)
// });

export function changeEvents(canvas) {
    document.getElementById('input-linesize').addEventListener('change', (e) => {
        canvas.freeDrawingBrush.width = 10 + parseInt(e.target.value * sizeMultiples[currentMode]);
        return setLineSize(e.target.value)
    });

    document.getElementById('input-opacity').addEventListener('change', (e) => {
        canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), e.target.value / 10);
        return setOpacity(e.target.value / 10)
    });
    document.getElementById('input-blur').addEventListener('change', (e) => {

        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: parseInt(e.target.value * 10, 10),
            offsetX: 0,
            offsetY: 0,
            affectStroke: true,
            color: addAlpha(getDrawingColor(), getOpacity()),
        });

        return setBlur(e.target.value * 10)
    });
}



