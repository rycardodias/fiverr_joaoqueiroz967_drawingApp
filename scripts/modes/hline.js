import { getDrawingColor, getLineSize, getOpacity, getBlur } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setHLineMode = (canvas) => {
    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function () {

        var patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = 10;
        var ctx = patternCanvas.getContext('2d');

        ctx.strokeStyle = addAlpha(getDrawingColor(), getOpacity());
        ctx.lineWidth = getLineSize() / 3;
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(10, 5);
        ctx.closePath();
        ctx.stroke();

        return patternCanvas;
    };

    canvas.freeDrawingBrush = hLinePatternBrush;

    var brush = canvas.freeDrawingBrush;
    brush.color = getDrawingColor();
    if (brush.getPatternSrc) {
        brush.source = brush.getPatternSrc.call(brush);
    }
    brush.width = parseInt(getLineSize() * 5, 10);
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