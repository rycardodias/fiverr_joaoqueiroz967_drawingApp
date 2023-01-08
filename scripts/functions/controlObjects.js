var deleteImg = document.createElement('img');
deleteImg.src = './images/icons/ic_eliminar.svg'
var rotateImg = document.createElement('img');
rotateImg.src = './images/icons/ic_rotate_central.svg'
var scaleImg = document.createElement('img');
scaleImg.src = './images/icons/ic_scale_central.svg'
var unselectImg = document.createElement('img');
unselectImg.src = './images/icons/ic_ok.svg'

function calculateSize(size) {
    size *= 220

    if (size > 50) {
        return 50;
    } else if (size < 30) {
        return 30;
    } else {
        return size;
    }
}

function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
}

function renderDeleteIcon(ctx, left, top, styleOverride, fabricObject) {

    var size = calculateSize(fabricObject.scaleX);

    this.sizeX = size;
    this.sizeY = size;

    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(deleteImg, -size / 2, -size / 2, size, size);
    ctx.restore();
}

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.6,
    y: 0.4,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderDeleteIcon
});


function renderRotateIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = calculateSize(fabricObject.scaleX);

    this.sizeX = size;
    this.sizeY = size;

    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(rotateImg, -size / 2, -size / 2, size, size);
    ctx.restore();
}

fabric.Object.prototype.controls.rotate = new fabric.Control({
    x: 0.6,
    y: -0.2,
    actionHandler: fabric.controlsUtils.rotationWithSnapping,
    actionName: 'rotate',
    cursorStyle: 'pointer',
    render: renderRotateIcon
});

function renderScaleIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = calculateSize(fabricObject.scaleX);

    this.sizeX = size;
    this.sizeY = size;

    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(scaleImg, -size / 2, -size / 2, size, size);
    ctx.restore();
}

fabric.Object.prototype.controls.scale = new fabric.Control({
    x: 0.6,
    y: 0.1,
    actionHandler: fabric.controlsUtils.scalingEqually,//change to this
    actionName: 'scale',
    cursorStyle: 'pointer',
    render: renderScaleIcon
});


function renderUnselectIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = calculateSize(fabricObject.scaleX);

    this.sizeX = size;
    this.sizeY = size;

    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(unselectImg, -size / 2, -size / 2, size, size);
    ctx.restore();
}

fabric.Object.prototype.controls.unselect = new fabric.Control({
    x: 0.6,
    y: -0.5,
    actionHandler: fabric.controlsUtils.dragHandler,//change to this
    actionName: 'drag',
    cursorStyle: 'pointer',
    render: renderUnselectIcon,
    mouseUpHandler: unselectObject,
});


function unselectObject(eventData, transform) {
    var target = transform.target;

    var canvas = target.canvas;
    canvas.discardActiveObject(target);
    canvas.renderAll()
}

