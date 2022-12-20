export const backgroundsList = ["blank.jpg", "sky.jpg", "desert.png"];

export const getBackgrounds = () => {
    let htmlStamps = "<div class=\"container\" id=\"container-backgrounds-list\">"
    htmlStamps += "<div class=\"row\">"

    backgroundsList.map((background) => {
        htmlStamps += "<div class=\"col-12\">"
        htmlStamps += `<img style=\"width:100%; height: 80px; padding-bottom: 15px\" id=\"${background}\" class=\"background-list-item\" src=\"images/backgrounds/${background}\">`
        htmlStamps += "</div>";
    })

    htmlStamps += "</div></div>";

    document.getElementById('div-backgrounds').innerHTML = htmlStamps;
}