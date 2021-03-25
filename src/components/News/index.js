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

            <div class="row">
                <div class="col-6 col-md-4"><Card image={food1} title={'Spain Appetizer'} para={'quickly of predominate and standards compliiants and an architectures'} /></div>
                <div class="col-6 col-md-4"><Card image={food3} title={'Spain Appetizer'} para={'quickly of predominate and standards compliiants and an architectures'} /></div>
                <div class="col-6 col-md-4"><Card image={food1} title={'Spain Appetizer'} para={'quickly of predominate and standards compliiants and an architectures'} /></div>
            </div>
        </div>
    )
}

export default News
