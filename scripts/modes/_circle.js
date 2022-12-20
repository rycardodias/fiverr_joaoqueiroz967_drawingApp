
import { getDrawingColor, getLineSize } from '../userPreferences.js'

let circle;

export const setCircleMode = (canvas) => {
    let pointer = canvas.getPointer(canvas);

    circle = new fabric.Circle({
        left: pointer.x,
        top: pointer.y,
        radius: 0,
        fill: getDrawingColor()
    })

    canvas.setActiveObject(circle)

    canvas.add(circle)
    canvas.renderAll()
}

export const updateCircleMode = (canvas) => {
    let pointer = canvas.getPointer();
    let initialPosition = circle.getCoords()[0];

    let distance = Math.abs(((pointer.x - initialPosition.x) ^ 2) + ((pointer.y - initialPosition.y) ^ 2))

    circle.set({
        radius: distance
    })

    canvas.renderAll()
}