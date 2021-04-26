import '../../styles/productPrivate.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { isAuth, logOut } from '../../redux/actions/loginActions'
import Product from '../products/publicProduct'


class viewPrivateProduct extends Component {
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
                <Link to='/privateClientProduct'>Productos</Link>
              </div>
              <div>
                <div className='basketMenu'>
                  <Link to='/sales'>Carrito</Link>
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
          <div className='col-md-8'>
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
    name: state.users.user,
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ isAuth, logOut }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(viewPrivateProduct)
