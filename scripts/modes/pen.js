import { getDrawingColor, getLineSize, getBlur } from '../userPreferences.js'

export const setPenMode = (canvas) => {
  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
  canvas.freeDrawingBrush.color = getDrawingColor();
  canvas.freeDrawingBrush.width = getLineSize()


  var filter = new fabric.Image.filters.Blur({
    blur: 0.5
  });

  canvas.freeDrawingBrush.blur = filter

  canvas.isDrawingMode = true;
  canvas.renderAll();
}