import React from 'react';
import MenuTab from '../../components/menu-tab/menu-tab.component';
import CompanyCard from '../../components/company-card/company-card.component';

const CompanyPage = ({ match }) => {
    return (
        <div>
            <MenuTab activeTab='none'/>
            <div className="tab-content">
                <div className="tab-pane fade active show">
                    <div className="content-list">
                        <div className="row">
                            <div className="col-md-12">
                                <CompanyCard match={match}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyPage;