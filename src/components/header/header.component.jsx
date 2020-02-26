import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.actions';

import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <div>
            
            <h1><Link to='/'>TopStocks</Link></h1>
            <div className='lead text-muted'>
            Is the platform that checks stocks by multiplicators on a daily basis. It allows you to focus on investments.
            </div>
            <br/>
            <div className='company-logos'>
                <div>
                    <img alt="Tesla" className="company-logo" src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/36/15/e1340c1d184115745b215da10444ad02.png" />
                </div>
                <div>
                    <img alt="Ferrari" className="company-logo" src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/69/96/bfa6ec53252b5cc00cb00bc06a2d8343.png"/>
                </div>
                <div>
                    <img alt="Baudi" className="company-logo" src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/35/66/d808e27c6a6733523a9bc4058a844ac5.png"/>
                </div>
                <div>
                    <img alt="Intel" className="company-logo" src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/86/66/9114c81d43413e297abfbc88c6a9a73c.png"/>
                </div>
                <div>
                    <img alt="Alibaba" className="company-logo" src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/23/83/98f0a82de2a13172ad8a625dff547a9f.png"/>
                </div>
                <div>
                    <img alt="MacDonnalds" className="company-logo" src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/16/41/545c713a4cdaa2ff6a940acc013e1410.png"/>
                </div>
                <div>
                    <img alt="Cat" className="company-logo" src="https://s0.rbk.ru/emitent_pics/resized/80x80_crop/images/44/67/487d171920f38d1110f6a2ada87d6f15.png"/>
                </div>
            </div>
            <div className='header-links'>
                <Link to='/about'>About</Link>
            </div>
            <hr/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);