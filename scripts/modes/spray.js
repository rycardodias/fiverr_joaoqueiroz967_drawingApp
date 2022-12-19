import { getDrawingColor, getLineSize } from '../userPreferences.js'

export const setSprayMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);
    canvas.freeDrawingBrush.color = getDrawingColor();
    canvas.freeDrawingBrush.width = getLineSize() * 10

    canvas.isDrawingMode = true;
    canvas.renderAll();
}