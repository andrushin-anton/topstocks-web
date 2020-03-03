import React, { useEffect } from 'react';
import MenuTab from '../../components/menu-tab/menu-tab.component';

import './watch-list.styles.scss';
import WatchListCard from '../../components/wach-list-card/watch-list-card.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectAllWatchList } from '../../redux/watch-list/watch-list.selector';
import { fetchWatchListsStart } from '../../redux/watch-list/watch-list.actions';

const WatchListPage = ({ fetchWatchListsStart, watchList }) => {
    useEffect(() => {
        fetchWatchListsStart()
    }, [fetchWatchListsStart]);

    return (
        <div>
            <MenuTab activeTab='watchlist'/>
            <div className="tab-content">
            <div className="tab-pane fade active show">
                <div className="content-list">
                    <div className="row">
            
                        {watchList.map(({ symbol, ...otherSignalProps }) => (
                            <WatchListCard key={symbol} symbol={symbol} { ...otherSignalProps } />
                        ))}

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    watchList: selectAllWatchList
});

const mapDispatchToProps = dispatch => ({
    fetchWatchListsStart: () => dispatch(fetchWatchListsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchListPage);