import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: yellow;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.primary_red};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
