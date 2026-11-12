import React from "react";
import CheckoutBanner from "../components/checkout/CheckoutBanner";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";

const Checkout = () => {
  return (
    <>
      <CheckoutBanner />

      <section className="checkout_area section_gap">
        <div className="container">
          <CheckoutForm>
            <OrderSummary />
          </CheckoutForm>
        </div>
      </section>
    </>
  );
};

export default Checkout;
