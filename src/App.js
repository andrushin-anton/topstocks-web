import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import SignalsPage from './pages/signals/signals.component';
import WatchListPage from './pages/watch-list/watch-list.component';
import CompanyPage from './pages/company/company.component';
import AboutPage from './pages/aboutpage/aboutpage.component';


import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import NotFoundPage from './pages/404/404.component';



const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
      <section className='jumbotron'>
        <div className='container'>
          <Header/>
          <Switch>
              <Route exact path='/' component={SignalsPage} />
              <Route exact path='/watch-list' component={WatchListPage} />
              <Route path='/company/:symbol' component={CompanyPage} />
              <Route path='/about' component={AboutPage} />
              <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
              <Route component={NotFoundPage} />
          </Switch>
        </div>
      </section> 
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
