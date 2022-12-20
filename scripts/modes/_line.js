import { getDrawingColor, getLineSize } from '../userPreferences.js'

let line;

export const setLineMode = (canvas) => {
    let pointer = canvas.getPointer(canvas);

    line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        stroke: getDrawingColor(),
        strokeWidth: getLineSize()
    })

    canvas.add(line)
    canvas.renderAll()
}

export const updateLineMode = (canvas) => {
    let pointer = canvas.getPointer();
    line.set({
        x2: pointer.x,
        y2: pointer.y
    })
    canvas.renderAll()
}