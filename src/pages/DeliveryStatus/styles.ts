import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const DeliveryStatusContainer = styled.View`
  padding: 10px;
  flex: 1;
`;
export const StatusContainer = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #cacaca;
`;
export const FirstStatusSection = styled.View`
  flex: 2;
`;
export const SecondStatusSection = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
export const StatusText = styled.Text`
  font-size: 14px;
  color: #00a2d9;
  font-weight: 500;
  margin-bottom: 15px;
`;
export const DeliveryTagText = styled.Text`
  font-size: 12px;
  color: #fa6400;
  font-weight: 300;
  margin-bottom: 15px;
`;
export const DateText = styled.Text`
  font-size: 14px;
  color: #6d7278;
  font-weight: 300;
`;
export const LabelText = styled.Text`
  font-size: 12px;
  color: #00a2d9;
  font-weight: 300;
  text-align: right;
`;
export const ValueText = styled.Text`
  font-size: 24px;
  color: #6d7278;
  font-weight: bold;
  text-align: right;
`;
export const DetailContainer = styled.View`
  padding: 15px;
`;
export const DeliveryContainer = styled.View`
  align-items: flex-end;
  margin-top: 20px;
`;
export const WithdrawalContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #cacaca;
`;

export const DeliveryButton = styled.TouchableOpacity`
  height: 47px;
  padding: 8px 101px 15px 98px;
  background-color: #009ed8;
`

export const DeliveryButtonText = styled.Text`
  color: white;
  font-size: 16px;
  letter-spacing: 0.19px;
  text-align: center;
`

export const GetBad = styled.TouchableOpacity`
  width: 139px;
  height: 37px;
  padding: 11px 38px 12px 40px;
  border-radius: 6px;
  border: solid 1px #fa6400;
  margin-bottom:20px
`

export const GetBadText = styled.Text`
  font-size: 12px;
  letter-spacing: 0.14px;
  text-align: center;
  color: #fa6400;
`

export const CompletedTextSmall = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #6d7278;
  margin-bottom: 20px;
`

export const CompletedText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #00a2d9;
  text-align: center;
  margin-bottom: 20px;
`

export const Center = styled.View`
  justify-content: center;
  align-items: center;
`

export const CompletedTag = styled.View`
  width: 73px;
  height: 73px;
  margin: 26px 1px 83px 2px;
  padding: 24px 24px 25px 25px;
  background-color: #32c5ff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`

export const CompletedTagImage = styled.Image`
  width: 30px;
  height: 30px;
`