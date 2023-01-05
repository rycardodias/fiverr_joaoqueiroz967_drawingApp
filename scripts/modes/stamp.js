import { getDrawingColor, getLineSize, getBlur } from '../userPreferences.js'



export const setStampMode = (canvas, mouse, imageId) => {
    const scale = 0.2

    var moveImg = document.createElement('img');
    moveImg.src = './images/icons/ic_mover.svg'

    fabric.Image.fromURL(`images/stamps/${imageId}`, function (img) {
        img.set({
            left: mouse.e.clientX - img.width / 2 * scale,
            top: mouse.e.clientY - img.height / 2 * scale
        });

        // img.perPixelTargetFind = true;
        img.hasControls = true
        img.hasBorders = false;

        img.setControlsVisibility({
            mt: false,
            mb: false,
            ml: false,
            mr: false,
            tr: false,
            tl: false,
            br: false,
            bl: false,
            mtr: false
        });

        img.scale(scale);

        var filter = new fabric.Image.filters.Blur({
            blur: getBlur()
        });
        img.filters.push(filter);
        img.applyFilters();

        canvas.add(img);
        canvas.setActiveObject(img);
    });

    canvas.renderAll();
}