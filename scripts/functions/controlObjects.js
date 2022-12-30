var deleteImg = document.createElement('img');
deleteImg.src = './images/icons/ic_eliminar.svg'
var moveImg = document.createElement('img');
moveImg.src = './images/icons/ic_mover.svg'

function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
}

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderDeleteIcon,
    cornerSize: 24
});


function renderDeleteIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(deleteImg, -size / 2, -size / 2, size, size);
    ctx.restore();
}

// fabric.Object.prototype.controls.moveControl = new fabric.Control({
//     x: 10,
//     y: -10,
//     offsetY: 16,
//     cursorStyle: 'pointer',
//     mouseUpHandler: deleteObject,
//     render: renderMoveIcon,
//     cornerSize: 24
// });


// function renderMoveIcon(ctx, left, top, styleOverride, fabricObject) {
//     var size = this.cornerSize;
//     ctx.save();
//     ctx.translate(left + 50, top + 50);
//     ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
//     ctx.drawImage(moveImg, -size / 2 + 50, -size / 2 + 50, size, size);
//     ctx.restore();
// }