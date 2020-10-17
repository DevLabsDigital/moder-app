import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const DeliveryStatusContainer = styled.View`
  padding: 10px;
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