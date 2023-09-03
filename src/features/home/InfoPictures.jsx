import styled, { css } from "styled-components";
import { devices } from "../../styles/breakpoints";

//STYLED COMPONENTS
//=======================================
const StyledInfoPictures = styled.section`
  background-image: url("./img/greybkg.jpg");
  background-repeat: repeat-x;
  background-size: contain;
  height: 947px;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;

  @media (${devices.laptopL}) {
    background-image: none;
    background-color: #d6d6d6;
    margin-top: 3rem;
    justify-content: flex-start;
    padding-top: 3rem;
    height: 85rem;
  }

  @media (${devices.xl}) {
    height: 55rem;
  }

  @media (${devices.md}) {
    height: 45rem;
  }
  @media (${devices.sm}) {
    height: 35rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;
  @media (${devices.xl}) {
    gap: 5rem;
  }
  @media (${devices.sm}) {
    gap: 2rem;
  }
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  @media (${devices.sm}) {
    font-size: 1.2rem;
    margin-top: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (${devices.xl}) {
    gap: 5px;
  }
`;

const P = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-grey-900);
  margin-top: -20px;
  @media (${devices.sm}) {
    font-size: 0.8rem;
    margin-top: 0;
  }
`;

const Span = styled.span`
  display: block;
  ${(props) =>
    props.$text_align_end &&
    css`
      text-align: end;
    `}
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  ${(props) =>
    props.$flex_end &&
    css`
      align-self: flex-end;
    `}
  ${(props) =>
    props.$margin_left &&
    css`
      margin-left: ${props.$margin_left};
    `}
  ${(props) =>
    props.$margin_right &&
    css`
      margin-right: ${props.$margin_right};
    `}

    @media (${devices.xl}) {
    width: 100px;
    height: 100px;
  }

  @media (${devices.md}) {
    margin: 0;
    width: 80px;
    height: 80px;
  }
  @media (${devices.sm}) {
    margin: 0;
    width: 50px;
    height: 50px;
  }
`;

const PhoneImage = styled.img`
  @media (${devices.xl}) {
    height: 400px;
  }
  @media (${devices.md}) {
    height: 250px;
  }
  @media (${devices.sm}) {
    height: 170px;
  }
`;

//=======================================

function InfoPictures() {
  return (
    <StyledInfoPictures>
      <H2>This is dummy text</H2>
      <Container>
        <Column>
          <Div>
            <Image
              src="./img/icon1.png"
              alt="icon1"
              $flex_end="true"
              $margin_right="-10px"
            />
            <P>
              It is a long established{" "}
              <Span $text_align_end="true">fact that a reader</Span>
            </P>
          </Div>
          <Div>
            <Image
              src="./img/icon2.png"
              alt="icon2"
              $flex_end="true"
              $margin_right="-25px"
            />
            <P>
              It is a long established{" "}
              <Span $text_align_end="true">fact that a reader</Span>
            </P>
          </Div>
        </Column>
        <Column>
          <PhoneImage src="./img/2mob.png" alt="2mob" />
        </Column>
        <Column>
          <Div>
            <Image src="./img/icon3.png" alt="icon3" $margin_left="-10px" />
            <P>
              The standard chunk <Span>of Lorem Ipsum</Span>
            </P>
          </Div>
          <Div>
            <Image src="./img/icon4.png" alt="icon4" $margin_left="-20px" />
            <P>
              The standard chunk <Span>of Lorem Ipsum</Span>
            </P>
          </Div>
        </Column>
      </Container>
    </StyledInfoPictures>
  );
}

export default InfoPictures;
