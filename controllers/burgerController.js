const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router()


router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    res.render("index", { burgers: data })
  })
})


router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.name], function (data) {
    res.json(data)
  })
})

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id=" + req.params.id
  burger.updateOne({ devoured: true }, condition, function (data) {
    res.json(data)
  })
})

router.delete("/api/burgers/:id", function (req, res) {
  const condition = "id = " + req.params.id;
  console.log(condition)
  burger.deleteOne(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router