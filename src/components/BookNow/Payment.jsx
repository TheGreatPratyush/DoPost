import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="paymentCard">
      <div className="paymentContent">
        <h1>Payment Details</h1>

        <div className="insuranceBox">
          <div className="insuranceLeft">
            <input type="checkbox" className="checkBox" />

            <div>
              <p className="insuranceTitle">
                Secure your package for just ₹100
              </p>

              <p className="coveredLink">
                See what is covered
              </p>
            </div>
          </div>

          <div className="shield">
            🛡️
          </div>
        </div>

        <div className="couponBox">
          <div className="couponLeft">
            <span className="couponIcon">%</span>

            <div>
              <p className="couponCode">
                DLV25
              </p>

              <p className="couponText">
                Offer applied on the bill
              </p>
            </div>
          </div>

          <span className="removeCoupon">
            ✕
          </span>
        </div>

        <div className="divider"></div>

        <h2 className="deliveryHeading">
          Select Delivery Type
        </h2>

        <div className="deliveryOptions">
          <div className="deliveryCard activeCard">
            <div className="deliveryType">
              🚚 SURFACE
            </div>

            <div className="priceRow">
              <span className="currentPrice">
                ₹87
              </span>

              <span className="oldPrice">
                ₹115.91
              </span>
            </div>

            <p>
              Delivery in 6 days
            </p>

            <p>
              You saved ₹28.91 with this coupon!
            </p>
          </div>

          <div className="deliveryCard">
            <div className="deliveryType">
              🚚 EXPRESS
            </div>

            <div className="priceRow">
              <span className="currentPrice">
                ₹112
              </span>

              <span className="oldPrice">
                ₹149.46
              </span>
            </div>

            <p>
              Delivery in 4 days
            </p>

            <p>
              You saved ₹28.91 with this coupon!
            </p>
          </div>
        </div>
      </div>

      <div className="paymentFooter">
        <button className="payBtn">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;