const ContactSubmission = require("../models/ContactSubmission");

async function createContactSubmission(req, res, next) {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      res.status(400);
      throw new Error("Name, email, and message are required.");
    }

    const submission = await ContactSubmission.create({
      name,
      email,
      company,
      message,
    });

    res.status(201).json({
      message: "Your message has been sent. Our team will be in touch shortly.",
      data: submission,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createContactSubmission,
};
