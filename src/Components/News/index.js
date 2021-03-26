import React from 'react'
import Card from './components/Card'
import './index.css'
import food3 from '../../images/food3'
import food1 from '../../images/food1'
const News = () => {
    return (
        <div className="news">
            <p>News</p>
            <p>Latest News</p>

            <div class="row  d-flex justify-content-center">
                <div class="col-sm  d-flex justify-content-center"><Card image={food1} title={'Spain Appetizer'} para={'quickly of predominate and standards compliiants and an architectures'} /></div>
                <div class="col-sm  d-flex justify-content-center"><Card image={food3} title={'Spain Appetizer'} para={'quickly of predominate and standards compliiants and an architectures'} /></div>
                <div class="col-sm  d-flex justify-content-center"><Card image={food1} title={'Spain Appetizer'} para={'quickly of predominate and standards compliiants and an architectures'} /></div>
            </div>
        </div>
    )
}

export default News
