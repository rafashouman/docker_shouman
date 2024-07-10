import { url } from "../config/db.config.js";
//const dbConfig = require("../config/db.config.js");
import mongoose from "mongoose";
//const mongoose = require("mongoose");
import mongoosePaginate from "mongoose-paginate-v2"
//const mongoosePaginate = require('mongoose-paginate-v2');
import data from "./data.model.js"

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = url;
db.data = data(mongoose, mongoosePaginate);

export default db;
