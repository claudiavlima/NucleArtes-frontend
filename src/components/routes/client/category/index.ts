import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './category';
import { logOut } from '../../../../redux/actions/loginActions';
import { fetchCategories } from '../../../../redux/actions/categorieActions';
import {
  fetchPublicityOne,
  fetchPublicityTwo,
  fetchPublicityThird,
  fetchPublicityFourth,
  fetchPublicityFive
} from '../../../../redux/actions/publicityActions';

export interface StateProps {
  categories: any,
  publicityOne: any,
  publicityTwo: any,
  publicityThird: any,
  publicityFourth: any,
  publicityFive: any,
}

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories.items,
    isLoading: state.isLoading,
    isAuth: state.isAuth,
    publicityOne: state.publicity.publicityOne.length > 0 ?
      state.publicity.publicityOne[0].img : undefined,
    publicityTwo: state.publicity.publicityTwo.length > 0 ?
      state.publicity.publicityTwo[0].img : undefined,
    publicityThird: state.publicity.publicityThird.length > 0 ?
      state.publicity.publicityThird[0].img : undefined,
    publicityFourth: state.publicity.publicityFourth.length > 0 ?
      state.publicity.publicityFourth[0].img : undefined,
    publicityFive: state.publicity.publicityFive.length > 0 ?
      state.publicity.publicityFive[0].img : undefined,
  }
}

export interface DispatchProps {
  logOut?: typeof logOut;
  fetchCategories: typeof fetchCategories;
  fetchPublicityOne: typeof fetchPublicityOne,
  fetchPublicityTwo: typeof fetchPublicityTwo,
  fetchPublicityThird: typeof fetchPublicityThird,
  fetchPublicityFourth: typeof fetchPublicityFourth,
  fetchPublicityFive: typeof fetchPublicityFive,
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    logOut,
    fetchCategories,
    fetchPublicityOne,
    fetchPublicityTwo,
    fetchPublicityThird,
    fetchPublicityFourth,
    fetchPublicityFive
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
export type ReduxProps = DispatchProps & StateProps;