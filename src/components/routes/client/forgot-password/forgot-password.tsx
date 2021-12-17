import React from 'react'
import css from './forgot-password.module.css';
import { ReduxProps } from '.'
import TextField from '../../../shared/form/text-field';
import { Field } from 'redux-form';
import { required } from '../../../../helpers/form/validators';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';

const ForgotPassword: React.FC<ReduxProps> = (props) => {
  const { handleSubmit, isMailSended, setMailSended } = props;
  const history = useHistory();
  return (
    <>
      <div className={css.container}>
        {isMailSended ?
          (
            <>
              <div>
                Se envio un mail a su casilla de correo.
                <Button
                  className={css.cancelButton} onClick={() => {
                    history.push('/');
                    setMailSended(false);
                  }}
                > Atras</Button>
              </div>
            </>
          ) : (
            <>
              <div className={css.form}>
                <Field
                  name="dni"
                  label="D.N.I"
                  component={TextField}
                  validate={[required()]}
                  required={true}
                />
                <Button
                  className={css.cancelButton} onClick={handleSubmit}
                > Enviar</Button>
              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default ForgotPassword;