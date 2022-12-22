export const backgroundsList = ["blank.jpg", "sky.jpg", "desert.png"];
let backgroundLevel = 0;
const totalBackgroundRows = 4

export function getBackgroundLevel() {
    return backgroundLevel;
}

export function getTotalBackgroundRows() {
    return totalBackgroundRows
}
export function setIncreaseBackgroundLevel() {
    return backgroundLevel++
};

export function setDecreaseBackgroundLevel() {
    if (backgroundLevel > 0)
        return backgroundLevel--
};

export const getBackgrounds = () => {
    let html = "<div class=\"container\" id=\"container-backgrounds-list\">"
    html += "<div class=\"row\">"

    backgroundsList.map((background, index) => {
        html += "<div class=\"col-12\" >"
        html += `<img ${index > getTotalBackgroundRows() - 1 && " hidden "} style=\"width:100%; height: 6rem; padding-bottom: 15px\" id=\"background_${background}\" class=\"background-list-item\" src=\"images/backgrounds/${background}\">`
        html += "</div>";
    })

    html += "</div></div>";

    document.getElementById('div-backgrounds').innerHTML = html;

};

export const updateBackgroundLayout = () => {

    const initial = getBackgroundLevel() * getTotalBackgroundRows()
    const final = initial + getTotalBackgroundRows()

    backgroundsList.map((background, index) => {
        if (index >= initial && index < final) {
            document.getElementById('background_' + background).hidden = false
        } else {
            document.getElementById('background_' + background).hidden = true
        }
    })
}
