import React from 'react'
import './index.css'
import burger from '../../images/burger'
const History = () => {
    return (
        <div className="row history">
            <div class="col-12 col-md-8">
                <div className="row history__heading">History Of Figo</div>
                <div className="row history__text">We Cook Tradition &Family Recipes</div>
                <div className="row history__para">
                    <p>Quickly predominate standards compliants architectures and prospective internal or "organic" sources. Synergistically mesh quality quality vectors for one-to-one leadership.</p>
                    <p>Quickly predominate standards compliants architectures and prospective internal or "organic" sources. Synergistically mesh quality quality vectors for one-to-one leadership.</p>
                </div>
                <div className="row history_button">
                    <button>
                        Eplore our story
                    </button></div>
            </div>
            <div class="col-6 col-md-4">
                <img width={'350px'} height={'400px'} src={burger} />
            </div>
        </div>
    )
}

export default History
