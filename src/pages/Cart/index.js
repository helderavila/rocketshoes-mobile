import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
} from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
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
                <RemoveButton onPress={() => removeFromCart(item.id)}>
                  <Icon name="remove-shopping-cart" size={18} color="#7159c1" />
                </RemoveButton>
              </EditContainer>
            </Form>
          </Product>
        )}
      />
      <TotalInfo>
        <TotalText>TOTAL</TotalText>
        <Total>R$ 1879,98</Total>
        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </TotalInfo>
    </Container>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subtotal: formatPrice(product.price * product.amount),
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
