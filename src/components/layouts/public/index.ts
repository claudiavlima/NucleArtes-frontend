import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import publicHome from './publicHome';
import { logOut } from '../../../redux/actions/loginActions';


const mapStateToProps = (state: any) => {
  return {
    cart: state.cart,
    isLoading: state.isLoading,
    isAuth: state.isAuth
  }
}

export interface DispatchProps {
  logOut?: typeof logOut;
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    logOut,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(publicHome);
export type ReduxProps = DispatchProps;