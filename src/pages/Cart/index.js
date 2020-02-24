import React from 'react';
import { connect } from 'react-redux';

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
} from './styles';

function Cart({ cart }) {
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
              <SubTotal>R$5000</SubTotal>
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
