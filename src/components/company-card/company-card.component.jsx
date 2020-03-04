import React, { useState, useEffect } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import { getCompanyBySymbol } from '../../firebase/firebase.utils';

const CompanyCard = ({ match }) => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchCompany() {
            try {
                const { symbol } = await match.params;
                const company = await getCompanyBySymbol(symbol);
                setCompany(company);
            } catch (e) {
                setError(e.message || 'Unexpected error');
            }
            setLoading(false);
        }
        fetchCompany();
    }, [match]);

    let content = '';
    if (loading) {
        content = <div className="d-flex justify-content-center spinner">
            <PropagateLoader
            css=''
            color='#F8E71C'
            size={15}
            loading={loading}
            />
        </div>;
    } else if (company !== null) {
        content = <div className="card mb-4">
                    <div className="card-body">
                    <div className="d-flex">
                        <div className="p-2">
                        <h5 className="card-title">{company.symbol}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{company.name}</h6>
                        </div>
                        <div className="ml-auto p-2">
                        <img alt={company.name} className="company-logo align-right" src={company.logo} />
                        </div>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>;
    } else {
        content = error
    }

    return <div>{content}</div>
};

export default CompanyCard;
