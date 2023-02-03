export default function buildKeyboard(canvas) {
    let email = ''

    const keys = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'apagar'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', '-', '_', '.'],
        ['@hotmail.com', '@gmail.com', '.com', '@']
    ];

    let htmlObject = '';

    htmlObject += '<div class="loading_enviar" style="display: none;">'

    htmlObject += '<h1 class="txt_loading">A enviar, por favor aguarde...</h1>'
    htmlObject += '<img class="animacao_loading" src="images/loading.svg" alt="" />'
    htmlObject += '</div >'

    htmlObject += '<img class="fechar_formulario" src="images/ic_fechar_loading.svg" alt="" />'
    htmlObject += '<p class="txt_insira_email">Insira o seu email:</p>'
    htmlObject += '<input type="text" class="textarea_formulario" autofocus="true" />'

    keys.map((row, rowIndex) => {
        let htmlRow = '<div class="keyRow" >'
        keys[rowIndex].map((key) => {
            htmlRow += `<div class="key ${key}-key" data-character="${key}">${key}</div>`
        })

        htmlRow += '</div>'
        htmlObject += htmlRow
    })


    htmlObject += '<div key="enviar_btn" class="keyRow_enviar"><div class="key space-key"  data-character="space">Enviar</div></div>'

    document.getElementById('keyboard').innerHTML = htmlObject




    document.querySelectorAll('.key').forEach(function (element) {
        element.addEventListener('mousedown', function (event) {
            var char = event.target.getAttribute('data-character');

            var input = document.querySelector('.textarea_formulario');

            switch (char) {
                case 'apagar':
                    email = '';
                    break;
                case 'space':
                    if (email) {
                        var dataURL = canvas.toDataURL();

                        fetch('/saveImage', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                imgBase64: dataURL,
                                email
                            })
                        })
                            .then(() => document.getElementById('keyboard-container').hidden = true)

                        email = ''
                    }
                    break;
                default:
                    email += char
            }

            input.value = email
        });
    });
}


// document.getElementById('keyboard-container').hidden = false