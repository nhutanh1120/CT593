import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Post from "./pages/tintuc";
import Auth from "./pages/auth";
import ForgotPassword from "./pages/forgotPassword";
import ActivationEmail from "./components/auth/activationEmail";
import NotFound from "./pages/notfound";
import Agricultural from "./pages/agricultural";
import Dashboard from "./pages/dashboard";
import Customer from "./pages/customer";
import Setting from "./pages/setting";
import Email from "./pages/email";
import "./App.css";
import QrCode from "./pages/qrCode";
// import Apps from "./components/test/App";
// import test from "./pages/test";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { apiUrl } from "./constants/";
import "./assets/css/grid.css";
import "boxicons/css/boxicons.min.css";
import "./assets/css/theme.css";
import "./assets/font/css2.css";
import Test from "./pages/test";

function App() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const { isLogged, isAdmin } = auth;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Post} />
        <Route path="/contact" component={Contact} />
        <Route path="/sign" component={Auth} />
        <Route
          path="/dashboard"
          component={isLogged && isAdmin ? Dashboard : NotFound}
        />
        <Route path="/dashboard/customer" component={Customer} />
        <Route path="/dashboard/setting" component={Setting} />
        <Route path="/dashboard/email" component={Email} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/qr/:id" component={QrCode} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/agricultural/:id" component={Agricultural} />
        <Route path="/test" component={Test} />
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
