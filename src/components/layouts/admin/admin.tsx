import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import css from './admin.module.css';
import { ReduxProps } from './';

export interface Props extends ReduxProps {
  children: React.ReactNode;
  showSearchField?: boolean;
}

const AdminLayout: React.FC<ReduxProps> = (props) => {
  const { children, logOut } = props;

  const history = useHistory();
  const location = useLocation();

  const options = React.useMemo(() => {
    return (
      <>
        <button
          onClick={() => history.push('/admin/products')}
          disabled={location.pathname === '/admin/products'}
          className={css.routes}
        >
          Productos
      </button>
        <button
          onClick={() => history.push('/admin/orders')}
          disabled={location.pathname === '/admin/orders'}
          className={css.routes}
        >
          Ventas
      </button>
        <button
          onClick={() => history.push('/admin/reports')}
          disabled={location.pathname === '/admin/reports'}
          className={css.routes}
        >
          Estadísticas
      </button>
        <button
          onClick={() => history.push('/admin/publicity')}
          disabled={location.pathname === '/admin/publicity'}
          className={css.routes}
        >
          Públicidad
      </button>
        <button
          onClick={logOut}
          className={css.routes}
        >
          Cerrar sesión
       </button>
      </>
    );
  }, [logOut, history, location]);

  return (
    <div className={css.pageContainer}>
      <div className={css.columnContainer}>
        <div className={css.title}>
          Panel de administrador
        </div>
        <div className={css.optionsContainer}>
          {options}
        </div>
      </div>
      <div className={css.childrenContainer}>
        <div className={css.childrenPaper}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout;