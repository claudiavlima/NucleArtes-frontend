import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './reports';
import { logOut } from '../../../../redux/actions/loginActions';
import { fetchCategories } from '../../../../redux/actions/categorieActions';

export interface StateProps {
  categories: any,
}

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories.items,
    isLoading: state.isLoading,
    isAuth: state.isAuth
  }
}

export interface DispatchProps {
  logOut?: typeof logOut;
  fetchCategories: typeof fetchCategories;
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    logOut,
    fetchCategories,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
export type ReduxProps = DispatchProps & StateProps;