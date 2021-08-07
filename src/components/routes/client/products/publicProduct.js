// import '../../../../styles/product.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToCart } from '../../../../redux/actions/cartActions'
import { fetchProducts } from '../../../../redux/actions/productActions'
import css from './products.module.css';

class publicProduct extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }
  render() {
    const filterProducts = this.props.categoryName !== 'TODOS' ?
      this.props.products.filter(product => (product.category_name === this.props.categoryName)) :
      this.props.products
    const productItems = filterProducts.map(product => (
      <div className={css.productContainer} key={product._id}>
        <div className={css.thumbnailTextCenter}>
          <a
            className={css.nameProduct}
            href={`#${product._id}`}
          >
            <img className={css.imageProduct} src={`http://localhost:5000/${product.img}`} alt='photo' />
            <p id='name-product'>{product.title}</p>
          </a>
          <b>${product.price}</b>
          <button
            className={css.btnPrimary}
            onClick={() => this.props.addToCart(this.props.cartItems, product)}
          >
            Añadir
          </button>
        </div>
      </div>
    ))
    return <div className={css.containerProductsItems}>{productItems}</div>
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  cartItems: state.cart.items,
  isAuth: state.users.isAuth,
  categoryName: state.products.categoryName
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCart, fetchProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(publicProduct)