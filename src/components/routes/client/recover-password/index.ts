import Component from './recover-password';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getOrderById } from '../../../../redux/actions/orderActions';
import { getSelectedOrderById } from '../../../../redux/actions/selectors';
import { setMailSended, changePassword } from '../../../../redux/actions/loginActions';
import get from 'lodash/get';
import { FormNames } from '../../../../enums';
import {
  reduxForm,
  SubmissionError,
  InjectedFormProps,
} from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';
import {
  FORGOT_PASSWORD_FETCHING,
  FORGOT_PASSWORD_FULFILLED,
  FORGOT_PASSWORD_REJECTED,
  RECOVER_PASSWORD,
  CHANGE_PASSWORD_FULFILLED,
} from '../../../../redux/actions/types';

export interface ForgotPassword {
  password: string,
  confirmPassword: string

}

export interface StateProps {
  user: any;
  initialValues?: any;
  selectedOrder: any;
  isFetching: boolean;
  mailSended: boolean;
  userId: string;
}

export interface DispatchProps {
  getOrderById: typeof getOrderById;
  setMailSended: typeof setMailSended;
  changePassword: typeof changePassword;
}

interface OwnProps {
  match: {
    params: {
      id: any;
    },
  };
}

const mapStateToProps = (state: any, ownProps: OwnProps) => {
  let initialValues;
  const selectedOrder = getSelectedOrderById(state, get(ownProps.match, 'params.id', ''));
  if (selectedOrder) {
    initialValues = {
      ...selectedOrder
    };
  }
  return {
    selectedOrder,
    initialValues,
    user: state.users.user,
    isFetching: state.users.isFetchingSendMail,
    mailSended: state.users.mailSended,
    userId: get(ownProps.match, 'params.id', ''),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getOrderById,
    setMailSended,
    changePassword,
  }, dispatch);

const onSubmit = async (values: ForgotPassword, dispatch: any, props: ReduxProps) => {
  try {
    let response: any;

    const payload = {
      password: values.password,
      confirmPassword: values.confirmPassword,
      id: props.userId,
    }

    response = await props.changePassword(payload);

    switch (response.type) {
      case CHANGE_PASSWORD_FULFILLED:
        return props.history.push('/login');
    }
  }

  catch (error) {
    throw new SubmissionError({
      _error: error ? error.toString().slice(6) : 'Hubo un error',
    });
  };
};


export const reduxFormConfig = {
  form: FormNames.RECOVER_PASSWORD,
  onSubmit,
};


export default connect(mapStateToProps, (mapDispatchToProps as any))(reduxForm(reduxFormConfig)(Component as any) as any);
type Props = StateProps & DispatchProps & RouteComponentProps;
export type ReduxProps = Props & InjectedFormProps<ForgotPassword, Props>;