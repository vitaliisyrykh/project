import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import styles from './form-page.module.scss';
import SignIn from './sign-in-page/form';
import SignUp from './sign-up-page';

class FormPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSignIn : false,
      imgMainLogo : 'https://www.squadhelp.com/img/logo.png',
    }
  }
  
    handleIssignBtn= (e) => {
     this.setState ({
       isSignIn : !this.state.isSignIn,
      }); 
  };
  
  render(){
    return (
      <BrowserRouter>
        <main className={styles.main}>
          <header className={styles.header}>
            <Link to='/'>
              <img alt='mainLogo' src={this.state.imgMainLogo}  />
            </Link>
            <Link to={this.state.isSignIn?'/signIn':'/signUp'} onClick={this.handleIssignBtn}>
              <button >{this.state.isSignIn?'Sign In':'Sign Up'}</button>
            </Link>
  
          </header>
          <Switch>
            {/* <Route path='/'>
              <FormPage/>
            </Route> */}
            <Route path='/signIn'>
              <SignIn />
            </Route>
             <Route path='/signUp'>
              <SignUp/>
            </Route> 
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default FormPage
