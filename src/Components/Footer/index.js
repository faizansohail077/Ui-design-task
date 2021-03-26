import React from 'react'
import './index.css'
import leaf from '../../images/leaf2'
import logo from '../../images/logo.svg'
import plant from '../../images/plant'
const Footer = () => {
    return (
        <div className="row  footer">
            <div class="col"><img width={'150px'} src={leaf} /></div>
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-footer ">
                        <img src={logo} />
                    </li>
                    <li class="list-group-item list-group-item-footer ">Don't miss to subscribe to our new feeds, Kindly fill the form bellow</li>
                    <li class="list-group-item list-group-item-footer  "></li>

                </ul>
            </div>
            <div class="col"><ul class="list-group">
                <li class="list-group-item list-group-item-footer  active-footer">Our Menu</li>
                <li class="list-group-item list-group-item-footer ">Lunch</li>
                <li class="list-group-item list-group-item-footer ">Dinner</li>
                <li class="list-group-item list-group-item-footer ">Catering</li>
            </ul></div>
            <div class="col"><ul class="list-group">
                <li class="list-group-item list-group-item-footer  active-footer">Link</li>
                <li class="list-group-item list-group-item-footer ">About Us</li>
                <li class="list-group-item list-group-item-footer ">Terms Of Use</li>
                <li class="list-group-item list-group-item-footer ">Privacy Policy</li>
            </ul></div>
            <div class="col"><ul class="list-group">
                <li class="list-group-item list-group-item-footer  active-footer">Contact</li>
                <li class="list-group-item list-group-item-footer ">+8801622010442</li>
                <li class="list-group-item list-group-item-footer ">info@restaurant.com</li>
                <li class="list-group-item list-group-item-footer ">Daudkandi, Comilla</li>
            </ul></div>
            <div class="col">
                <img width={'150px'} src={plant} />
            </div>
        </div>
    )
}

export default Footer
