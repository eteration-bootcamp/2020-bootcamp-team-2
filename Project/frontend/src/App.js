import React from 'react';
import Cafes from "./app/containers/Content/Cafes/index";
import Hotels from "./app/containers/Content/Hotels/index";
import Bars from "./app/containers/Content/Bars/index";
import Eats from "./app/containers/Content/Eats/index";
import Activities from "./app/containers/Content/Activities/index";
import Historicals from "./app/containers/Content/Historicals/index";
import ContentDetail from "./app/containers/ContentDetail/index";
import Home from "./app/containers/Home/index";
import Location from "./app/containers/Location";
import Login from "./app/containers/Login/index";
import Profile from "./app/containers/Profile";
import Register from "./app/containers/Register/index";
import Blog from "./app/containers/Blog/index";
import BlogShare from "./app/containers/Blog/BlogShare/index";
import BlogExtra from "./app/containers/Blog/BlogExtra/index";
import EditProfile from "./app/containers/EditProfile/index";
import Navbar from "./app/components/Navbar";
import Footer from "./app/components/Footer";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

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
          <Route path="/Cafes" component={Cafes} />
          <Route path="/Hotels" component={Hotels} />
          <Route path="/Bars" component={Bars} />
          <Route path="/Eats" component={Eats} />
          <Route path="/Activities" component={Activities} />
          <Route path="/Historicals" component={Historicals} />
          <Route path="/ContentDetail" component={ContentDetail} />
          <Route path="/Location" component={Location} />
          <Route path="/Login" component={Login} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Register" component={Register} />  
          <Route path="/EditProfile" component={EditProfile} />
          <Redirect to="/" />          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
