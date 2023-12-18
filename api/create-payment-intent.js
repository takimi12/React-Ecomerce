// create-payment-intent.js

require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const calculateOrderAmount = (items) => {
  const array = [];
  items.forEach((item) => {
    const { price, cartQuantity } = item;
    const cartItemAmount = price * cartQuantity;
    array.push(cartItemAmount);
  });

  const totalAmount = array.reduce((a, b) => a + b, 0);
  return totalAmount * 100;
};

module.exports = async (req, res) => {
  const { items, shipping, description } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "pln",
      automatic_payment_methods: {
        enabled: true,
      },
      description,
      shipping: {
        address: {
          line1: shipping.address,
          line2: shipping.address,
          city: shipping.city,
          postal_code: shipping.postal_code,
          country: shipping.country,
        },
        name: shipping.name,
        phone: shipping.phone,
      },
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
