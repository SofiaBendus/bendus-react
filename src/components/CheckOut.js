import React from 'react'
import DeliveryInfo from './DeliveryInfo'

function CheckOut() {
    return (
        <div className="checkOutOrder">
            <div className="d-flex align-items-center">
            <img className="checkOutOrderImg img-responsive" src="" alt="" />
            <DeliveryInfo/>
            </div>
        </div>
    )
}

export default React.memo(CheckOut)
