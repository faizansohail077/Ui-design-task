import React from 'react'

const Cards = ({ text, price, image, style }) => {
    return (
        <div>
            <div class="card text-center" style={{ width: '18rem' }}>
                <div class={`card-body ${style}`}>
                    <span class={`card-title `}><img height={'110px'} src={image} /> </span>
                    <p class="card-title">{text}</p>
                    <p class="card-text">{price} <span style={{ textDecoration: 'line-through', color: 'black', fontSize: '13px' }}>20</span></p>
                </div>
            </div>
        </div>
    )
}

export default Cards
