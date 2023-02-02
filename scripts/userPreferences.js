let drawingColor = '#000000';

export function getDrawingColor() {
    return drawingColor;
}

export function setDrawingColor(color) {
    return drawingColor = color;
}

let lineSize = 1;

export function getLineSize() {
    return parseInt(lineSize);
}

export function setLineSize(size) {
    return lineSize = parseInt(size);
}

export function setIncreaseLineSize() {
    return lineSize++;
}

export function setDecreaseLineSize() {
    return lineSize--;
}

let opacity = 1;

export function getOpacity() {
    return parseFloat(opacity);
}

export function setOpacity(value) {
    return opacity = parseFloat(value);
}

let blur = 0;

export function getBlur() {
    return parseInt(blur);
}

export function setBlur(value) {
    return blur = parseInt(value);
}

export const sizeMultiples = {
    pen: 3,
    circle: 5,
    spray: 5,
    pattern: 5,
    hline: 5,
    square: 7
}

