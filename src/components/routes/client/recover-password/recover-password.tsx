import React from 'react'
import { Link } from 'react-router-dom'
import css from './recover-password.module.css';
import { ReduxProps } from '.'
import TextField from '../../../shared/form/text-field';
import { Field } from 'redux-form';
import { required } from '../../../../helpers/form/validators';
import Button from '../../../shared/form/button'
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';

const ForgotPassword: React.FC<ReduxProps> = (props) => {
  const { handleSubmit, isFetching, mailSended } = props;

  const history = useHistory();
  return (
    <>
      <div className={css.container}>
        <div className={css.form}>
          <Paper className={css.paper}>
            <>
              <h4>Ingrese su nueva contraseña:</h4>
              <div className={css.containerField}>
                <Field
                  name="password"
                  label="Nueva contraseña"
                  component={TextField}
                  required={true}
                  className={css.input}
                  type={'password'}
                />
              </div>
              <div className={css.containerField}>
                <Field
                  name="confirmPassword"
                  label="Confirmar contraseña"
                  component={TextField}
                  required={true}
                  className={css.input}
                  type={'password'}
                />
              </div>
              <div className={css.containerButton}>
                <Button
                  styles={css.cancelButton} onClick={handleSubmit}
                  text={isFetching ? <CircularProgress className={css.circular} /> : 'Enviar'}
                />
              </div>
            </>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;