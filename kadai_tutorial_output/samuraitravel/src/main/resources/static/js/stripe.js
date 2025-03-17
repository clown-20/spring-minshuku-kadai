const stripe = Stripe('pk_test_51R2uMhIIUywzHWpLILf1fnIsXRBBe331yTV1Fe7XEYoeQzCQLx0cw0Fp8CDTKH7QUkDEe1U4t3BBPaCRJ2LC7Qln00hNVoju1X');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});