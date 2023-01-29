const fs = require('fs');

const globals = require('../globals.json')

const filePath = globals.customersPath

function writeFile(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data))
    } catch (error) {
        return console.error(error)
    }
}

function readFile() {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'))
    } catch (error) {
        return []
    }
}

function addObject(record) {
    try {
        if (!record) return;

        let data = readFile()
        data.push(record)

        writeFile(data)
    } catch (error) {
        return console.error(error)
    }
}

function removeObject(data, record) {
    try {
        if (!data && !record) return;

        let index = data.findIndex(obj => obj.image === record.image && obj.email === record.email);

        if (index !== -1) {
            data.splice(index, 1);
            writeFile(data)
            removeImage(record.image)
        }
    } catch (error) {
        return console.error(error)
    }
}

function removeImage(image) {
    fs.unlink(globals.imagesFolder + image, (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`Successfully removed file: ${filePath}`);
        }
    });
}

module.exports = { addObject, removeObject }
