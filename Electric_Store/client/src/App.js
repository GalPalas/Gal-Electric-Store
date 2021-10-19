import Navbar from "components/navbar";
import HomeScreen from "components/pages/homeScreen";
import ProductScreen from "components/pages/productScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
