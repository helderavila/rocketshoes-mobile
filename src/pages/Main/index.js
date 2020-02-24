import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  List,
  Product,
  ProductImage,
  Title,
  Price,
  AddCartButton,
  IconCart,
  ButtonText,
  Amount,
  CartButton,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  };

  handleAddProduct = product => {
    const { AddToCart } = this.props;

    AddToCart(product);
  };

  render() {
    const { products } = this.state;
    return (
      <List
        data={products}
        horizontal
        keyExtractor={products.id}
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>
            <AddCartButton onPress={() => this.handleAddProduct(item)}>
              <CartButton>
                <IconCart />
                <Amount>3</Amount>
              </CartButton>

              <ButtonText>ADICIONAR</ButtonText>
            </AddCartButton>
          </Product>
        )}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Main);
