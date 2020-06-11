import '../../styles/home.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import Category from '../categories/category'

class publicHome extends Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
            <div className='publicity'>
                <div className='publicity-mr'>
                </div>
            </div>
            <div className='title'>
            <   h1 className='text1'>NucleArtes - Todos en un mismo mundo</h1>
            </div>
        </div>
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
            <div className='loginMenu'>
              <Link to='/login'>Login</Link>
            </div>
            <div className='registerMenu'> 
              <Link to='/register'>Register</Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
          </div>
          <div id='col-md-4'>
            <Category/>
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
    isAuth: state.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(publicHome)