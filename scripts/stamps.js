export const stampsList = ["1.png", "2.png", "3.png", "4.png", "5.png"];

export const getStamps = () => {
    let htmlStamps = "<div class=\"container\" id=\"container-stamps-list\">"
    htmlStamps += "<div class=\"row\">"

    stampsList.map((stamp) => {
        htmlStamps += "<div class=\"col-lg-6 col-md-6 col-sm-12\">"
        htmlStamps += `<img style=\"width:75px\" id=\"${stamp}\" class=\"stamp-list-item\" src=\"images/stamps/${stamp}\">`
        htmlStamps += "</div>";
    })

    htmlStamps += "</div></div>";

    document.getElementById('div-stamps').innerHTML = htmlStamps;
}