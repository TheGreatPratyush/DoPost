import React from 'react'
import "./Order.css"
const Order = () => {
  return (
    <div>
      <div className='outcontainer'>
        <div className='all'>All</div>
        <div className='courier'>Courier</div>
        <div className='parcel'>Parcel</div>
      </div>
        <div className='message'>
            <h3>Oops!</h3>
            <p>No Package Found</p>
        </div>
    </div>
  )
}

export default Order
