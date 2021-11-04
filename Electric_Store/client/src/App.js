import Navbar from "components/shared/navbar";
import HomeScreen from "components/pages/home/homeScreen";
import CartScreen from "components/pages/cart/cartScreen";
import SignInScreen from "components/pages/signin/signInScreen";
import PaymentScreen from "components/pages/payment/paymentScreen";
import ProductScreen from "components/pages/product/productScreen";
import RegisterScreen from "components/pages/register/registerScreen";
import PlaceorderScreen from "components/pages/placeorder/placeorderScreen";
import ShippingAddressScreen from "components/pages/shippingAddress/shippingAddressScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SignInScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentScreen}></Route>
          <Route path="/placeorder" component={PlaceorderScreen}></Route>
          <Route path="/" component={HomeScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
