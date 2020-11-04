import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 120px;
  align-items: center;
`;
export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  left: 30px;
  top: 45px;
`;
export const Title = styled.Text`
  font-size: 12px;
  color: #5e5e5e;
  font-weight: bold;
`;
export const Form = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
`;
export const Description = styled.Text`
  font-size: 12px;
  color: #5e5e5e;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const FormInput = styled.TextInput`
  width: 90%;
  height: 44px;
  padding: 10px;
  border-radius: 18px;
  background-color: #f5f5f5;
  margin: 10px;
`;
export const DocumentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;
export const ImageButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
`;
export const DocumentImage = styled.Image`
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
`;
export const DocumentDescription = styled.Text`
  flex: 1;
  text-align: center;
  margin-left: 10px;
  font-size: 12px;
  color: #5e5e5e;
`;
export const SubmitButton = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  height: 44px;
  background-color: #0091ff;
  border-radius: 18px;
  width: 90%;
`;
export const SubmitText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;
export const CityContainer = styled.View`
  flex-direction: row;
`;
export const TermsContainer = styled.View`
  flex-direction: row;
  margin: 10px 0px;
`;
