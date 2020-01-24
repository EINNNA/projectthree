import React from 'react';
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Login from "./pages/Login";
import Saved from "./pages/Saved";
import Four04 from "./pages/404";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Frontpage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/saved/:id" component={Saved} />
            <Route component={Four04} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
