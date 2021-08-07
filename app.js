const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

module.exports = app.get("/", (request, response) => {
  let date = new Date();
  let result = addDays(date, 100);
  let day = result.getDate();
  let month = result.getMonth() + 1;
  let year = result.getFullYear();
  let final_date = `${day}/${month}/${year}`;
  response.send(final_date);
});

app.listen(3000);
