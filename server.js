const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3000;

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to DB
mongoose.connect(
  "mongodb+srv://maezp:CeVend2526@cluster0.xpan5.mongodb.net/CeVend?retryWrites=true&w=majority"
);

//data schema
const manSchema = {
  ime: String,
  prezime: String,
  godiste: Number,
  zanimanje: String,
  adresa: String,
  mobitel: Number,
};

//data model
const Man = mongoose.model("Man", manSchema);

//read route
app.get("/ljudi", (req, res) => {
  Man.find()
    .then((ljudi) => res.json(ljudi))
    .catch((err) => res.status(400).json("erorr" + err));
});
//create route
app.post("/novicovjek", (req, res) => {
  const noviCovjek = new Man({
    ime: req.body.ime,
    prezime: req.body.prezime,
    godiste: req.body.godiste,
    zanimanje: req.body.zanimanje,
    adresa: req.body.adresa,
    mobitel: req.body.mobitel,
  });
  noviCovjek
    .save()
    .then((item) => console.log(item))
    .catch((err) => res.status(400).json("error" + err));
});

//delete route

//update route

app.listen(port, function () {
  console.log("Express mrtvi je pokrenut.");
});
