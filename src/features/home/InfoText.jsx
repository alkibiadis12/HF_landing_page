import styled, { css } from "styled-components";
import { devices } from "../../styles/breakpoints";

//STYLED COMPONENTS
//=======================================
const StyledInfoText = styled.section`
  background-image: url("./img/purplebkg.jpg");
  background-repeat: repeat-x;
  background-size: contain;
  height: 581px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5rem;
  margin-top: -10px;
  @media (${devices.laptopL}) {
    background-image: none;
    background-color: #0b001b;
    justify-content: flex-start;
    padding-top: 5rem;
    height: 56rem;
  }
  @media (${devices.xl}) {
    height: 56.2rem;
  }
  @media (${devices.md}) {
    height: 75rem;
  }
  @media (${devices.sm}) {
    padding-top: 3rem;
    height: 55rem;
  }
  @media (${devices.xs}) {
    height: 54rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;
  color: white;
  @media (${devices.md}) {
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
  }
`;

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

const H2 = styled.h2`
  font-size: 2rem;
  @media (${devices.sm}) {
    font-size: 1.2rem;
  }
`;

const Span = styled.span`
  display: block;
`;

const H6 = styled.h6`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-red-600);
  @media (${devices.sm}) {
    font-size: 1rem;
  }
`;

const P = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: -20px;
  width: 37rem;
  @media (${devices.sm}) {
    font-size: 1rem;
  }
  @media (${devices.sm}) {
    width: 25rem;
  }
`;

const Image = styled.img`
  @media (${devices.md}) {
    width: 20rem;
  }
  @media (${devices.sm}) {
    width: 15rem;
  }
`;
//=======================================

const InfoText = () => {
  return (
    <StyledInfoText>
      <Container>
        <Image src="./img/apps.png" alt="apps-picture" />
        <Column $flex_start="true">
          <H2>
            What is Lorem Ipsum? <Span>Lorem Ipsum is simply dummy</Span>
          </H2>
          <Column $gap="2rem">
            <H6>Lorem Ipsum passages</H6>
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              corrupti obcaecati, accusamus earum dicta voluptatum, esse
              quibusdam voluptates
            </P>
          </Column>
          <Column $gap="2rem">
            <H6>Lorem Ipsum passages</H6>
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              corrupti obcaecati, accusamus earum dicta voluptatum, esse
              quibusdam voluptates
            </P>
          </Column>
          <Column $gap="2rem">
            <H6>Lorem Ipsum passages</H6>
            <P>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              corrupti obcaecati, accusamus earum dicta voluptatum, esse
              quibusdam voluptates
            </P>
          </Column>
        </Column>
      </Container>
    </StyledInfoText>
  );
};

export default InfoText;
