import React from 'react'
import { Link } from 'react-router-dom';

const SignalCard = ({ name, symbol, logo, price }) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-body">
                <div className="d-flex">
                    <div className="p-2">
                    <h5 className="card-title"><Link to={`/company/${symbol}`}>{symbol}</Link></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
                    <h6>$ {price}</h6>
                    </div>
                    <div className="ml-auto p-2">
                    <img alt={name} className="company-logo align-right" src={logo} />    
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignalCard;
