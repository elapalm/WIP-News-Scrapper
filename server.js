// npm requires
var express = require("express");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
//HB stuff
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");



// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);