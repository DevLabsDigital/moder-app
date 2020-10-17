import styled from "styled-components/native";

export const Container = styled.View`
  align-items: flex-end;
`;
export const TitleContainer = styled.View`
  flex-direction: row;
`;
export const CircleStatus = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  border-width: 1px;
  margin-left: 15px;
  background-color: ${props => props.finished ? '#979797' : '#b620e0'}
`;
export const Label = styled.Text`
  font-size: 12px;
  color: ${props => props.finished ? 'rgba(0, 0, 0, 0.25)' : '#b620e0'};
`;
export const DescriptionContainer = styled.View`
  align-items: flex-end;
  border-right-width: 1px;
  border-right-color: #979797;
  padding: 5px 20px;
  margin: 5px;
`;
export const DescriptionCity = styled.Text`
  font-size: 12px;
  color: ${props => props.finished ? 'rgba(0, 0, 0, 0.25)' : '#6d7278'};
  margin-bottom: 5px;
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
