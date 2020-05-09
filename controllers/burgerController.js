const express = require("express");
const router = express.Router();
const cat = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  cat.all(function(data) {
    const hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// router.put("/api/cats/:id", function(req, res) {
//   const condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {

//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });


module.exports = router;
