import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #f5f5f5;
  /* box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.24), 0 0 4px 0 rgba(0, 0, 0, 0.12); */
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
  align-items: center;
  margin-top: 24px;
  height: 80px;
  width: 100%;
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
`;
export const ContainerEnd = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Title = styled.Text`
  color: #000000;
  font-size: 20px;
  margin-left: 20px;
`;
