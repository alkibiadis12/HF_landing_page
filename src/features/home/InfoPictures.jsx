import styled, { css } from "styled-components";
import Column from "../../ui/Column";

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
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const P = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-grey-900);
  margin-top: -20px;
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
`;

//=======================================

function InfoPictures() {
  return (
    <StyledInfoPictures>
      <H2>This is dummy text</H2>
      <Container>
        <Column>
          <Column $gap="0">
            <Image
              src="./img/icon1.png"
              alt="icon1"
              width="140px"
              height="140px"
              $flex_end="true"
              $margin_right="-10px"
            />
            <P>
              It is a long established{" "}
              <Span $text_align_end="true">fact that a reader</Span>
            </P>
          </Column>
          <Column $gap="0">
            <Image
              src="./img/icon2.png"
              alt="icon2"
              width="140px"
              height="140px"
              $flex_end="true"
              $margin_right="-25px"
            />
            <P>
              It is a long established{" "}
              <Span $text_align_end="true">fact that a reader</Span>
            </P>
          </Column>
        </Column>
        <Column>
          <img src="./img/2mob.png" alt="2mob" width="462px" height="680px" />
        </Column>
        <Column>
          <Column $gap="0">
            <Image
              src="./img/icon3.png"
              alt="icon3"
              width="140px"
              height="140px"
              $margin_left="-10px"
            />
            <P>
              The standard chunk <Span>of Lorem Ipsum</Span>
            </P>
          </Column>
          <Column $gap="0">
            <Image
              src="./img/icon4.png"
              alt="icon4"
              width="140px"
              height="140px"
              $margin_left="-20px"
            />
            <P>
              The standard chunk <Span>of Lorem Ipsum</Span>
            </P>
          </Column>
        </Column>
      </Container>
    </StyledInfoPictures>
  );
}

export default InfoPictures;
