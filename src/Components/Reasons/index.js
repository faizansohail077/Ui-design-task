import React from 'react'
import Cards from './components'
import './index.css'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'
import icon from '../../images/icon.svg'

const Reason = () => {
    return (
        <div className="reason ">
            <p> Reason</p>
            <p> Why Choose Us</p>
            <div className="row">
                <div class="col  d-flex justify-content-center">
                    <Cards heading={'Various menu'} style={'card2'} image={icon2} />
                </div>
                <div class="col  d-flex justify-content-center">
                    <Cards heading={'Pocket friend Delievery'} style={'card1'} image={icon} />
                </div>
                <div class="col  d-flex justify-content-center">
                    <Cards heading={'Best Offers'} style={'card2'} image={icon3} />
                </div>
            </div>
        </div>
    )
}

export default Reason
