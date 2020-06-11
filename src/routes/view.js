import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
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
  
  export default connect()(Routes)
  