const canvasRow = document.getElementById('row-center')

export const initCanvas = (id) => {
    var offsetWidth = document.getElementById('left-bar').offsetWidth;

    return new fabric.Canvas(id, {
        width: offsetWidth * 0.98,
        height: window.innerHeight * 0.98,
        selection: false,
    });
};

export const setBackgroundImage = (url, canvas) => {
    fabric.Image.fromURL(url, (img) => {
        canvas.backgroundImage = img;
        canvas.renderAll();
    })
};

export const removeBackgroundImage = (canvas) => {
    canvas.backgroundImage = null;
    canvas.renderAll();
};

export const resizeCanvas = (canvas) => {
    canvas.setWidth(canvasRow.offsetWidth * 0.70);
    canvas.setHeight(window.innerHeight * 0.8);
    canvas.calcOffset();
}

