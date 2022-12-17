
export const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: 800,
        height: 600,
        selection: false,
    });
};

export const setBackgroundImage = (url, element) => {
    fabric.Image.fromURL(url, (img) => {
        element.backgroundImage = img;
        element.renderAll();
    })
};

