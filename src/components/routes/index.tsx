import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { ApmRoute } from '@elastic/apm-rum-react';
import CheckAuthHOC from '../../helpers/hocAuth/index';

const ClientRoutes = lazy(() => import('../routes/client/index'));
const AdminRoutes = lazy(() => import('../routes/admin/index'));

const checkAdmin = (Comp: React.ComponentType<any>) => {
  console.log("COMPONENTE")
  return CheckAuthHOC(Comp, 'admin');
};

const Routes: React.FC<{}> = () => {
  return (
    <Router>
      <Suspense fallback={< div />}>
        < Switch >
          <ApmRoute exact={false} path='/admin' component={checkAdmin(AdminRoutes)} />
          <ApmRoute exact={false} path="/" component={ClientRoutes} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;