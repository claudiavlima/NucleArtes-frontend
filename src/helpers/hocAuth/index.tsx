import React, { useEffect, useCallback } from 'react';
import { logOut as logoutAction } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
// import { Category } from '../../enums/index'

interface Props extends RouteComponentProps {
  authenticated: any;
  user: any;
  logout: typeof logoutAction;
}

const CheckAuthHOC = (
  WrappedComponent: React.ComponentType<any>,
  allowCategory: any,
) => {

  const HOC = (props: Props) => {

    const { authenticated, user, history, match, logout } = props;
    const checkTokenAndCategory = useCallback(() => {
      console.log("user", user)
      if (!authenticated) {
        logout();
        history.push('/');
      }
      // else if (user && user.category !== allowCategory) {
      //   console.log('ENTRE AL SEGUNDO IF', allowCategory);
      //   history.push('/');
      // }
      else if (user && user.category === 'admin') {
        history.push('/admin/products');
      } else if (user && user.category === 'client') {
        history.push('/');
      }
    }, [authenticated, user, history, logout]);

    useEffect(() => {
      checkTokenAndCategory();
    }, [authenticated, checkTokenAndCategory]);

    return <WrappedComponent history={history} match={match} />;

  };

  const mapStateToProps = (state: any) => ({
    authenticated: state.users.isAuth,
    user: state.users.user,
  });

  const mapDispatchToProps = (dispatch: Dispatch<any>) =>
    bindActionCreators({
      logout: logoutAction,
    }, dispatch);

  return connect(mapStateToProps, (mapDispatchToProps as any))(HOC);
};

export default CheckAuthHOC;