const TicketRegistration = require("../models/TicketRegistration");

async function createTicketRegistration(req, res, next) {
  try {
    const {
      fullName,
      email,
      company,
      passType,
      billingCycle,
      teamSize,
      notes,
    } = req.body;

    if (!fullName || !email || !passType || !billingCycle) {
      res.status(400);
      throw new Error("Full name, email, pass type, and billing cycle are required.");
    }

    const ticketRequest = await TicketRegistration.create({
      fullName,
      email,
      company,
      passType,
      billingCycle,
      teamSize,
      notes,
    });

    res.status(201).json({
      message: "Your ticket request is in. Concierge confirmation is on the way.",
      data: ticketRequest,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTicketRegistration,
};
