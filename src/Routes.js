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
        <Route path="/products/:id" exact component={ProductDetails} />
        <Route path="/products" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
      </Router>
    </>
  )
}

export default Routes;
