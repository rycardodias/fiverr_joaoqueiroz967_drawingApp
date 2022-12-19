import { getDrawingColor, getLineSize } from '../userPreferences.js'

export const setSprayMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);
    canvas.freeDrawingBrush.color = getDrawingColor();
    canvas.freeDrawingBrush.width = getLineSize()

    canvas.isDrawingMode = true;
    canvas.renderAll();
}