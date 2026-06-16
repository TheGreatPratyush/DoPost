import React, { useState } from "react";

import CircleNavigationBar from "./components/BookNow/CircleNavigationBar";
import ThingsToKeepInMind from "./components/BookNow/ThingsToKeepInMind";

import HomeCard from "./components/BookNow/HomeCard";
import Package from "./components/BookNow/Package";
import Schedule from "./components/BookNow/Schedule";
import Payment from "./components/BookNow/Payment";

const BookNowLayout = ({ setIsBooking }) => {
  const [currentStep, setCurrentStep] =
    useState(1);

  const [page, setPage] =
    useState(1);

  return (
    <>
      <CircleNavigationBar
        currentStep={currentStep}
      />

      <div className="o">

        <ThingsToKeepInMind />

        {page === 1 && (
          <HomeCard
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            page={page}
            setPage={setPage}
          />
        )}

        {page === 2 && (
          <Package
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            page={page}
            setPage={setPage}
          />
        )}

        {page === 3 && (
          <Schedule
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            page={page}
            setPage={setPage}
          />
        )}

        {page === 4 && (
          <Payment
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            page={page}
            setPage={setPage}
            setIsBooking={setIsBooking}
          />
        )}

      </div>
    </>
  );
};

export default BookNowLayout;