import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import PublicLayout from '../../layouts/public';
import Category from '../client/category';
import Register from '../client/register/viewRegister';
import Login from '../client/login/viewLogin';
import PublicProduct from '../client/products/viewPublicProduct';
import Sales from '../client/sales/viewSales';
import Cart from '../client/carts/cart';
import MyOrders from '../client/my-orders';
import OrderDetails from '../client/order-details';

const ClientRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <PublicLayout showSearchField={location.pathname.includes('/product/')}>
      <Switch>
        <Route exact={true} path='/' component={Category} />
        <Route exact={true} path='/register' component={Register} />
        <Route exact={true} path='/login' component={Login} />
        <Route exact={true} path='/publicProduct' component={PublicProduct} />
        <Route exact={true} path='/cart' component={Cart} />
        <Route exact={true} path='/sales' component={Sales} />
        <Route exact={true} path='/my-orders' component={MyOrders} />
        <Route exact={true} path='/order-detail/:id' component={OrderDetails} />
        <Redirect to="/" />
      </Switch>
    </PublicLayout>
  );
};

export default ClientRoutes;