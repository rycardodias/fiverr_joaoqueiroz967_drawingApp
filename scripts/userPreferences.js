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


