import { getDrawingColor, getLineSize, getOpacity, getBlur } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setSquareMode = (canvas) => {
    var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function () {

        var squareWidth = 10, squareDistance = 2;

        var patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
        var ctx = patternCanvas.getContext('2d');

        ctx.fillStyle = addAlpha(getDrawingColor(), getOpacity());
        ctx.fillRect(0, 0, squareWidth, squareWidth);

        return patternCanvas;
    };

    canvas.freeDrawingBrush = squarePatternBrush;

    var brush = canvas.freeDrawingBrush;
    brush.color = addAlpha(getDrawingColor(), getOpacity());
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