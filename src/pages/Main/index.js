import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';
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
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
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

export default connect()(Main);
