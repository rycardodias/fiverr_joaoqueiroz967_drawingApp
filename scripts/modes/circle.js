import { getDrawingColor, getLineSize, getOpacity, sizeMultiples } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setCircleMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.CircleBrush(canvas);
    canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), getOpacity());
    canvas.freeDrawingBrush.width = 10 + getLineSize() * sizeMultiples.circle

    canvas.isDrawingMode = true;
    canvas.renderAll();
}