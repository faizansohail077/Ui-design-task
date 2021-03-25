import React from 'react'

const Card = ({ title, para, image }) => {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={image} alt="Card image cap" />

            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{para}</p>
                <a href="#" class="read__more">ReadMore</a>
            </div>
        </div>
    )
}

export default Card
