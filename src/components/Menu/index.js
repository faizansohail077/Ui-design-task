import React from 'react'
import Cards from './component/Cards'
import './index.css'
import food1 from '../../images/food1'
import food2 from '../../images/food2'

const Menu = () => {
    return (
        <div className="reason">
            <p> Browse</p>
            <p>Explore Our Menu</p>
            <div className="row">
                <div className="col menu">
                    <ul class="list-group">
                        <li class="list-group-item active1">Breakfast</li>
                        <li class="list-group-item">lunch</li>
                        <li class="list-group-item">Dinner</li>
                        <li class="list-group-item">Soups</li>
                        <li class="list-group-item">Drinks</li>
                    </ul></div>
                <div className="col"><Cards image={food1} text={'Chicken Masala'} price={'$100'} /></div>
                <div className="col"><Cards style={'active2'} image={food2} text={'Western Masala'} price={'$100'} /></div>
                <div className="col"><Cards image={food1} text={'Sandwitch Soup'} price={'$100'} /></div>
            </div>
        </div>
    )
}

export default Menu
