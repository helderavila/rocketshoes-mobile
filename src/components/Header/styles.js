import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  background: #141419;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px;
`;

export const Logo = styled.Image`
  width: 180px;
  height: 23px;
`;

export const Cart = styled(RectButton)``;

export const Item = styled.Text`
  position: absolute;
  background: #7159c1;
  border-radius: 100px;
  width: 22px;
  height: 22px;
  text-align: center;
  padding: 3px;
  font-size: 12px;
  color: #fff;
  margin-left: 15px;
  margin-top: -10px;
`;
