var deleteImg = document.createElement('img');
deleteImg.src = './images/icons/ic_eliminar.svg'
var rotateImg = document.createElement('img');
rotateImg.src = './images/icons/ic_rotate_central.svg'
var scaleImg = document.createElement('img');
scaleImg.src = './images/icons/ic_scale_central.svg'
var unselectImg = document.createElement('img');
unselectImg.src = './images/icons/ic_ok.svg'

function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
}

function renderDeleteIcon(ctx, left, top, styleOverride, fabricObject) {
    let scalingSize = 220 * fabricObject.scaleX;
    var size;
    if (scalingSize > 50) {
        size = 50;
    } else if (scalingSize < 25) {
        size = 25;
    } else {
        size = scalingSize;
    }
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
    let scalingSize = 220 * fabricObject.scaleX;
    var size;
    if (scalingSize > 50) {
        size = 50;
    } else if (scalingSize < 25) {
        size = 25;
    } else {
        size = scalingSize;
    }

    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(rotateImg, -size / 2, -size / 2, size, size);
    ctx.restore();
}

fabric.Object.prototype.controls.rotate = new fabric.Control({
    x: 0.6,
    y: -0.2,
    cornerSize: 500,
    actionHandler: fabric.controlsUtils.rotationWithSnapping,//change to this
    actionName: 'rotate',
    cursorStyle: 'pointer',
    render: renderRotateIcon
});

function renderScaleIcon(ctx, left, top, styleOverride, fabricObject) {
    let scalingSize = 220 * fabricObject.scaleX;
    var size;
    if (scalingSize > 50) {
        size = 50;
    } else if (scalingSize < 25) {
        size = 25;
    } else {
        size = scalingSize;
    }
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
    let scalingSize = 220 * fabricObject.scaleX;
    var size;
    if (scalingSize > 50) {
        size = 50;
    } else if (scalingSize < 25) {
        size = 25;
    } else {
        size = scalingSize;
    }
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

