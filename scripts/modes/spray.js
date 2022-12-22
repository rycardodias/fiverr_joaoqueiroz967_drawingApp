import { getDrawingColor, getLineSize, getOpacity, sizeMultiples } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setSprayMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);
    canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), getOpacity());
    canvas.freeDrawingBrush.width = 10 + getLineSize() * sizeMultiples.spray

    canvas.isDrawingMode = true;
    canvas.renderAll();
}