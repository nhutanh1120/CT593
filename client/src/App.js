import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Post from "./pages/tintuc";
import Auth from "./pages/auth";
import NotFound from "./pages/notfound";
import Dashboard from "./pages/dashboard";
import ActivationEmail from "./components/auth/activationEmail";
import ForgotPassword from "./pages/forgotPassword";
import "./App.css";
import qr from "./pages/qr";
// import Apps from "./components/test/App";
// import test from "./pages/test";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { apiUrl } from "./constants/";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Agricultural from "./pages/agricultural";
import "./assets/css/theme.css";
import "./assets/font/css2.css";

function App() {
  // const auth = useSelector((state) => state.auth);
  // const { isLogged } = auth;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/contact" component={Contact} />
        <Route path="/sign" component={Auth} />
        {/* <Route path="/dashboard" component={isLogged ? Dashboard : NotFound} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/qr" component={qr} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/test" component={qr} />
        <Route path="/agricultural/:id" component={Agricultural} />
        <Route
          exact
          path="/api/auth/activation/:activation_token"
          component={ActivationEmail}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
