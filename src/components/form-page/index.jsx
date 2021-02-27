import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SignIn from './sign-in-page/form';
import styles from './form-page.module.scss';

const FormPage = props => {
  const imgMainLogo = 'https://www.squadhelp.com/img/logo.png'
  const styles = {
    backgroundColor: 'black'
  }
  let isSignIn = true;
  const handleIssignBtn =()=>{
    isSignIn = !isSignIn;
  }


  return (
    <BrowserRouter>
      <main>
        <header>
          <Link to='/'>
            <img alt='mainLogo' src={imgMainLogo} style={styles} />
          </Link>
          <Link to='/signIn'>
            <button onClick={handleIssignBtn}>{isSignIn?'Sign In':'Sign Up'}</button>
          </Link>
        </header>

        <Switch>
          {/* <Route path='/'>
            <FormPage/>
          </Route> */}
          <Route path='/signIn'>
            <SignIn />
          </Route>
          {/* <Route path='/signUp'>
            <SignUP/>
          </Route> */}
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default FormPage
