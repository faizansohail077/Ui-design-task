import React from 'react'
import './index.css'
import burger from '../../images/burger'
const History = () => {
    return (
        <div className="row d-flex justify-content-center history">
            <div class="col-lg-6 col-md-6 col-sm-12 ">
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
            <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center history__bottom">
                <img width={'450px'} height={'400px'} src={burger} />
            </div>
        </div>
    )
}

export default History
