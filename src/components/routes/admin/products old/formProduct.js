import '../../styles/home.css'
import '../../styles/formProduct.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Formik, Form, Field } from 'formik'
import { postProduct } from '../../redux/actions/productActions'
import { fetchCategories } from '../../redux/actions/categorieActions'
import { Link } from 'react-router-dom'
import { isAuth, logOut } from '../../redux/actions/loginActions'


class formProduct extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  render() {
    return (
      <div className='container'>
        <div className='header'>
            <div className='publicity-menu'>
                <div className='publicity-mr'>
                </div>
            </div>
            <div className='title'>
            <h1 className='text1'>NucleArtes - Todos en un mismo mundo</h1>
            </div>
        </div>
        {this.props.isAuth ? (
        <div className='logged'>
          <div className='options'>
            <div className='homeMenu'>
              <Link to='/publicHome'>Inicio</Link>
            </div>
            <div className='productMenu'>
              <Link to='/publicProduct'>Productos</Link>
            </div>
            <div>
            <div className='basketMenu'>
              <Link to='/cart'>Carrito</Link>
            </div>
            </div>
          </div>
          <div className='buttonSession'>
            <div className='adminsession'>{this.props.name}</div>
            <div className='my-product'>
              <Link to='/privateProduct'>Mis Productos</Link>
            </div>
            <div className='buttonmenu'>
              <Link to='/login' onClick={this.props.logOut}>Logout</Link>
            </div>
          </div>
        </div>
        ) : (
          <div id='login2'>
            <div className='buttonmenu'>
              <Link to='/register'>Sign up</Link>
            </div>
            <div className='buttonmenu'>
              <Link to='/login'>Login</Link>
            </div>
          </div>
        )}
        <div className='row'>
        <div className='form-add'>
            <h4 id='title-form'>Agregar nuevo producto</h4>
            <div className='form-container'>
              <Formik
                initialValues={{
                  photo: 'https://via.placeholder.com/150',
                  title: '',
                  description: '',
                  price: 0,
                  stock: 0,
                  img:''
                }}
                onSubmit={values => {
                  const id = this.props.id_artesano
                  const newProduct = {
                    ...values,
                    id_artesano: id
                  }
                  this.props.postProduct(newProduct).then(res => {
                    if (res.type === 'ADD_PRODUCT_SUCCESS') {
                      this.props.history.push('/privateProduct')
                    }
                  })
                }}
              >
                {({ values,handleSubmit }) => (
                  <Form 
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column'}}>
                    <div className='container-form'>
                    <Field id='title-product' type='text' name='title' placeholder='Titulo'/>
                    <Field id='product-description' type='text' name='description' placeholder='Descripción'/>
                    <Field id='product-price' type='number' name='price' placeholder='Precio' />
                    <Field id='product-stock' type='number' name='stock' placeholder='Stock' />
                    <Field id='product-img' type='text' name='img' placeholder='Imagen' />
                    <Field id='product-select' as="select" name="category_name">
                    {this.props.categories.map(category => 
                      (<option value={category.category_name}>{category.name}</option>))}
                    </Field>
                    </div>
                    <button id='btn-form' type='submit'>Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.items,
    name: state.users.user,
    isLoading: state.isLoading,
    isAuth: state.isAuth,
    productSelected: state.products.productSelected,
    id_artesano: state.users.id_artesano,
    categories: state.categories.items,
    category_name: state.categories.category_name
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { postProduct, isAuth, logOut, fetchCategories },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(formProduct)
