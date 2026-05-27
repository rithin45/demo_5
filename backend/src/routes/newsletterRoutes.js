const express = require("express");
const {
  createNewsletterSubscription,
} = require("../controllers/newsletterController");

const router = express.Router();

router.post("/", createNewsletterSubscription);

module.exports = router;
