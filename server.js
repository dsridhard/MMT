const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');
const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ urlencoded: true }))

// Routes
const flightroutes = require('./routes/flight/flight.routes');

app.get("/mmt", (req, res) => {
  res.json({ "message": 'This is MMT project' }).status(200)
})


app.use("/api", flightroutes)
// Connect to the database
db.sequelize.sync({force:false}).then(() => {
  console.log("Connected to the database.");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`)
});
