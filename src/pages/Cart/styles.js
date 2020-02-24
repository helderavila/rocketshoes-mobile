import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  justify-content: center;
  flex: 1;
`;

export const CartList = styled.FlatList`
  background: #fff;
  width: 350px;
  margin: 10px auto;
  border-radius: 5px;
`;
export const Product = styled.View`
  padding: 20px 10px;
`;
export const InfoProducts = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProcutImage = styled.ImageBackground`
  width: 80px;
  height: 80px;
`;
export const Info = styled.View`
  max-width: 260px;
  margin-left: 10px;
`;
export const Title = styled.Text`
  font-size: 14px;
  color: #333333;
`;
export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const Form = styled.View`
  margin-top: 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  background: #eeeeee;
  border-radius: 5px;
  justify-content: space-between;
`;
export const Amount = styled.TextInput`
  background: #fff;
  width: 51px;
  height: 26px;
  margin-left: 10px;
  font-size: 14px;
  padding: 5px;
`;
export const SubTotal = styled.Text.attrs({
  readonly: true,
})`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  color: #000;
`;

export const TotalInfo = styled.View`
  background: #fff;
  width: 350px;
  margin: 10px auto;
  border-radius: 5px;
  padding: 30px 25px;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  color: #999999;
  font-weight: bold;
`;

export const Total = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  width: 315px;
  padding: 15px 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 25px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const RemoveButton = styled(RectButton)`
  padding: 5px;
`;

export const EditContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`;
