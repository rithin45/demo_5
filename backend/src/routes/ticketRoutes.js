const express = require("express");
const {
  createTicketRegistration,
} = require("../controllers/ticketController");

const router = express.Router();

router.post("/", createTicketRegistration);

module.exports = router;
