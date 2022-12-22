import { getDrawingColor, getLineSize, getOpacity, getBlur, sizeMultiples } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setPatternMode = (canvas) => {

    var texturePatternBrush = new fabric.PatternBrush(canvas);

    canvas.freeDrawingBrush = texturePatternBrush;

    var brush = canvas.freeDrawingBrush;
    brush.color = addAlpha(getDrawingColor(), getOpacity());
    if (brush.getPatternSrc) {
        brush.source = brush.getPatternSrc.call(brush);
    }
    brush.width = parseInt(10 + getLineSize() * sizeMultiples.pattern, 10);
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