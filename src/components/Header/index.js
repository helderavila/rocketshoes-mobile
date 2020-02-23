import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, Cart, Item } from './styles';

import LogoImage from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <Logo source={LogoImage} />
      <Cart>
        <Icon name="shopping-cart" size={24} color="#fff" />
        <Item>2</Item>
      </Cart>
    </Container>
  );
}
