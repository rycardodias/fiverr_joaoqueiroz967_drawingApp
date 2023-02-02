const { randomUUID } = require("crypto");
const express = require("express");
const app = express();

const fs = require('fs');

app.listen(3000, () => {
  console.log('Application started and Listening on port http://localhost:3000');
});

app.use(express.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/saveImage', (req, res) => {
  const { imgBase64, email } = req.body

  const directory = require('./globals.json').imagesFolder

  const data = imgBase64.replace(/^data:image\/\w+;base64,/, "");

  const image = `${Date.now()}_${randomUUID()}.png`

  const buf = Buffer.from(data, "base64");
  fs.writeFileSync(`${directory}/${image}`, buf);

  res.json(imgBase64)

  addObject({ email, image })
})

// send emails

const { removeObject, addObject } = require("./email/localDatabase");
const sendEmail = require("./email/sendEmail");

setInterval(() => {
  const dataArray = require('./email/data.json');

  dataArray.map(item => {
    sendEmail(item.email, item.image)
      .then((result) => {
        removeObject(dataArray, item)
      })
      .catch((error) => {
        console.log(error)
      })

  })
}, 1000 * 60
)
