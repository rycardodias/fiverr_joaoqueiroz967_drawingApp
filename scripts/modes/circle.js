import { getDrawingColor, getLineSize, getOpacity } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setCircleMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.CircleBrush(canvas);
    canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), getOpacity());
    canvas.freeDrawingBrush.width = getLineSize() * 5

    canvas.isDrawingMode = true;
    canvas.renderAll();
}