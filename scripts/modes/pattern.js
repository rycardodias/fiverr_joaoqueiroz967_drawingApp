import { getDrawingColor, getLineSize, getOpacity } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setPatternMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.PatternBrush(canvas);
    canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), getOpacity());;
    canvas.freeDrawingBrush.width = getLineSize() * 10

    canvas.isDrawingMode = true;
    canvas.renderAll();
}