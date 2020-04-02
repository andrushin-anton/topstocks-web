import React from 'react';
import MenuTab from '../../components/menu-tab/menu-tab.component';
import CompanyCard from '../../components/company-card/company-card.component';
import SEOComponent from '../../components/seo/seo.component';

const CompanyPage = ({ match }) => {
    const { symbol } = match.params;
    return (
        <div>
            <SEOComponent title={symbol} />
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