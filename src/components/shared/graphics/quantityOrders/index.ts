import Component from './quantityOrder';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getOrders } from '../../../../redux/actions/orderActions';
import { fetchUsers } from '../../../../redux/actions/loginActions';
import { getOrderForYear } from '../../../../redux/actions/selectors';

export interface StateProps {
  isFetching: any;
  orders: any;
  users: any;
}

export interface DispatchProps {
  getOrders: typeof getOrders;
  fetchUsers: typeof fetchUsers;
}

const mapStateToProps = (state: any) => ({
  orders: getOrderForYear(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getOrders,
    fetchUsers,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component as any);
export type ReduxProps = DispatchProps & StateProps;