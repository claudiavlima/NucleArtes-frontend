import '../../styles/cart.css'
import React, { Component } from 'react'
import util from '../../helpers/utils'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeFromCart } from '../../redux/actions/cartActions'
import { postSales } from '../../redux/actions/salesActions'
import { setMercadoPagoPreferences } from '../../redux/actions/mercadoPagoActions'


class cart extends Component {
  render() {
    const { cartItems } = this.props
    return (
      <div className='alert-info'>
        {cartItems.length === 0 ? (
          'Carrito vacio'
        ) : (
          <div>you have {cartItems.length} products in the basket</div>
        )}
        { cartItems.length > 0 && (
          <div className='cart-product'>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: 'right' }}
                    className='btn-danger'
                    onClick={() =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)}
                </li>
              ))}
            </ul>
            <b>
              Sum:{' '}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            <button className='btn btn-primary' onClick={()=>
            {
              this.props.setMercadoPagoPreferences(this.props.cartItems)
              // const sale = {
              //   client: this.props.userAuth._id,
              //   total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
              //   products: cartItems.map((item) => {
              //     return {
              //       productId: item._id,
              //       quantity: item.count,
              //       name: item.title,
              //       price: item.price
              //     }
              //   }),
              //   date: moment().format('DD-MM-YYYY'),
              // }
              // this.props.postSales(sale)
            }
            }>checkout</button>
            <div id='mercadoForm'>
            <div/>
          </div>
        </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  userAuth: state.users.userAuth,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeFromCart, postSales, setMercadoPagoPreferences }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(cart)
