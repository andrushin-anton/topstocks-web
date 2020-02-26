import React from 'react';
import { Link } from 'react-router-dom';
import MenuTab from '../../components/menu-tab/menu-tab.component';

const CompanyPage = () => {
    return (
        <div>
            <MenuTab activeTab='none'/>
            <div className="tab-content">
                <div className="tab-pane fade active show">
                    <div className="content-list">
                        <div className="row">
                
                            <div className="col-md-12">
                                <div className="card mb-4">
                                    <div className="card-body">
                                    <div className="d-flex">
                                        <div className="p-2">
                                        <h5 className="card-title">TSL</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Tesla</h6>
                                        </div>
                                        <div className="ml-auto p-2">
                                        <img alt="Tesla" className="company-logo align-right" src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/36/15/e1340c1d184115745b215da10444ad02.png" />    
                                        </div>
                                    </div>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="#" className="card-link">Card link</Link>
                                    <Link to="#" className="card-link">Another link</Link>
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

export default CompanyPage;