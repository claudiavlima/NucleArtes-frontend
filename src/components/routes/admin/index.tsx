import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import AdminLayout from '../../layouts/admin';
import Products from './products';
import Product from './product';
import Orders from './orders';
import Order from './order';
import Reports from './reports';
import Publicity from './publicity';
import CheckAuthHOC from '../../../helpers/hocAuth/index';
import QuantityUsers from '../../shared/graphics/quantityUsers';
import QuantityOrder from '../../shared/graphics/quantityOrders';

const checkAdmin = (Comp: React.ComponentType<any>) => {
  return CheckAuthHOC(Comp, 'admin');
};


const AdminRoutes: React.FC = () => {
  console.log("ENTRO AL LAYOUT")
  const location = useLocation();
  return (
    <AdminLayout>
      <Switch>
        <Route exact={false} path="/admin/products" component={Products} />
        <Route exact={false} path="/admin/product/:id" component={Product} />
        <Route exact={false} path="/admin/orders" component={Orders} />
        <Route exact={false} path="/admin/order/:id" component={Order} />
        <Route exact={false} path="/admin/reports/quantityUser" component={QuantityUsers} />
        <Route exact={false} path="/admin/reports/quantityOrder" component={QuantityOrder} />
        <Route exact={false} path="/admin/reports" component={Reports} />
        <Route exact={false} path="/admin/publicity" component={Publicity} />
        <Redirect to="/admin/products" />
      </Switch>
    </AdminLayout>
  );
};

export default AdminRoutes;