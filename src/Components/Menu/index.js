import React from 'react'
import Cards from './component/Cards'
import './index.css'
import food1 from '../../images/food1'
import food2 from '../../images/food2'


const Menu = () => {
    return (
        <div className="menu">
            <p>Browse</p>
            <p>Explore Our Menu</p>
            <div className="row ">
                <div className="col  d-flex justify-content-center">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-list  active1">Breakfast</li>
                        <li class="list-group-item list-group-item-list ">lunch</li>
                        <li class="list-group-item list-group-item-list ">Dinner</li>
                        <li class="list-group-item list-group-item-list ">Soups</li>
                        <li class="list-group-item list-group-item-list ">Drinks</li>
                    </ul></div>
                <div className="col  d-flex justify-content-center"><Cards image={food1} text={'Chicken Masala'} price={'$100'} /></div>
                <div className="col  d-flex justify-content-center"><Cards style={'active2'} image={food2} text={'Western Masala'} price={'$100'} /></div>
                <div className="col  d-flex justify-content-center"><Cards image={food1} text={'Sandwitch Soup'} price={'$100'} /></div>
            </div>
        </div>
    )
}

export default Menu
