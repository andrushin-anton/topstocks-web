import React from 'react';
import { Link } from 'react-router-dom';

import './watch-list.styles.scss';

const WatchListPage = () => {
    return (
        <div className="tab-content">
            <div className="tab-pane fade active show">
                <div className="content-list">
                    <div className="row">
            
                        <div className="col-xs-4 col-sm-6 col-lg-5">
                            <div className="mb-6">
                                <div className='watch-list-item d-flex'>
                                <Link to="/company/TSL">
                                    <img className="company-logo" alt='Tesla Logo' src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/36/15/e1340c1d184115745b215da10444ad02.png" />
                                </Link>
                                <div className="body align-right">
                                    <h6 className="mb-0"><Link to="/company/TSL">Tesla</Link></h6>
                                    <span className="text-body SPAN-filter-by-text">Administrator</span>
                                </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                        <div className="col-xs-4 col-sm-6 col-lg-5">
                            <div className="mb-6">
                                <div className='watch-list-item d-flex'>
                                <Link to="/company/TSL">
                                    <img className="company-logo" alt='Tesla Logo' src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/36/15/e1340c1d184115745b215da10444ad02.png" />
                                </Link>
                                <div className="body align-right">
                                    <h6 className="mb-0"><Link to="/company/TSL">Tesla</Link></h6>
                                    <span className="text-body SPAN-filter-by-text">Administrator</span>
                                </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-6 col-lg-5">
                            <div className="mb-6">
                                <div className='watch-list-item d-flex'>
                                <Link to="/company/TSL">
                                    <img className="company-logo" alt='Tesla Logo' src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/36/15/e1340c1d184115745b215da10444ad02.png" />
                                </Link>
                                <div className="body align-right">
                                    <h6 className="mb-0"><Link to="/company/TSL">Tesla</Link></h6>
                                    <span className="text-body SPAN-filter-by-text">Administrator</span>
                                </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-6 col-lg-5">
                            <div className="mb-6">
                                <div className='watch-list-item d-flex'>
                                <Link to="/company/TSL">
                                    <img className="company-logo" alt='Tesla Logo' src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/36/15/e1340c1d184115745b215da10444ad02.png" />
                                </Link>
                                <div className="body align-right">
                                    <h6 className="mb-0"><Link to="/company/TSL">Tesla</Link></h6>
                                    <span className="text-body SPAN-filter-by-text">Administrator</span>
                                </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchListPage;