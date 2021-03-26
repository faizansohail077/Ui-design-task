import React from 'react'
import './index.css'
import pizza from '../../images/2.svg'
const Session = () => {
    return (
        <div className="session d-flex ">
            <div className="session__left">
                <div className="session__leftTop">
                    <p>All In Good Taste Food With Figo .</p>
                </div>
                <div className="session__leftMiddle">
                    <p>Quickly predominate standard compliant architectureand may have prospective internal or organic source</p>
                </div>
                <div className="session__leftBottom">
                    <div>
                        <input className="shadow-sm p-3 mb-5 bg-white rounded" type="text" placeholder="Enter Your address" />
                    </div>
                    <div>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="session__right">
                <img src={pizza} />
            </div>
        </div>
    )
}

export default Session
