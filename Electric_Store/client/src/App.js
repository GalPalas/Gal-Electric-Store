import Navbar from "components/shared/navbar";
import HomeScreen from "components/pages/home/homeScreen";
import CartScreen from "components/pages/cart/cartScreen";
import ProductScreen from "components/pages/product/productScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
