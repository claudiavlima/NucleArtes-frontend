import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import PublicHome from '../components/home/publicHome'
// import Login from '../components/login/viewLogin'
// import Register from '../components/register/viewRegister'
// import PrivateHome from '../components/home/privateHome'
// import PrivateProduct from '../components/products/viewPrivateProduct'
// import FormProduct from '../components/products/formProduct'
// import ModifiedProduct from '../components/products/modifiedProduct'
// import PublicProduct from '../components/products/viewPublicProduct'
// import Cart from '../components/carts/viewCart'
// import Sales from '../components/sales/viewSales';
import store from '../redux/store'
// import PrivateClientProduct from '../components/sales/viewPrivateProduct'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact={true} path='/publicHome' component={PublicHome}/>
            <Route exact={true} path='/login' component={Login}/>
            <Route exact={true} path='/register' component={Register}/>
            <Route exact={true} path='/publicProduct' component={PublicProduct}/>
            <Route exact={true} path='/cart' component={Cart}/>
            <PrivateRoute exact={true} path='/privateHome' component={PrivateHome}/>
            <PrivateRoute exact={true} path='/privateProduct' component={PrivateProduct}/>
            <PrivateRoute exact={true} path='/formProduct' component={FormProduct}/>
            <PrivateRoute exact={true} path='/modifiedProduct' component={ModifiedProduct} />
            <PrivateRoute exact={true} path='/sales' component={Sales}/>
            <PrivateRoute exact={true} path='/privateClientProduct' component={PrivateClientProduct}/>
            <Redirect from='/' to='/publicHome' /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      store.getState().users.token ? (
        <Component {...props} />
      ) : (
          <Redirect to='/' />
        )
    }
  />
)

const mapStateToProps = state => {
  return {
    userAuth: state.users.userAuth,
  }
}

export default connect(mapStateToProps, undefined)(Routes)