import { getDrawingColor, getLineSize, getBlur } from '../userPreferences.js'


export const setStampMode = (canvas, mouse, imageId) => {
    // var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
    // var deleteImg = document.createElement('img');
    // deleteImg.src = deleteIcon;

    // canvas.drawImage(deleteImg, 100, 100, 100, 100);
    // canvas.restore();




    const scale = 0.2

    fabric.Image.fromURL(`images/stamps/${imageId}`, function (img) {
        img.set({
            left: mouse.e.clientX - img.width / 2 * scale,
            top: mouse.e.clientY - img.height / 2 * scale
        });

        img.perPixelTargetFind = true;
        img.hasControls = img.hasBorders = true;

        img.scale(scale);

        var filter = new fabric.Image.filters.Blur({
            blur: getBlur()
        });
        img.filters.push(filter);
        img.applyFilters();

        canvas.add(img);
    });

    canvas.renderAll();
}