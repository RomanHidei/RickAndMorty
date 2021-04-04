import React from 'react';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Prof from './components/Prof/Prof';
import Form from './components/Form/Form';
// import Pagin from './components/Pagination/Pagin'

function App() {
  return (
    <Router>
    <div>
      {/* <Main/> */}
    </div>
    <Link to="/Main">Main</Link>
    <Link to="/Form">AddCharacter</Link>
    {/* <Pagin/> */}
    <Switch>
          <Route path="/Main">
            <Main/>
          </Route>
          <Route path="/Form">
            <Form/>
          </Route>
          <Route path="/Prof" render={(props) => <Prof {...props }/>}/>
    </Switch>
    </Router>
  );
}

export default App;
