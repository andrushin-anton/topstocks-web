import React, { useEffect } from 'react';
import MenuTab from '../../components/menu-tab/menu-tab.component';

import './watch-list.styles.scss';
import WatchListCard from '../../components/wach-list-card/watch-list-card.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectAllWatchList, selectIsWatchListLoading } from '../../redux/watch-list/watch-list.selector';
import { fetchWatchListsStart } from '../../redux/watch-list/watch-list.actions';
import PropagateLoader from "react-spinners/PropagateLoader";

const WatchListPage = ({ fetchWatchListsStart, watchList, loading }) => {
    useEffect(() => {
        fetchWatchListsStart()
    }, [fetchWatchListsStart]);

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
        content = <div className="tab-content">
                    <div className="tab-pane fade active show">
                        <div className="content-list">
                            <div className="row">
                    
                                {watchList.map(({ symbol, ...otherSignalProps }) => (
                                    <WatchListCard key={symbol} symbol={symbol} { ...otherSignalProps } />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>;
    }

    return (
        <div>
            <MenuTab activeTab='watchlist'/>
            {content}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    watchList: selectAllWatchList,
    loading: selectIsWatchListLoading
});

const mapDispatchToProps = dispatch => ({
    fetchWatchListsStart: () => dispatch(fetchWatchListsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchListPage);