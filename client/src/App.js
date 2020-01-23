import React from 'react';
import './App.css';
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Four04 from "./pages/404";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={Four04} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
