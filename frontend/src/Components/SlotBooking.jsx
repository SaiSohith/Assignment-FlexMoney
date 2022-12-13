import React, { useState } from 'react'
import "./slotbooking.css"

export default function SlotBooking() {
    const [slot, setslot] = useState("")

    function SubmitSlot()
    {
        console.log(slot);
    }

  return (
    <div>
        <div>
            <div className='card'>
                <h3>Select Slot</h3>
                <div className='form-group'>
                    <select className='form-control' onChange={(e) => {setslot(e.target.value)}} value={slot}>
                        <option value="" selected>Select your Block</option>
                        <option value="6-7">6 AM - 7 AM</option>
                        <option value="7-8">7 AM - 8 AM</option>
                        <option value="8-9">8 AM - 9 AM</option>
                        <option value="5-6">5 AM -6 AM</option>
                    </select>
                </div>
                <button className='btn btn-primary' onClick={() => {SubmitSlot()}}>Submit</button>
            </div>
        </div>
    </div>
  )
}