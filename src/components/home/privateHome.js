import '../../styles/home.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postProduct, updateProduct } from '../../redux/actions/productActions'
import { Link } from 'react-router-dom'
import { isAuth, logOut} from '../../redux/actions/loginActions'



class privateHome extends Component {
  capturarDatos() {
    const productToUpdate = this.props.products.find(
      product => product._id === this.props.productSelected
    )
    return {
      tittle: productToUpdate.tittle,
      description: productToUpdate.description,
      availableSize: productToUpdate.availableSize,
      price: productToUpdate.price
    }
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
        <hr />
        <div className='row'>
          <div className='categoriesPrivate'>
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
    isAdmin: state.users.isAdmin
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { postProduct, updateProduct, isAuth, logOut },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(privateHome)
