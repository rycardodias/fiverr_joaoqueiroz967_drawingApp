const canvasRow = document.getElementById('row-center')

export const initCanvas = (id) => {
    var offsetWidth = document.getElementById('left-bar').offsetWidth;

    return new fabric.Canvas(id, {
        width: window.innerWidth * (10/12)*0.99,
        height: window.innerHeight,
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

