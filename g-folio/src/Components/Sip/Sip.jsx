import React from 'react'
import "./Sip.css"
import ulicon from '../../assets/icons/ulicon.png'

const Sip = () => {
  return (
    <div className='sip-container'>
        <h2>Fixed deposits / FD's</h2>
        <div className='banks-bar'>
            <div className="bank1"><h3><img src={ulicon}alt="" />HSBC</h3> <h4>Max APY</h4><h3 className='h3p'>5.95%</h3> </div>
            <div className="bank1"><h3><img src={ulicon}alt="" /> BNP Paribas</h3><h4>Max APY</h4> <h3 className='h3p'>6.30%</h3> </div>
            <div className="bank1"><h3><img src={ulicon}alt="" /> Triodos Bank</h3><h4>Max APY</h4> <h3 className='h3p'>4.75%</h3></div>
            <div className="bank1"><h3><img src={ulicon}alt="" /> UBS</h3> <h4>Max APY</h4><h3 className='h3p'>6.12%</h3></div>

        </div>


    
    </div>
  )
}

export default Sip
