import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import PublicLayout from '../../layouts/public';
import Category from '../client/category';
import Register from '../client/register/viewRegister';
import Login from '../client/login/viewLogin';
import PublicProduct from '../client/products/viewPublicProduct';

const ClientRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <PublicLayout showSearchField={location.pathname.includes('/product/')}>
      <Switch>
        <Route exact={true} path='/' component={Category} />
        <Route exact={true} path='/register' component={Register} />
        <Route exact={true} path='/login' component={Login} />
        <Route exact={true} path='/publicProduct' component={PublicProduct} />
        <Redirect to="/" />
      </Switch>
    </PublicLayout>
  );
};

export default ClientRoutes;