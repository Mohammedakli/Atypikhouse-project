const mongoose = require('mongoose');

const post_schema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true
    },
    titre: {
      type:String
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    picture: {
      type: [String],
    },
    video: {
      type: String,
    },
    prix: {
      type: Number
    },
    superficie: {
      type: Number
    },
    localisation: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    type :  {
      type: String,
    },
    status :  {
      type: String,
    },
    clientId :  {
      type: String,
    },
    likers: {
      type: [String],
      required: true,
    },
    date_open: {
      type: Date,
    },
    date_close: {
      type: Date,
    },
    comments: {
      type: [
        {
          commenterId:String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        }
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('post', post_schema);