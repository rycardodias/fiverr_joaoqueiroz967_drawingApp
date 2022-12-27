import { getDrawingColor, getLineSize, getOpacity, sizeMultiples, getBlur } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setCircleMode = (canvas) => {
    canvas.freeDrawingBrush = new fabric.CircleBrush(canvas);
    canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), getOpacity());
    canvas.freeDrawingBrush.width = 10 + getLineSize() * sizeMultiples.circle

    var brush = canvas.freeDrawingBrush;

    brush.shadow = new fabric.Shadow({
        blur: parseInt(getBlur(), 10),
        offsetX: 0,
        offsetY: 0,
        affectStroke: true,
        color: addAlpha(getDrawingColor(), getOpacity()),
    });

    canvas.isDrawingMode = true;
    canvas.renderAll();
}