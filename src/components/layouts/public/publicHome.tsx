import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ReduxProps } from './';
import css from './publicHome.module.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp'


export interface Props extends ReduxProps {
  children: React.ReactNode;
  showSearchField?: boolean;
}

const PublicHome: React.FC<Props> = (props) => {
  const { children, isAuth, logOut } = props;

  const [anchorEl, setAnchorEl] = useState(false);

  const handleOpen = () => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.header}>
          <div className={css.publicityMenu}>
            <div className={css.publicityMr}>
            </div>
          </div>
          <div className={css.title}>
            <h1 className={css.text1}>NucleArtes - Todos en un mismo mundo</h1>
          </div>
        </div>
        <div className={css.menu}>
          <div className={css.options}>
            <div className={css.homeMenu}>
              <Link to='/publicHome'>Inicio</Link>
            </div>
            <div className={css.productMenu}>
              <Link to='/publicProduct'>Productos</Link>
            </div>
            <div>
              <div className={css.basketMenu}>
                <Link to='/cart'>Carrito</Link>
              </div>
            </div>
          </div>
          <div className={css.buttonSession}>
            {isAuth ?
              <div className={css.logged}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpen}>
                  <AccountCircleOutlinedIcon className={css.logUser} />
                </Button>
                <Menu
                  id="userMenu"
                  keepMounted
                  open={anchorEl}
                  onClose={handleClose}
                >
                  {/* <MenuItem><Link className={css.menuMyProfile} to='/profile'>Mi Perfil</Link></MenuItem> */}
                  <MenuItem><Link className={css.menuProduct} to='/my-orders'>Mis Compras</Link></MenuItem>
                  <MenuItem><Link className={css.menuLogout} to='/login' onClick={logOut}>Logout</Link></MenuItem>
                </Menu>
              </div>
              :
              <div className={css.loginMenu}>
                <Link to='/login'><PersonOutlineSharpIcon /></Link>
              </div>
            }
          </div>
        </div>
        <div className={css.main}>
          <div className={css.childrenContainer}>
            {children}
          </div>
        </div>
        <div className={css.footer}>
          <p className={css.footerP}>PIE DE PAGINA: info legal copyright, contactanos asistencia tecnica, etc</p>
        </div>
      </div>
    </>
  )
}

export default PublicHome;