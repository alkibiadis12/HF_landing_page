import styled from "styled-components";
import { devices } from "../styles/breakpoints";

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

  @media (${devices.xl}) {
    margin-top: 8rem;
  }

  @media (${devices.sm}) {
    margin-top: 6rem;
  }
`;

export default Button;
