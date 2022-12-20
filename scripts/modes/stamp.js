import { getDrawingColor, getLineSize } from '../userPreferences.js'


export const setStampMode = (canvas, mouse, imageId) => {
    const scale = 0.2

    fabric.Image.fromURL(`images/stamps/${imageId}`, function (img) {
        img.set({
            left: mouse.e.clientX - img.width / 2 * scale,
            top: mouse.e.clientY - img.height / 2 * scale
        });

        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = true;

        img.scale(scale);

        canvas.add(img);
    });

    canvas.renderAll();
}