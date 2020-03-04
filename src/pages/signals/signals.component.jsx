import React, { useEffect } from 'react';
import MenuTab from '../../components/menu-tab/menu-tab.component';
import { connect } from 'react-redux';
import { selectAllSignals, selectIsSignalsLoaded } from '../../redux/signal/signal.selector';
import { fetchSignalsStart } from '../../redux/signal/signal.actions';
import { createStructuredSelector } from 'reselect';
import SignalCard from '../../components/signal-card/signal-card.component';
import PropagateLoader from "react-spinners/PropagateLoader";

const SignalsPage = ({ signals, fetchSignalsStart, loading }) => {
    useEffect(() => {
        fetchSignalsStart()
      }, [fetchSignalsStart]);

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
    } else {
        content = <div>
            <div className="tab-content">
                <div className="tab-pane fade active show">
                    <div className="content-list">
                        <div className="row">
                        {signals.map(({ symbol, ...otherSignalProps }) => (
                            <SignalCard key={symbol} symbol={symbol} { ...otherSignalProps } />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    return (
        <div>
            <MenuTab activeTab='signals'/>
            {content}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    signals: selectAllSignals,
    loading: selectIsSignalsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchSignalsStart: () => dispatch(fetchSignalsStart())
  });

export default connect(mapStateToProps, mapDispatchToProps)(SignalsPage);