import React from 'react'
import './index.css'
import image from '../../images/1.svg'
const Introduction = () => {
    return (
        <div className="container introduction row">
            <div className="introduction__left">
                <img src={image} />
            </div>
            <div className="introduction__right">
                <div>
                    Welcome
                </div>
                <div>
                    Welcome to Figo Restaurant
                </div>
                <div>
                    <p> Quickly predominate standards compliants architectures and prospective internal or "organic" sources. Synergistically mesh quality quality vectors for one-to-one leadership.</p>
                    <p> Quickly predominate standards compliants architectures and prospective internal or "organic" sources. Synergistically mesh quality quality vectors for one-to-one leadership.</p>
                </div>
                <div className="introduction__button">
                    <button>Explore our story</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction
