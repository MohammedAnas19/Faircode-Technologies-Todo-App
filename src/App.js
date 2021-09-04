import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Todo from './screens/Todo';
import Completed from './screens/Completed';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './actions';


function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user.authenticated) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/completed" component={Completed} />
        <PrivateRoute path="/" component={Todo} />
      </Switch>
    </div>
  );
}

export default App;
