import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import Product from './publicProduct'
import { Form, Formik, Field } from 'formik'
import { fetchCategories } from '../../../../redux/actions/categorieActions';
import { setProductCategory, fetchProducts } from '../../../../redux/actions/productActions'
import css from './products.module.css';
class viewPublicProduct extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  } css
  render() {
    return (
      <div className={css.container}>
        <div className={css.row}>
          <div className={css.filterProduct}>
            <Formik
              initialValues={{
                category_name: ''
              }}
              onSubmit={values => {
                this.props.setProductCategory(values.category_name)
              }}
            >
              {({ values, handleSubmit }) => (
                <Form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className={css.containerForm}>
                    <Field as="select" name="category_name">
                      <option value='TODOS'>Todos</option>
                      {this.props.categories.map(category =>
                        (<option value={category.category_name}>{category.name}</option>))}
                    </Field>
                  </div>
                  <button id={css.btnForm} type='submit'>Submit</button>
                </Form>
              )}
            </Formik>
          </div>
          <div className={css.containerProducts}>
            <Product />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    isLoading: state.isLoading,
    isAuth: state.isAuth,
    product: state.products.items,
    categories: state.categories.items
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCategories, setProductCategory, fetchProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(viewPublicProduct)