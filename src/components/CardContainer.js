import React from 'react'
import '../css/home-cards.css'

function CardContainer() {
    return (
        <div className="full-container-fluid">
            <img className="img-fluid" id="home-img" src="https://images.unsplash.com/photo-1484156818044-c040038b0719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="home-banner"/>
        </div>
    )
}

export default React.memo(CardContainer)
