import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.width
      ? css`
          width: ${props.width};
        `
      : css`
          min-width: 28rem;
        `}
  border: 1px solid var(--color-grey-400);
  background-color: var(--color-grey-0);

  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);

  &:focus {
    outline: 2px solid var(--color-grey-500);
  }
`;

export default Input;
