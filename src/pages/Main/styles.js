import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const List = styled.FlatList`
  flex: 1;
  background: #191920;
`;

export const Product = styled.View`
  display: flex;
  padding: 30px 20px;
  background: #fff;
  max-width: 220px;
  height: 400px;
  margin: 20px 20px auto 20px;
  border-radius: 4px;
`;
export const ProductImage = styled.ImageBackground`
  width: 190px;
  height: 190px;
`;
export const Title = styled.Text`
  font-size: 16px;
`;
export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;
export const AddCartButton = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: auto;
  align-items: center;
  overflow: hidden;
`;

export const CartButton = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconCart = styled(Icon).attrs({
  name: 'shopping-cart',
  size: 24,
  color: '#fff',
})``;

export const Amount = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
