import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCategories } from '../../../../redux/actions/categorieActions'
import { setProductCategory } from '../../../../redux/actions/productActions'
import TextField from '@material-ui/core/TextField';
import css from './sales.module.css';
import { setMercadoPagoPreferences } from '../../../../redux/actions/mercadoPagoActions';
import { postOrder } from '../../../../redux/actions/orderActions';
import moment from 'moment';
import { cleanCart } from '../../../../redux/actions/cartActions';

class viewSales extends Component {
  componentDidMount() {
    this.props.setMercadoPagoPreferences(this.props.cartItems)
  }
  render() {

    const crateOrder = () => {
      const sale = {
        client: this.props.user._id,
        total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
        products: this.props.cartItems.map((item) => {
          return {
            productId: item._id,
            quantity: item.count,
            name: item.title,
            price: item.price
          }
        }),
        date: moment().format('DD-MM-YYYY'),
      }
      this.props.postOrder(sale)
      this.props.cleanCart([])
      this.props.history.push('/')
    };



    return (
      <>
        <div className={css.container}>
          <div className={css.billingInformation}>
            <div className={css.containerForm}>
              <div className={css.column}>
                <label>Datos de facturación</label>
                <div className={css.containerInput}>
                  <label>Nombre:</label>
                  <TextField value={this.props.user.name} />
                </div>
                <div className={css.containerInput}>
                  <label>Apellido:</label>
                  <TextField value={this.props.user.lastName} />
                </div>
                <div className={css.containerInput}>
                  <label>Email:</label>
                  <TextField value={this.props.user.email} />
                </div>
              </div>
            </div>
            <div className={css.containerButton} onClick={() => crateOrder()}>
              <div id='mercadoForm'>
                <div />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
    isLoading: state.isLoading,
    isAuth: state.users.isAuth,
    product: state.products.items,
    categories: state.categories.items,
    user: state.users.user,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCategories, setProductCategory, setMercadoPagoPreferences, postOrder, cleanCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(viewSales)