const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');
const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({urlencoded:true}))


// Connect to the database
db.sequelize.sync().then(() => {
  console.log("Connected to the database.");
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
});
