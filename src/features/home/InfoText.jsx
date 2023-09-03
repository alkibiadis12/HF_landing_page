import styled from "styled-components";
import Column from "../../ui/Column";

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
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;
  color: white;
`;

const H2 = styled.h2`
  font-size: 2rem;
`;

const Span = styled.span`
  display: block;
`;

const H6 = styled.h6`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-red-600);
`;

const P = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: -20px;
  width: 37rem;
`;

const Image = styled.img`
  margin-bottom: 5px;
`;
//=======================================

const InfoText = () => {
  return (
    <StyledInfoText>
      <Container>
        <Image
          src="./img/apps.png"
          width="546px"
          height="513px"
          alt="apps-picture"
        />
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
