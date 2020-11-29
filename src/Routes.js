import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="/products" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default Routes;
