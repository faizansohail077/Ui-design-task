import React from 'react'
import Cards from './components'
import './index.css'
import icon from '../../images/icon3.svg'
const Reason = () => {
    return (
        <div className="reason">
            <p> Reason</p>
            <p> Why Choose Us</p>
            <div className="row">
                <div class="col">
                    <Cards heading={'Various menu'} style={'card2'} image={icon} />
                </div>
                <div class="col">
                    <Cards heading={'Pocket friend Delievery'} style={'card1'} image={icon} />
                </div>
                <div class="col">
                    <Cards heading={'Best Offers'} style={'card2'} image={icon} />
                </div>
            </div>
        </div>
    )
}

export default Reason
