import { backgroundsList, getTotalBackgroundRows } from './backgrounds.js'
import { stampsList, getTotalStampsRows } from './stamps.js';
import { overlaysList, getTotalOverlayRows } from './overlays.js';

if (backgroundsList.length > getTotalBackgroundRows()) {
    document.getElementById('backgrounds-down-arrow').hidden = false;
    document.getElementById('backgrounds-up-arrow').hidden = false;
}

if (stampsList.length > getTotalStampsRows()) {
    document.getElementById('stamps-down-arrow').hidden = false;
    document.getElementById('stamps-up-arrow').hidden = false;
}
if (overlaysList.length > getTotalOverlayRows()) {
    document.getElementById('overlays-down-arrow').hidden = false;
    document.getElementById('overlays-up-arrow').hidden = false;
}