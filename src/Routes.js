import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Router>
    </>
  )
}

export default Routes;
