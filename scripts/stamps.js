export const stampsList = ["1.png", "2.png", "3.png", "4.png", "5.png",];
let stampLevel = 0;
const totalStampRows = 6

export function getStampLevel() {
    return stampLevel;
}

export function getTotalStampsRows() {
    return totalStampRows
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

    stampsList.map((item, index) => {
        htmlStamps += `<div class=\"col-lg-6 col-md-6 col-sm-12\" id=\"col_stamps_${item}"\ >`
        htmlStamps += `<img  ${index > getTotalStampsRows() - 1 && " hidden "} id=\"stamps_${item}\" class=\"stamps-list-item\" `
        htmlStamps += `style=\"width:100%; height: auto; background-color: #9BA09C; margin-bottom: 15px  \" src=\"images/stamps/${item}\">`
        htmlStamps += "</div>";
    })

    htmlStamps += "</div></div>";

    document.getElementById('div-stamps').innerHTML = htmlStamps;

};

export const updateStampLayout = () => {

    const initial = getStampLevel() * getTotalStampsRows()
    const final = initial + getTotalStampsRows()

    stampsList.map((item, index) => {
        if (index >= initial && index < final) {
            document.getElementById('col_stamps_' + item).hidden = false
            document.getElementById('stamps_' + item).hidden = false
        } else {
            document.getElementById('col_stamps_' + item).hidden = true
            document.getElementById('stamps_' + item).hidden = true
        }
    })
}

export const setStampMarked = (id) => {
    let alreadyMarked;

    if (id) {
        alreadyMarked = document.getElementById(id).classList.contains('contorno')
    }

    document.querySelectorAll('.stamps-list-item').forEach(item => {
        document.getElementById(item.id).classList.remove('contorno')
    });

    if (!id) return

    if (!alreadyMarked) {
        document.getElementById(id).classList.add('contorno')
    }
}
