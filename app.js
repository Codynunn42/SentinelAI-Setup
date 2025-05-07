// Live Stripe Key Integration for Sentinel Consultation
const stripe = Stripe("pk_live_51RJlBwA90o4FZFq372ZP1GhMr6Al1nvvfEfRVwAFPYjuUY4ucGDHbpfyMGi3Ntxy2oyNxWnbSRxDyaSlQyy8B1vd00YMx0Tt1v");

const elements = stripe.elements();
const cardElement = elements.create("card");
cardElement.mount("#card-element");

const form = document.getElementById("payment-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
    billing_details: {
      email: document.getElementById("email").value,
    },
  });

  if (error) {
    document.getElementById("card-errors").textContent = error.message;
  } else {
    alert("✔ Payment captured. Thank you, Cody. Next: Route to secure backend for fulfillment.");
    // In production, send paymentMethod.id to your secure backend
  }
});
