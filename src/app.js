import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import useAuthListener from './hooks/use-auth-listen';
import Home from './pages/home';
import Browse from './pages/browse';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { IsUserRedirect , ProtectedRoute } from "./helper/routs";


export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath='/browse'
          path='/signin'
        >
          <SignIn />
        </IsUserRedirect> */

        <IsUserRedirect
          user={user}
          loggedInPath='/browse' 
          path='/signup'
        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} path='/browse'>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect
          user={user}
          loggedInPath='/browse'
          path='/'
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
