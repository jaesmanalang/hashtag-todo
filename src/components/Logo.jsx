import styled from 'styled-components';

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  padding: 2rem 0;
`;

function Logo() {
  return <StyledLogo>#todo</StyledLogo>;
}
export default Logo;
