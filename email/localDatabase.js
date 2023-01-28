const fs = require('fs');

const filePath = 'email/data.json'

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

        let index = data.findIndex(obj => obj.name === record.name && obj.email === record.email);

        if (index !== -1) {
            data.splice(index, 1);
            writeFile(data)
        }
    } catch (error) {
        return console.error(error)
    }
}

module.exports = { addObject, removeObject }
