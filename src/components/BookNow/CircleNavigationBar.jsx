import React from 'react'
import "./CircleNavigationBar.css"
const CircleNavigationBar = ({currentStep}) => {
  return (
    <div className='outerNavigation'>
        <span className='logoSpan'><img src="./src/assests/logo.png" alt="" className='logo'/></span>
        <div className='doPost'>Do Post </div>


        <div className='steps'>
            <div className='step'>
                <div className={`circle ${currentStep > 1 ? "completed" : currentStep === 1 ? "current" : ""}`}>
                    {currentStep > 1 ? "✓" : ""}
                </div>
                <p>ADDRESS</p>
            </div>

            <div className='line'></div>

            <div className='step'>
                <div className={`circle ${currentStep > 2 ? "completed" : currentStep === 2 ? "current" : ""}`}>
                    {currentStep > 2 ? "✓" : ""}
                </div>
                <p>PACKAGE</p>
            </div>

            <div className='line'></div>

            <div className='step'>
                <div className={`circle ${currentStep > 3 ? "completed" : currentStep === 3 ? "current" : ""}`}>
                    {currentStep > 3 ? "✓" : ""}
                </div>
                <p>SCHEDULE</p>
            </div>

            <div className='line'></div>

            <div className='step'>
                <div className={`circle ${currentStep > 4 ? "completed" : currentStep === 4 ? "current" : ""}`}>
                    {currentStep > 4 ? "✓" : ""}
                </div>
                <p>Summary</p>
            </div>
            
        </div>
    </div>
  )
}

export default CircleNavigationBar
