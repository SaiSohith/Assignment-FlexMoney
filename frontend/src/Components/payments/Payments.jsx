import React from 'react'
import './payments.css'

function Payment() {
  return (
    <div>
        <div className='container'> 
            <div className='card'>
                <div>
                    <h3>Payment</h3>
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='card number' />
                </div>
                <div className='row form-group'>
                    <div className='col'>
                        <input type="text" className='form-control' placeholder='mm/yy'/>
                    </div>
                    <div className='col'>
                        <input type="text" className='form-control' placeholder='csv' />
                    </div>
                </div>
                <div>
                    <label> Amount: </label>
                    <input type="text" value="500" className='form-control' disabled></input>
                </div>
                <br/>
                <button className='btn btn-primary'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Payment