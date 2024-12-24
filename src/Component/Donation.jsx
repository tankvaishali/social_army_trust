import React from 'react'
import { useNavigate } from 'react-router-dom'

function Donation() {
  let navigate=useNavigate()
  let donation=()=>{
    navigate("/contactuspage")
  }
  return (
    <div>
        <button type='button' className='donatebtn rounded-pill fw-bold border-0' onClick={donation}>Make A Donation</button>
        </div>
  )
}

export default Donation