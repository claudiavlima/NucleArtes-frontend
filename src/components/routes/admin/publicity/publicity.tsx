import React, { useEffect } from 'react'
import { ReduxProps } from './';
import css from './publicity.module.css';
import Paper from '@material-ui/core/Paper';
import TextField from '../../../shared/form/text-field';
import {
  required,
} from '../../../../helpers/form/validators';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button'

const Category: React.FC<ReduxProps> = (props) => {

  const {
    isFetchingPublicityOne,
    isFetchingPublicityTwo,
    isFetchingPublicityThird,
    isFetchingPublicityFourth,
    isFetchingPublicityFive,
    isPublicityOne,
    isPublicityTwo,
    isPublicityThird,
    isPublicityFourth,
    isPublicityFive,
    handleSubmit,
    fetchPublicityOne,
    fetchPublicityTwo,
    fetchPublicityThird,
    fetchPublicityFourth,
    fetchPublicityFive
  } = props;

  useEffect(() => {
    fetchPublicityOne();
    fetchPublicityTwo();
    fetchPublicityThird();
    fetchPublicityFourth();
    fetchPublicityFive();
  }, [
    fetchPublicityOne,
    fetchPublicityTwo,
    fetchPublicityThird,
    fetchPublicityFourth,
    fetchPublicityFive
  ])

  return (
    <>
      <div className={css.container}>
        <div className={css.containerOptions}>
          <Paper>
            <div className={css.option}>
              <p className={css.text}>Públicidad 1</p>
              <div className={css.containerFields}>
                <div className={css.containerField}>
                  <Field
                    name="titleOne"
                    label="Título"
                    component={TextField}
                    // validate={[required()]}
                    required={true}
                    disabled={isFetchingPublicityOne}
                  />
                </div>
                <div className={css.containerField}>
                  <Field
                    name="imgOne"
                    label="Imagen"
                    component={TextField}
                    // validate={[required()]}
                    required={true}
                    disabled={isFetchingPublicityOne}
                  />
                </div>
              </div>
              {!isPublicityOne ?
                <Button className={css.btnView} onClick={handleSubmit}>Guardar</Button>
                : <Button className={css.btnView}>Modificar</Button>
              }
            </div>
            <div className={css.option}>
              <p className={css.text}>Públicidad 2</p>
              <div className={css.containerFields}>
                <div className={css.containerField}>
                  <Field
                    name="titleTwo"
                    label="Título"
                    component={TextField}
                    // validate={[required()]}
                    // required={true}
                    disabled={isFetchingPublicityTwo}
                  />
                </div>
                <div className={css.containerField}>
                  <Field
                    name="imgTwo"
                    label="Imagen"
                    component={TextField}
                    // validate={[required()]}
                    // required={true}
                    disabled={isFetchingPublicityTwo}
                  />
                </div>
              </div>
              {!isPublicityTwo ?
                <Button className={css.btnView} onClick={handleSubmit}>Guardar</Button>
                : <Button className={css.btnView}>Modificar</Button>
              }
            </div>
            <div className={css.option}>
              <p className={css.text}>Públicidad 3</p>
              <div className={css.containerFields}>
                <div className={css.containerField}>
                  <Field
                    name="titleThird"
                    label="Título"
                    component={TextField}
                    // validate={[required()]}
                    // required={true}
                    disabled={isFetchingPublicityThird}
                  />
                </div>
                <div className={css.containerField}>
                  <Field
                    name="imgThird"
                    label="Imagen"
                    component={TextField}
                    // validate={[required()]}
                    // required={true}
                    disabled={isFetchingPublicityThird}
                  />
                </div>
              </div>
              {!isPublicityThird ?
                <Button className={css.btnView} onClick={handleSubmit}>Guardar</Button>
                : <Button className={css.btnView}>Modificar</Button>
              }
            </div>
            <div className={css.option}>
              <p className={css.text}>Públicidad 4</p>
              <div className={css.containerFields}>
                <div className={css.containerField}>
                  <Field
                    name="titleFourth"
                    label="Título"
                    component={TextField}
                    // validate={[required()]}
                    // required={true}
                    disabled={isFetchingPublicityFourth}
                  />
                </div>
                <div className={css.containerField}>
                  <Field
                    name="imgFourth"
                    label="Imagen"
                    component={TextField}
                    // validate={[required()]}
                    // required={true}
                    disabled={isFetchingPublicityFourth}
                  />
                </div>
              </div>
              {!isPublicityFourth ?
                <Button className={css.btnView} onClick={handleSubmit}>Guardar</Button>
                : <Button className={css.btnView}>Modificar</Button>
              }
            </div>
            <div className={css.option}>
              <p className={css.text}>Públicidad 5</p>
              <div className={css.containerFields}>
                <div className={css.containerField}>
                  <Field
                    name="titleFive"
                    label="Título"
                    component={TextField}
                    // validate={[required()]}
                    // required={true}
                    disabled={isFetchingPublicityFive}
                  />
                </div>
                <div className={css.containerField}>
                  <Field
                    name="imgFive"
                    label="Imagen"
                    component={TextField}
                    // validate={[required()]}
                    // required={true}
                    disabled={isFetchingPublicityFive}
                  />
                </div>
              </div>
              {!isPublicityFive ?
                <Button className={css.btnView} onClick={handleSubmit}>Guardar</Button>
                : <Button className={css.btnView}>Modificar</Button>
              }
            </div>
          </Paper>
        </div>
      </div>
    </>
  )
};

export default Category;