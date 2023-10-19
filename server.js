require('dotenv').config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the martfcury");
    });


// const calculateTax = async (items, currency) => {
//   const taxCalculation = await stripe.tax.calculations.create({
//     currency,
//     customer_details: {
//       address: {
//         line1: "920 5th Ave",
//         city: "Seattle",
//         state: "WA",
//         postal_code: "98104",
//         country: "US",
//       },
//       address_source: "shipping",
//     },
//     line_items: items.map((item) => buildLineItem(item)),
//   });

//   return taxCalculation;
// };

// const buildLineItem = (item) => {
//   return {
//     amount: item.amount, // Amount in cents
//     reference: item.id, // Unique reference for the item in the scope of the calculation
//   };
// };

const array = [];
const calculateOrderAmount = (items, taxCalculation) => {
 
   items.map((item) => {
      const { price, cartQuantity } = item;
      const cartItemAmount = price * cartQuantity;
      return array.push(cartItemAmount);
    });
    const totalAmount = array.reduce((a, b) => {
      return a + b;
    }, 0);
  


  return totalAmount * 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items,shipping, description } = req.body;


  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "pln",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
    description,
    shipping:{
        address:{
            line1:shipping.address,
            line2:shipping.address,
            city:shipping.city,
            postal_code:shipping.postal_code,
            country:shipping.country,
        },
        name:shipping.name,
        phone:shipping.phone,

    }, 
    // receipt_email: customerEmail,

  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}`)
);