import React from 'react'
import { ReduxProps } from './';
import css from './reports.module.css';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';

const Category: React.FC<ReduxProps> = (props) => {
  const history = useHistory();
  return (
    <>
      <div className={css.container}>
        <div className={css.containerOptions}>
          <Paper>
            <div className={css.option}>
              <p className={css.text}>Cantidad de usuarios registrados</p>
              <button className={css.btnView} onClick={() => history.push('/admin/reports/quantityUser')}>Ver</button>
            </div>
            <div className={css.option}>
              <p className={css.text}>Ventas anuales</p>
              <button className={css.btnView} onClick={() => history.push('/admin/reports/quantityOrder')}>Ver</button>
            </div>
          </Paper>
        </div>
      </div>
    </>
  )
};

export default Category;