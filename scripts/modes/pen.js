import { getDrawingColor, getLineSize, getBlur, getOpacity } from '../userPreferences.js'
import { addAlpha } from '../functions/colors.js';

export const setPenMode = (canvas) => {
  console.log(getBlur())
  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas, {
    opacity: getBlur()
  })
  canvas.freeDrawingBrush.color = addAlpha(getDrawingColor(), getOpacity());
  canvas.freeDrawingBrush.width = getLineSize()

  canvas.isDrawingMode = true;
  canvas.renderAll();
}