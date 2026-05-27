const mongoose = require("mongoose");

const ticketRegistrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    passType: {
      type: String,
      required: true,
      enum: ["Basic Pass", "Pro Pass", "VIP Pass"],
    },
    billingCycle: {
      type: String,
      required: true,
      enum: ["monthly", "yearly"],
    },
    teamSize: {
      type: Number,
      min: 1,
      default: 1,
    },
    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TicketRegistration", ticketRegistrationSchema);
