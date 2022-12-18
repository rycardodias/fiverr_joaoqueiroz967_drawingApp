import { setDrawingColor, setLineSize } from './userPreferences.js'

document.getElementById('input-color').addEventListener('change', (e) => {
    return setDrawingColor(e.target.value)
});

document.getElementById('input-linesize').addEventListener('change', (e) => {
    return setLineSize(e.target.value)
});


