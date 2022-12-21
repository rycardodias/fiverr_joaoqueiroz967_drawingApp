export const stampsList = ["1.png", "2.png", "3.png", "4.png", "5.png"];

let totalStampsRows = 2;
let stampLevel = 0;

export function getTotalStampsRows() {
    return totalStampsRows;
}

export function getStampLevel() {
    return stampLevel;
}

export function setIncreaseStampLevel() {
    return stampLevel++
};

export function setDecreaseStampLevel() {
    if (stampLevel > 0)
        return stampLevel--
};


export const getStamps = () => {
    let htmlStamps = "<div class=\"container\" id=\"container-stamps-list\">"
    htmlStamps += "<div class=\"row\">"

    stampsList.map((stamp, index) => {
        htmlStamps += "<div class=\"col-lg-6 col-md-6 col-sm-12\">"
        htmlStamps += `<img ${index > getTotalStampsRows() - 1 && " hidden "} style=\"width:75px\" id=\"${stamp}\" class=\"stamp-list-item\" src=\"images/stamps/${stamp}\">`
        htmlStamps += "</div>";
    })

    htmlStamps += "</div></div>";

    document.getElementById('div-stamps').innerHTML = htmlStamps;
}


export const updateStampLayout = () => {

    const initial = getStampLevel() * getTotalStampsRows()
    const final = initial + getTotalStampsRows()

    stampsList.map((stamp, index) => {
        if (index >= initial && index < final) {
            console.log(stamp)
            document.getElementById(stamp).hidden = false
        } else {
            document.getElementById(stamp).hidden = true
        }
    })
    console.log("####")
}