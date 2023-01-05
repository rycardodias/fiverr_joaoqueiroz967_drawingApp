export const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: window.innerWidth * (10 / 12),
        height: window.innerHeight * 0.999,
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
    canvas.setWidth(window.innerWidth * (10 / 12));
    canvas.setHeight(window.innerHeight * 0.999);
    canvas.calcOffset();
}

export const setOverlayImage = (url, canvas) => {
    canvas.setOverlayImage(url, canvas.renderAll.bind(canvas));
}

export const removeOverlayImage = (canvas) => {
    canvas.setOverlayImage(null, canvas.renderAll.bind(canvas));
}



