import styled from "styled-components";

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: var(--color-red-600);
  color: var(--color-grey-0);
  font-weight: 600;
  height: 41px;
  width: 26rem;

  &:hover {
    background-color: var(--color-red-700);
  }

  &:focus {
    outline: 2px solid var(--color-grey-500);
  }
`;

export default Button;
