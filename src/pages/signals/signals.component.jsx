import React, { useEffect } from 'react';
import MenuTab from '../../components/menu-tab/menu-tab.component';
import { connect } from 'react-redux';
import { selectAllSignals } from '../../redux/signal/signal.selector';
import { fetchSignalsStart } from '../../redux/signal/signal.actions';
import { createStructuredSelector } from 'reselect';
import SignalCard from '../../components/signal-card/signal-card.component';

const SignalsPage = ({ signals, fetchSignalsStart }) => {
    useEffect(() => {
        fetchSignalsStart()
      }, [fetchSignalsStart]);

    return (
        <div>
            <MenuTab activeTab='signals'/>
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
    )
}

const mapStateToProps = createStructuredSelector({
    signals: selectAllSignals
});

const mapDispatchToProps = dispatch => ({
    fetchSignalsStart: () => dispatch(fetchSignalsStart())
  });

export default connect(mapStateToProps, mapDispatchToProps)(SignalsPage);