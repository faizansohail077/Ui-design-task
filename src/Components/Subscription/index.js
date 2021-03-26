import React from 'react'
import './index.css'
import leaf from '../../images/leaf1'
import leaf2 from '../../images/2leaf'
import { BsArrowRight } from 'react-icons/bs'
const Subscription = () => {
    return (
        <div className="subscription ">
            <div class="row">
                <div class="col">
                    <img width={'50px'} src={leaf} />
                </div>
                <div class="col">
                    <span className="subscription__text1"> Subscription</span>
                    <div class="col">
                        <span className="subscription__text2">
                            Want to get Updates?
                        </span>
                    </div>
                    <div class="col subscription__textInput ">
                        <input placeholder="Enter Your Email" type="text" />
                        <div className="subscription__textInputIcon" ><BsArrowRight color="white" size='1.5em' /></div>
                    </div>
                </div>
                <div class="col align-self-end subscription__bottom">
                    <img width={'90px'} src={leaf2} />
                </div>
            </div>
        </div>
    )
}

export default Subscription
