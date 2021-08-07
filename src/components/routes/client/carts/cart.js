import React, { Component } from 'react'
import util from '../../../../helpers/utils'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeFromCart } from '../../../../redux/actions/cartActions'
import { postOrder } from '../../../../redux/actions/orderActions'
import { setMercadoPagoPreferences } from '../../../../redux/actions/mercadoPagoActions'
import css from './cart.module.css'

class cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className={css.alertInfo}>
        {cartItems.length === 0 ? (
          'Carrito vacio'
        ) : (
          <div>you have {cartItems.length} products in the basket</div>
        )}
        { cartItems.length > 0 && (
          <div className={css.cartProduct}>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: 'right' }}
                    className={css.btnDanger}
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
            {this.props.isAuth ?
              (
                <>
                  <button className={css.btnPrimary} onClick={() => {
                    this.props.history.push('/sales')
                  }}>Ir a Pagar</button>
                  <div id='mercadoForm'>
                    <div />
                  </div>
                </>
              )
              :
              (
                <button onClick={() => this.props.history.push('/login')}>
                  Iniciar sesion
                </button>
              )
            }
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  isAuth: state.users.isAuth,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeFromCart, postOrder, setMercadoPagoPreferences }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(cart)
