import React from 'react'
import "./SideBar.css"

const SideBar = ({name,logo}) => {
  return (
    <div className='out'>
        <div>{logo}</div>
        <div>{name}</div>
    </div>
  )
}

export default SideBar
