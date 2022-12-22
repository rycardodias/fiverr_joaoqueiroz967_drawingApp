import { getDrawingColor, getLineSize, getOpacity, getBlur, sizeMultiples } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setPenMode = (canvas) => {
  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
  canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), getOpacity());
  canvas.freeDrawingBrush.width = 10 + getLineSize() * sizeMultiples.pen

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