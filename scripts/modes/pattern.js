import { getDrawingColor, getLineSize } from '../userPreferences.js'

export const setPatternMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.PatternBrush(canvas);
    canvas.freeDrawingBrush.color = getDrawingColor();
    canvas.freeDrawingBrush.width = getLineSize() * 10

    canvas.isDrawingMode = true;
    canvas.renderAll();
}