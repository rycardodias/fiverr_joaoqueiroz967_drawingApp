export const setDefaultMode = (canvas) => {
    canvas.isDrawingMode = false;
    canvas.setCursor('default');
    canvas.renderAll();
}
