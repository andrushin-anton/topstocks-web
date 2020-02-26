import React from 'react';
import { Link } from 'react-router-dom';

import './menu-tab.styles.scss';

const MenuTab = ({ activeTab }) => {
    const signalsClass = activeTab === 'signals' ? 'nav-link active' : 'nav-link';
    const watchListClass = activeTab === 'watchlist' ? 'nav-link active' : 'nav-link';
    return (
        <div>
            <ul className="nav nav-tabs nav-fill" role="tablist">
                <li className="nav-item">
                    <Link className={signalsClass} to="/">Signals</Link>
                </li>
                <li className="nav-item">
                    <Link className={watchListClass} to="/watch-list">Watch-List</Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuTab;
