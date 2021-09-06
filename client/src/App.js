import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Post from "./pages/tintuc";
import Auth from "./pages/auth";
import NotFound from "./pages/notfound";
import Dashboard from "./pages/dashboard";
import ActivationEmail from "./components/auth/ActivationEmail";
import DataProvider from "./redux/store";
import "./App.css";
import qr from "./pages/qr";
import ResetPassword from "./components/auth/ResetPassword";
// import Apps from "./components/test/App";
import test from "./pages/test";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { apiUrl } from "./constants/";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/qr" component={qr} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/test" component={test} />
          <Route
            exact
            path="/api/auth/activation/:activation_token"
            component={ActivationEmail}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
