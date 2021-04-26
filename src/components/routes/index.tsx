import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { ApmRoute } from '@elastic/apm-rum-react';

const ClientRoutes = lazy(() => import('../routes/client/index'));

const Routes: React.FC<{}> = () => {
  return (
    <Router>
      <Suspense fallback={< div />}>
        < Switch >
          <ApmRoute path="/" component={ClientRoutes} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;