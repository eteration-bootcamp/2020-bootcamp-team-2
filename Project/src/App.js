import React from 'react';
import Content from "./app/containers/Content/index";
import ContentDetail from "./app/containers/ContentDetail/index";
import Home from "./app/containers/Home/index";
import Location from "./app/containers/Location/index";
import Login from "./app/containers/Login/index";
import Profile from "./app/containers/Profile/index";
import Register from "./app/containers/Register/index";
import Blog from "./app/containers/Blog/index";
import BlogShare from "./app/containers/Blog/BlogShare/index";
import BlogExtra from "./app/containers/Blog/BlogExtra/index";
import Navbar from "./app/components/Navbar";
import Footer from "./app/components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>        
          <Route path="/" exact component={Home} />
          <Route path="/Blog" component={Blog} />
          <Route path="/BlogShare" component={BlogShare} />
          <Route path="/BlogExtra" component={BlogExtra} />
          <Route path="/Content" component={Content} />
          <Route path="/ContentDetail" component={ContentDetail} />
          <Route path="/Location" component={Location} />
          <Route path="/Login" component={Login} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Register" component={Register} />          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
