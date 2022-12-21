import { backgroundsList, getTotalBackgroundRows } from './backgrounds.js'
import { stampsList, getTotalStampsRows } from './stamps.js';

if (backgroundsList.length > getTotalBackgroundRows()) {
    document.getElementById('backgrounds-down-arrow').hidden = false;
    document.getElementById('backgrounds-up-arrow').hidden = false;
}

if (stampsList.length > getTotalStampsRows()) {
    document.getElementById('stamps-down-arrow').hidden = false;
    document.getElementById('stamps-up-arrow').hidden = false;
}