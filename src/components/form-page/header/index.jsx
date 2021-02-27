import React from 'react';

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
