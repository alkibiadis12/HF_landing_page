import styled, { css } from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.$gap
      ? css`
          gap: ${props.$gap};
        `
      : css`
          gap: 3rem;
        `}

  ${(props) =>
    props.$flex_start &&
    css`
      align-self: flex-start;
    `}
`;

export default Column;
