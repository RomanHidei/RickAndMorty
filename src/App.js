import React from 'react';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Prof from './components/Prof/Prof';
import Form from './components/Form/Form';
import Pagination from './components/Pagination/Pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
        <Toolbar>
          <Button color="inherit">
    <Link to="/Main">Main</Link>
    </Button>
    <Button color="inherit">
    <Link to="/Form">AddCharacter</Link>
    </Button>
    </Toolbar>
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
          <Redirect from="/Main/1" to="/Main" />
    <Route path="/Main/:pageNumber" component={Main} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
