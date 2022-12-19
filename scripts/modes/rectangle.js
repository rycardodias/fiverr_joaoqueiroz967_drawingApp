import { getDrawingColor } from '../userPreferences.js'

let rectangle;

export const setRectangleMode = (canvas) => {
    let pointer = canvas.getPointer(canvas);

    rectangle = new fabric.Rect({
        left: pointer.x,
        top: pointer.y,
        width: 0,
        height: 0,
        fill: getDrawingColor()
    })

    canvas.setActiveObject(rectangle)

    canvas.add(rectangle)
    canvas.renderAll()
}

export const updateRectangleMode = (canvas) => {
    let pointer = canvas.getPointer();
    let initialPosition = rectangle.getCoords()[0];

    rectangle.set({
        width: pointer.x - initialPosition.x,
        height: pointer.y - initialPosition.y
    })

    canvas.renderAll()
}