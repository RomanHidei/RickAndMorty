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
import Pagination from './components/Pagination/Pagination'

function App() {
  return (
    <Router>
    <div>
      {/* <Main/> */}
    </div>
    <Link to="/Main">Main</Link>
    <Link to="/Form">AddCharacter</Link>
    <Pagination/>
    <Switch>
          <Route path="/Main">
            <Main/>
          </Route>
          <Route path="/Form">
            <Form/>
          </Route>
          <Route path="/Prof" render={(props) => <Prof {...props }/>}/>
          <Route path="/character/:id" children={<Prof />} />
    </Switch>
    </Router>
  );
}

export default App;
