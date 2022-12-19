import { getDrawingColor, getLineSize } from '../userPreferences.js'

export const setVLineMode = (canvas) => {

    var vLinePatternBrush = new fabric.PatternBrush(canvas);

    vLinePatternBrush.getPatternSrc = function () {

        var patternCanvas = fabric.document.createElement('canvas');
        patternCanvas.width = patternCanvas.height = 100;
        var ctx = patternCanvas.getContext('2d');

        ctx.strokeStyle = getDrawingColor();
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(10, 5);
        ctx.closePath();
        ctx.stroke();

        return patternCanvas;
    }

    canvas.freeDrawingBrush = vLinePatternBrush
    
    canvas.isDrawingMode = true;
    canvas.renderAll();
}
