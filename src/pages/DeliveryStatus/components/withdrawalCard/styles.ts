import styled from "styled-components/native";

export const Container = styled.View`
`;
export const TitleContainer = styled.View`
  flex-direction: row;
`;
export const CircleStatus = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  border-color: ${props => props.finished ? 'rgba(0, 0, 0, 0.25)' : '#00a2d9'};
  border-width: 1px;
  margin-right: 15px;
  background-color: ${props => props.finished ? '#979797' : 'white'}
`;
export const Label = styled.Text`
  font-size: 12px;
  color: ${props => props.finished ? 'rgba(0, 0, 0, 0.25)' : '#00a2d9'};
`;
export const DescriptionContainer = styled.View`
  border-left-width: 1px;
  border-left-color: #979797;
  padding: 5px 20px;
  margin: 5px;
`;
export const DescriptionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.finished ? 'rgba(0, 0, 0, 0.25)' : '#6d7278'};
  margin-bottom: 5px;
`;
export const AddressContainer = styled.View`
`;
export const Description = styled.Text`
  font-size: 14px;
  color: #6d7278;
`;
