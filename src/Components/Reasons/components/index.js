import React from 'react'
import './style.css'
const Cards = ({ style, image, heading }) => {
    return (
        <div className="cards">
            <div className={`card text-center   ${style}`} style={{ width: '18rem' }}>
                <div class="card-body">
                    <h5 class="card-title"><img src={image} /></h5>
                    <h5 class="card-title">{heading}</h5>
                    <p class="card-text">Best Offers Etiam feugiat eleifend est, odio tempor vitaeVivamus maximus scelerisque ipsum nec commodo</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
