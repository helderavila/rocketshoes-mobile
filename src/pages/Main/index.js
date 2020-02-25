import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.AddToCartRequest(id));
  }
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
          <AddCartButton onPress={() => handleAddProduct(item.id)}>
            <CartButton>
              <IconCart />
              <Amount>{amount[item.id] || 0}</Amount>
            </CartButton>

            <ButtonText>ADICIONAR</ButtonText>
          </AddCartButton>
        </Product>
      )}
    />
  );
}
