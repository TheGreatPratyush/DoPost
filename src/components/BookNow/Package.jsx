import React, { useState } from "react";
import "./Package.css";

const Package = ({page,setPage,currentStep,setCurrentStep}) => {
  const [step, setStep] = useState(1);

  return (
    <div className="package">
      <h2>Package Details</h2>


      <div className="section">
        <div className="sectionHeader">
          Select Packaging
        </div>

        {step === 1 && (
          <div className="sectionBody">

            <div className="items">

              <div className="box">
                <img
                  src="./src/assests/Envelop.png"
                  alt=""
                  className="image"
                />
                <p>Envelope</p>
              </div>

              <div className="box">
                <img
                  src="./src/assests/Box.png"
                  alt=""
                  className="image"
                />
                <p>Box / Carton</p>
              </div>

              <div className="box">
                <img
                  src="./src/assests/Suitcase.png"
                  alt=""
                  className="image"
                />
                <p>Suitcase</p>
              </div>

              <div className="box">
                <img
                  src="./src/assests/Bag.png"
                  alt=""
                  className="image"
                />
                <p>Backpack</p>
              </div>

            </div>

            <button
              className="nextBtn"
              onClick={() => setStep(2)}
            >
              Next
            </button>

          </div>
        )}
      </div>

      

      <div className="section">
        <div className="sectionHeader">
          Choose Parcel Weight
        </div>

        {step === 2 && (
          <div className="sectionBody">

            <div className="weightContainer">

              <div className="weightBox">
                <span className="weightTag">XS</span>
                <p>UPTO 0.5 KG</p>
              </div>

              <div className="weightBox">
                <span className="weightTag">S</span>
                <p>0.5 KG - 2 KG</p>
              </div>

            </div>

            <button
              className="nextBtn"
              onClick={() => setStep(3)}
            >
              Next
            </button>

          </div>
        )}
      </div>

      

      <div className="section">
        <div className="sectionHeader">
          Choose Package Content
        </div>

        {step === 3 && (
          <div className="sectionBody">

            <div className="contentItems">

              <div className="contentBox">
                📚
                <p>Books & Documents</p>
              </div>

              <div className="contentBox">
                📱
                <p>Electronics</p>
              </div>

              <div className="contentBox">
                📦
                <p>Others</p>
              </div>

            </div>

            <button
              className="nextBtn"
              onClick={() => setStep(4)}
            >
              Next
            </button>

          </div>
        )}
      </div>

     

      <div className="section">
        <div className="sectionHeader">
          Delhivery Protect
        </div>

        {step === 4 && (
          <div className="sectionBody">
            <p>
              Protect your shipment against
              loss and damage.
            </p>
            
              <button className="nextBtn"
              onClick={()=>{
                if (currentStep<4){
                    setCurrentStep(currentStep+1)
                }
                setPage(page+1)
              }}>
                Next
              </button>
            </div>
          
        )}
      </div>

    </div>
  );
};

export default Package;