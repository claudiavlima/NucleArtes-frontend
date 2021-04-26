import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ReduxProps } from './';
import css from './publicHome.module.css';

export interface Props extends ReduxProps {
  children: React.ReactNode;
  showSearchField?: boolean;
}

const publicHome: React.FC<Props> = (props) => {
  const { children } = props;
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
        <div className={css.logged}>
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
            <div className={css.loginMenu}>
              <Link to='/login'>Login</Link>
            </div>
            <div className={css.registerMenu}>
              <Link to='/register'>Register</Link>
            </div>
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

export default publicHome;