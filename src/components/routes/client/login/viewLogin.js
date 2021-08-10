import '../../../../styles/login.css'
import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { loginAccount } from '../../../../redux/actions/loginActions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

class login extends Component {
  constructor(props) {
    super(props)
    this.getLogin = this.getLogin.bind(this)
  }

  //COMPARE VALUES WITH DATABASE
  getLogin = values => {
    this.props.loginAccount(values).then(response => {
      if (response.payload.user.category === 'admin') {
        console.log('ENTRE AL IF')
        return this.props.history.push('/admin/products');
      } else {
        console.log('ENTRE AL SEGUNDO IF')
        return this.props.history.push('/');
      }
    })
  }
  render() {
    return (
      <div className='container'>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={this.getLogin}
        >
          {({ handleSubmit }) => (
            <Form
              id='form-login'
              onSubmit={handleSubmit}
            >
              <div className='container-form'>
                <div id='login'>
                  <Field
                    type='text'
                    id='inputEmail'
                    name='email'
                    placeholder='email'
                  />
                  <Field
                    type='password'
                    id='inputPassword'
                    name='password'
                    placeholder='password'
                  />
                </div>
                <div id='buttonsLoginContainer'>
                  <div className='createAccount'>
                    <Link
                      id='buttonCreateAccount'
                      className='buttonLogin'
                      to='/register'
                    >
                      Create Account
                    </Link>
                  </div>
                  {!this.props.isLoading ? (
                    <button
                      type='submit'
                      id='buttonLogin'
                      className='buttonLogin'
                    >
                      Log In
                    </button>
                  ) : (
                    <ClipLoader size={50} color={'black'} loading />
                  )}
                  <div className='bad-credentials-1'>
                    {this.props.failedLogin ? (
                      <div id='bad-credentials'>Bad Credentials</div>
                    ) : null}
                  </div>
                  <button onClick={() => this.props.history.push('/forgot-password')}>Olvide mi contraseña</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className='footer'>
          <p className='footer-p'>PIE DE PAGINA: info legal copyright, contactanos asistencia tecnica, etc</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    isLoading: state.users.isLoading,
    isAuth: state.users.isAuth,
    isAdmin: state.users.isAdmin,
    failedLogin: state.users.failedLogin
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginAccount }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(login)