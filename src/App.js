//importing bootstrap from node modules.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//Files imported here :
import './App.css';
import Home from './files/Home';
import About from "./files/About";
import Services from "./files/Services";
import Contact from "./files/Contact";
import { Switch, Route , Redirect } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";

//Main Function :
const App = () => {
  return (<>
  <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to = "/" />
    </Switch> 
    <Footer/>
  </>);
};

export default App;
