import { getDrawingColor, getLineSize } from '../userPreferences.js'


export const setStampMode = (canvas, imageId) => {

    fabric.Image.fromURL(`images/stamps/${imageId}`, function (img) {
        img.set({
            left: 100,
            top: 100,
            angle: 0
        });

        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = true;

        img.scale(0.20);

        canvas.add(img);
    });

    canvas.renderAll();
}