import { setDrawingColor, setLineSize, setOpacity, setBlur } from './userPreferences.js'

// document.getElementById('input-color').addEventListener('change', (e) => {
//     return setDrawingColor(e.target.value)
// });

document.getElementById('input-linesize').addEventListener('change', (e) => {
    return setLineSize(e.target.value)
});

document.getElementById('input-opacity').addEventListener('change', (e) => {
    return setOpacity(e.target.value)
});
document.getElementById('input-blur').addEventListener('change', (e) => {
    return setBlur(e.target.value)
});


