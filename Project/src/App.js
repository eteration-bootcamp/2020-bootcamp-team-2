import React from 'react';
import Content from "./app/containers/Content/index";
import ContentDetail from "./app/containers/ContentDetail/index";
import Home from "./app/containers/Home/index";
import Location from "./app/containers/Location/index";
import Login from "./app/containers/Login/index";
import Profil from "./app/containers/Profil/index";
import Register from "./app/containers/Register/index";
import Blog from "./app/containers/Blog/index";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Content" component={Content} />
          <Route path="/Content/ContentDetail" component={ContentDetail} />
          <Route path="/Location" component={Location} />
          <Route path="/Login" component={Login} />
          <Route path="/Profil" component={Profil} />
          <Route path="/Register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
