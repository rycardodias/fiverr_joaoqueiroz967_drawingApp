export const overlaysList = ["teste.png", "teste2.png"];
let overlayLevel = 0;
const totalOverlayRows = 4
export const defaultOverlay = ""

export function getOverlayLevel() {
    return overlayLevel;
}

export function getTotalOverlayRows() {
    return totalOverlayRows
}
export function setIncreaseOverlayLevel() {
    return overlayLevel++
};

export function setDecreaseOverlayLevel() {
    if (overlayLevel > 0)
        return overlayLevel--
};

export const getOverlays = () => {
    let html = "<div class=\"container\" id=\"container-overlays-list\">"
    html += "<div class=\"row\">"

    overlaysList.map((overlay, index) => {
        html += "<div class=\"col-12\" >"
        html += `<img ${index > getTotalOverlayRows() - 1 && " hidden "} style=\"width:100%; height: auto; margin-bottom: 15px\" id=\"overlay_${overlay}\" class=\"overlay-list-item\" src=\"images/overlays/${overlay}\">`
        html += "</div>";
    })

    html += "</div></div>";

    document.getElementById('div-overlays').innerHTML = html;

};

export const updateOverlayLayout = () => {

    const initial = getOverlayLevel() * getTotalOverlayRows()
    const final = initial + getTotalOverlayRows()

    overlaysList.map((overlay, index) => {
        if (index >= initial && index < final) {
            document.getElementById('overlay_' + overlay).hidden = false
        } else {
            document.getElementById('overlay_' + overlay).hidden = true
        }
    })
}
