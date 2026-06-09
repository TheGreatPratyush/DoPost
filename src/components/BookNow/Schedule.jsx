import React from "react";
import "./Schedule.css";

const Schedule = ({page,setPage,currentStep,setCurrentStep}) => {
  return (
    <div className="scheduleCard">
      <div className="scheduleHeader">
        <span className="backArrow">←</span>
        <h2>Schedule your Pickup</h2>
      </div>

      <div className="scheduleContent">
        <h3 className="pickupTitle">SELECT PICKUP DAY</h3>

        <div className="daysContainer">
          <div className="dayCard activeDay">
            <span className="dayName">SUN</span>
            <span className="dayNumber">7</span>
            <span className="month">Jun</span>
          </div>

          <div className="dayCard">
            <span className="dayName">MON</span>
            <span className="dayNumber">8</span>
            <span className="month">Jun</span>
          </div>

          <div className="dayCard">
            <span className="dayName">TUE</span>
            <span className="dayNumber">9</span>
            <span className="month">Jun</span>
          </div>
        </div>

        <div className="infoBox">
          <div className="infoIcon">ⓘ</div>

          <div>
            <p className="infoHeading">
              22:47 hours remaining for the next pickup slot
            </p>

            <p className="infoText">
              Book before 10am to get Same-Day Pickup at your doorstep.
            </p>
          </div>
        </div>
      </div>

      <div className="scheduleFooter">
        <button className="nextBtn" onClick={()=>{
                if (currentStep<4){
                    setCurrentStep(currentStep+1)
                }
                setPage(page+1)
              }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Schedule;