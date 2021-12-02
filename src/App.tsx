import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Issues } from "./pages/issues";

function App() {
  return (
    <Router>
      <Redirect to="/home" />
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/issues">
        <Issues />
      </Route>
    </Router>
  );
}

export default App;
