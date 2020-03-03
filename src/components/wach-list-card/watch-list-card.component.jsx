import React from 'react'
import { Link } from 'react-router-dom';

const WatchListCard = ({ name, symbol, logo, price }) => {
    return (
        <div className="col-xs-4 col-sm-6 col-lg-5">
            <div className="mb-6">
                <div className='watch-list-item d-flex'>
                    <Link to={`/company/${symbol}`}>
                        <img className="company-logo" alt={name} src={logo} />
                    </Link>
                    <div className="body align-right">
                        <h6 className="mb-0"><Link to={`/company/${symbol}`}>{name}</Link></h6>
                        <span className="text-body SPAN-filter-by-text">$ {price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchListCard;
