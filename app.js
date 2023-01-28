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
  const { imgBase64 } = req.body

  const directory = 'C:/desenhos'

  const data = imgBase64.replace(/^data:image\/\w+;base64,/, "");

  const buf = Buffer.from(data, "base64");
  fs.writeFileSync(`${directory}/${Date.now()}_${"desenho"}.png`, buf);

  res.json(imgBase64)
})

// const sendEmail = require('./email/sendEmail')

// sendEmail('ricdias98@gmail.com', 'teste.png')

