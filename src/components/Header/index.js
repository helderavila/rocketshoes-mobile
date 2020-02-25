import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container, Logo, Cart, Item } from './styles';

import LogoImage from '../../assets/images/logo.png';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
