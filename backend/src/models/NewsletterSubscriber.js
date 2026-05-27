const mongoose = require("mongoose");

const newsletterSubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    source: {
      type: String,
      trim: true,
      default: "website",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "NewsletterSubscriber",
  newsletterSubscriberSchema
);
