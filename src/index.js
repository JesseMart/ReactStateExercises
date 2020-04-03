import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import BaseLayout from './components/layout/BaseLayout'
import Blogs from './components/Blogs'
import NoMatch from './components/NoMatch'
import Forms from './components/Forms'
import LiftingState from './components/LiftingState'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import App from './App';


ReactDOM.render(
  // <BrowserRouter>
  //   <BaseLayout>
  //     <Switch>
  //       <Route exact path="/" component={App} />
  //       <Route path="/aboutus" component={AboutUs}/>
  //       <Route path="/contactus" component={ContactUs}/>
  //       <Route path="/blogs/:blogID" component={Blogs}/>
  //       <Route path="/forms" component={Forms}/>
  //       <Route path="/liftingstate" component={LiftingState}/>
  //       {/* <Redirect from="" to=""/> */}
  //       <Route component={NoMatch}/>

  //     </Switch>
  //   </BaseLayout>
  // </BrowserRouter>,
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

