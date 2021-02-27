import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignIn from '../sign-in-page/form'
const Header = props => {
  return (
    <header>
      <img alt='mainLogo' src='https://www.squadhelp.com/img/logo.png' />
      <BrowserRouter>
        <Link to='/signIn' ><button></button></Link>
        <Switch>
          <Route path='/signIn'>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </header>
  );
};

export default Header;
