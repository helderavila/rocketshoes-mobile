import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Container, Logo, Cart, Item } from './styles';

import LogoImage from '../../assets/images/logo.png';

function Header({ cartSize, navigation }) {
  return (
    <Container>
      <Logo source={LogoImage} />
      <Cart onPress={() => navigation.navigate('Cart', { screen: 'Cart' })}>
        <Icon name="shopping-cart" size={24} color="#fff" />
        <Item>{cartSize || 0}</Item>
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
