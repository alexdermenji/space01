import styled from 'styled-components';

const StyledButton = styled.button`
  width: 150px;
  background-color: black;
  border-radius: 10px;
  font-size: 25px;
  color: white;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
