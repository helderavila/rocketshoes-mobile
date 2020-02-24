import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
} from './styles';

function Cart({ cart, dispatch }) {
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
                <Price>{item.price}</Price>
              </Info>
            </InfoProducts>
            <Form>
              <Amount value={String(item.amount)} />
              <EditContainer>
                <SubTotal>R$5000</SubTotal>
                <RemoveButton
                  onPress={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', id: item.id })
                  }
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
        <Total>R$ 1879,98</Total>
        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </TotalInfo>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
