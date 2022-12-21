export const backgroundsList = ["blank.jpg", "sky.jpg", "desert.png", "1.png", "2.png", "3.png", "4.png"];
let backgroundLevel = 0;
const totalBackgroundRows = 3

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
    let htmlStamps = "<div class=\"container\" id=\"container-backgrounds-list\">"
    htmlStamps += "<div class=\"row\">"

    backgroundsList.map((background, index) => {
        htmlStamps += "<div class=\"col-12\" >"
        htmlStamps += `<img ${index > getTotalBackgroundRows() - 1 && " hidden "} style=\"width:100%; height: 6rem; padding-bottom: 15px\" id=\"${background}\" class=\"background-list-item\" src=\"images/backgrounds/${background}\">`
        htmlStamps += "</div>";
    })

    htmlStamps += "</div></div>";

    document.getElementById('div-backgrounds').innerHTML = htmlStamps;

};

export const updateBackgroundLayout = () => {

    const initial = getBackgroundLevel() * getTotalBackgroundRows()
    const final = initial + getTotalBackgroundRows()

    backgroundsList.map((background, index) => {
        if (index >= initial && index < final) {
            document.getElementById(background).hidden = false
        } else {
            document.getElementById(background).hidden = true
        }
    })
}
