import React, { useState } from "react";
import "./Address.css";
import AddAddress from "./AddAddress";

const SavedAddress = () => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]);

  return (
    <>
      <div className="savedAddressContainer">

        <div className="savedAddressHeader">
          <h2>Saved Addresses</h2>

          <button
            className="addAddressBtn"
            onClick={() => setShowForm(true)}
          >
            + Add New Address
          </button>
        </div>

        <div className="addressCards">
          {addresses.map((address) => (
            <div className="addressCard" key={address.id}>

              <div className="cardTop">
                <h3>{address.name}</h3>

                <span>
                  {address.addressType === "Home" && "🏠 Home"}
                  {address.addressType === "Office" && "🏢 Office"}

                  {address.addressType !== "Home" &&
                    address.addressType !== "Office" &&
                    `📍 ${address.addressType}`}
                </span>
              </div>

              <p>
                {address.flat}, {address.city}, {address.state} -{" "}
                {address.pincode}
              </p>

              <div className="cardBottom">
                {address.mobile}
              </div>

            </div>
          ))}
        </div>

      </div>

      {showForm && (
        <div
          className="overlay"
          onClick={() => setShowForm(false)}
        >
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
          >
            <AddAddress
              setShowForm={setShowForm}
              setAddresses={setAddresses}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SavedAddress;