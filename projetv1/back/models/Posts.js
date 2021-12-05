const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  titre: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  popularite: {
    type: String,
    require: true,
  },
  origine: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
