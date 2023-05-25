const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const {experiences} = require('./experiences.js');

const {competitions} = require('./competition.js');

const {projects} = require('./projects.js');


app.get("/projects", (req, res) => {
    res.json(projects);
});

app.get("/project/:Name",(req, res) => {
    var titleOfProject = req.params.Name
    var data = projects.find(obj => obj.Name == titleOfProject);
    res.json(data);
});

app.get("/experiences",(req, res) => {
    res.json(experiences);
});

app.get("/experience/:Name",(req, res) => {
    var titleOfProject = req.params.Name
    var data = experiences.find(obj => obj.CompanyName == titleOfProject);
    res.json(data);
});

app.get("/competitions",(req, res) => {
    res.json(competitions);
});

app.get("/competition/:Name",(req, res) => {
    var titleOfProject = req.params.Name
    var data = competitions.find(obj => obj.Name == titleOfProject);
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


