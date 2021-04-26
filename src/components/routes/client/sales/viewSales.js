import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Form, Formik, Field } from 'formik'
import { fetchCategories } from '../../redux/actions/categorieActions'
import { setProductCategory } from '../../redux/actions/productActions'
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Cart from '../carts/cart';
import '../../styles/billingInformationForm.css'

class viewSales extends Component {
  componentDidMount() {
    console.log('USER', this.props.userAuth)
  }
  render() {
    return (
    <>
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
        <div className='logged'>
          <div className='options'>
            <div className='homeMenu'>
              <Link to='/privateHome'>Inicio</Link>
            </div>
            <div className='productMenu'>
              <Link to='/privateClientProduct'>Productos</Link>
            </div>
            <div>
              <div className='basketMenu'>
                <Link to='/sales'>Carrito</Link>
              </div>
            </div>
          </div>
          <div className='buttonSession'>
            <div className='loginMenu'>
              <Link to='/login'>Login</Link>
            </div>
            <div className='registerMenu'>
              <Link to='/register'>Register</Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='billingInformation'>
            <div className='containerForm'>
              <div className='column'>
                <label>Datos de facturación</label>
                <div className='containerInput'>
                  <label>Nombre:</label>
                  <TextField value={this.props.userAuth.name} />
                </div>
                <div className='containerInput'>
                  <label>Apellido:</label>
                  <TextField value={this.props.userAuth.lastName} />
                </div>
                <div className='containerInput'>
                  <label>Email:</label>
                  <TextField value={this.props.userAuth.email} />
                </div>
              </div>
            </div>
          </div>
          <div className='shoppingCart'>
            <Cart />
          </div>
        </div>
      </div>
    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    isLoading: state.isLoading,
    isAuth: state.isAuth,
    product: state.products.items,
    categories: state.categories.items,
    userAuth: state.users.userAuth,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCategories, setProductCategory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(viewSales)