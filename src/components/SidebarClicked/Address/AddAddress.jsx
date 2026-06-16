import React, { useState } from "react";
import "./AddAddress.css";

const AddAddress = ({
  setShowForm,
  setAddresses,
}) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [flat, setFlat] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");

  const [addressType, setAddressType] = useState("");
  const [otherType, setOtherType] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    const newAddress = {
      id: Date.now(),
      name,
      mobile,
      email,
      flat,
      city,
      state: stateName,
      pincode,
      addressType:
        addressType === "Other"
          ? otherType
          : addressType,
    };

    setAddresses((prev) => [...prev, newAddress]);

    setShowForm(false);
  };

  return (
    <div className="formContainer">

      <h2>Add New Address</h2>

      <form onSubmit={handleSave}>

        <fieldset className="contact">
          <legend>Contact Detail</legend>

          <div className="contactinside">
            <div>
              <label>Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
            </div>

            <div>
              <label>Mobile Number</label>
              <input
                type="number"
                required
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value)
                }
              />
            </div>
          </div>

          <div>
            <label>Email Id</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>
        </fieldset>

        <fieldset className="address">
          <legend>Address Details</legend>

          <div className="detailedAddress">
            <label>
              Flat, Housing no., Building,
              Apartment
            </label>

            <input
              type="text"
              required
              value={flat}
              onChange={(e) =>
                setFlat(e.target.value)
              }
            />
          </div>

          <div className="pincode">

            <div>
              <label>Pincode</label>
              <input
                type="number"
                required
                value={pincode}
                onChange={(e) =>
                  setPincode(e.target.value)
                }
              />
            </div>

            <div>
              <label>City</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) =>
                  setCity(e.target.value)
                }
              />
            </div>

            <div>
              <label>State</label>
              <input
                type="text"
                required
                value={stateName}
                onChange={(e) =>
                  setStateName(e.target.value)
                }
              />
            </div>

          </div>
        </fieldset>

        <fieldset className="addressTypeSection">
          <legend>Address Type</legend>

          <div className="addressTypes">

            <label className="typeOption">
              <input
                type="radio"
                name="addressType"
                value="Home"
                required
                onChange={(e) =>
                  setAddressType(e.target.value)
                }
              />
              Home
            </label>

            <label className="typeOption">
              <input
                type="radio"
                name="addressType"
                value="Office"
                onChange={(e) =>
                  setAddressType(e.target.value)
                }
              />
              Office
            </label>

            <label className="typeOption">
              <input
                type="radio"
                name="addressType"
                value="Other"
                onChange={(e) =>
                  setAddressType(e.target.value)
                }
              />
              Other
            </label>

          </div>

          {addressType === "Other" && (
            <div className="otherField">
              <label>
                Specify Address Type
              </label>

              <input
                type="text"
                required
                value={otherType}
                onChange={(e) =>
                  setOtherType(e.target.value)
                }
                placeholder="Hostel, Shop, Warehouse etc."
              />
            </div>
          )}

        </fieldset>

        <button
          className="saveBtn"
          type="submit"
        >
          Save Address
        </button>

      </form>

    </div>
  );
};

export default AddAddress;