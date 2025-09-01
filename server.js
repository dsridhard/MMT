const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');
const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ urlencoded: true }))

// Routes
const flightroutes = require('./routes/flight/flight.routes');
const flightseatroutes =require('./routes/flight/flightseat.routes')
app.get("/mmt", (req, res) => {
  res.json({ "message": 'This is MMT project' }).status(200)
})


app.use("/api", flightroutes)
app.use("/api",flightseatroutes)
// Connect to the database
db.sequelize.sync({force:false,logging: false}).then(() => {
  console.log("Connected to the database Successfully.");
})

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`)
});
