import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  CartList,
  Product,
  InfoProducts,
  ProcutImage,
  Info,
  Title,
  Price,
  Form,
  Amount,
  SubTotal,
  TotalInfo,
  TotalText,
  Total,
  SubmitButton,
  SubmitButtonText,
  RemoveButton,
  EditContainer,
  AmountContainer,
  RemoveAmount,
  AddAmount,
  EmptyCart,
  EmptyCartText,
  ContainerEmpty,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  if (cart.length === 0) {
    return (
      <ContainerEmpty>
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={78} color="#eee" />
          <EmptyCartText>Seu carrinho está vazio!</EmptyCartText>
        </EmptyCart>
      </ContainerEmpty>
    );
  }

  return (
    <Container>
      <CartList
        data={cart}
        keyExtractor={cart.id}
        renderItem={({ item }) => (
          <Product>
            <InfoProducts>
              <ProcutImage source={{ uri: item.image }} />
              <Info>
                <Title>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>
              </Info>
            </InfoProducts>
            <Form>
              <AmountContainer>
                <RemoveAmount onPress={() => decrement(item)}>
                  <Icon name="remove-circle" size={18} color="#7159c1" />
                </RemoveAmount>
                <Amount value={String(item.amount)} />
                <AddAmount onPress={() => increment(item)}>
                  <Icon name="add-circle" size={18} color="#7159c1" />
                </AddAmount>
              </AmountContainer>
              <EditContainer>
                <SubTotal>{item.subtotal}</SubTotal>
                <RemoveButton
                  onPress={() => dispatch(CartActions.removeFromCart(item.id))}
                >
                  <Icon name="remove-shopping-cart" size={18} color="#7159c1" />
                </RemoveButton>
              </EditContainer>
            </Form>
          </Product>
        )}
      />
      <TotalInfo>
        <TotalText>TOTAL</TotalText>
        <Total>{total}</Total>
        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </TotalInfo>
    </Container>
  );
}
