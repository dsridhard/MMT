const app = require("./index");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
