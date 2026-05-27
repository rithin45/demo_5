const express = require("express");
const { createContactSubmission } = require("../controllers/contactController");

const router = express.Router();

router.post("/", createContactSubmission);

module.exports = router;
