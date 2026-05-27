const NewsletterSubscriber = require("../models/NewsletterSubscriber");

async function createNewsletterSubscription(req, res, next) {
  try {
    const { email, source } = req.body;

    if (!email) {
      res.status(400);
      throw new Error("Email is required.");
    }

    const existingSubscriber = await NewsletterSubscriber.findOne({ email });

    if (existingSubscriber) {
      return res.status(200).json({
        message: "You are already on the Astra Nova list.",
        data: existingSubscriber,
      });
    }

    const subscriber = await NewsletterSubscriber.create({
      email,
      source,
    });

    res.status(201).json({
      message: "You are on the list for private Astra Nova updates.",
      data: subscriber,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createNewsletterSubscription,
};
