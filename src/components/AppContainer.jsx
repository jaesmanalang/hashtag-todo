import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px;
`;

function AppContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
export default AppContainer;
