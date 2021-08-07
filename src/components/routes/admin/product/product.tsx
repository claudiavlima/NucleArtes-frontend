import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import css from './products.module.css';
import { ReduxProps } from '.';
import { Field } from 'redux-form';
import TextField from '../../../shared/form/text-field';
import ImageField from '../../../shared/form/image-field';
import SelectField from '../../../shared/form/select-field';
import { useHistory } from 'react-router-dom';
import {
  required,
} from '../../../../helpers/form/validators';

const FormProduct: React.FC<ReduxProps> = (props) => {
  const {
    fetchCategories,
    categoryList,
    handleSubmit,
    getProductByArtesanoId,
    user,
    onlyView,
    isFetching,
  } = props;

  useEffect(() => {
    fetchCategories();
    getProductByArtesanoId(user._id);
  }, [fetchCategories, getProductByArtesanoId]);

  const history = useHistory();

  return (
    <div className={css.container}>
      <div className={css.form}>
        <h4>Agregar nuevo producto</h4>
        <div className={css.formContainer}>
          <div className={css.right}>
            <div className={css.containerField}>
              <Field
                name="title"
                label="Título"
                component={TextField}
                validate={[required()]}
                required={true}
                disabled={isFetching || onlyView}
              />
            </div>
            <div className={css.containerField}>
              <Field
                name="description"
                label="Descripción"
                component={TextField}
                required={true}
                disabled={isFetching || onlyView}
              />
            </div>
            <div className={css.containerField}>
              <Field
                name="price"
                label="Precio"
                component={TextField}
                required={true}
                disabled={isFetching || onlyView}
              />
            </div>
          </div>
          <div className={css.left}>
            <div className={css.containerField}>
              <Field
                name="stock"
                label="Stock"
                component={TextField}
                required={true}
                disabled={isFetching || onlyView}
              />
            </div>
            <div className={css.containerField}>
              <Field
                name="img"
                label="Imagen"
                component={TextField}
                required={true}
                disabled={isFetching || onlyView}
              />
            </div>
            <div className={css.containerField}>
              <Field
                name="categoryName"
                label="Categoría"
                className={css.input}
                component={SelectField}
                required={true}
                options={categoryList}
                disabled={isFetching || onlyView}
              />
            </div>
          </div>
        </div>
        <div className={css.containerButton}>
          <Button className={css.cancelButton} onClick={() => history.push('/admin/products')} disabled={isFetching}
          >
            Cancelar
            </Button>
          <Button className={css.confirmButton} onClick={handleSubmit} disabled={isFetching || onlyView}>
            Confirmar
            </Button>
        </div>
      </div>
    </div >
  )
}

export default FormProduct;

