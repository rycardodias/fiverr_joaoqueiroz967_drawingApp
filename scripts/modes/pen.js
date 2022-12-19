import { getDrawingColor, getLineSize } from '../userPreferences.js'

export const setPenMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
    canvas.freeDrawingBrush.color = getDrawingColor();
    canvas.freeDrawingBrush.width = getLineSize()

    canvas.isDrawingMode = true;
    canvas.renderAll();
}