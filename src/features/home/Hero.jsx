import styled from "styled-components";
import GooglePlayIcon from "../../ui/GooglePlayIcon";
import AppStoreIcon from "../../ui/AppStoreIcon";

//STYLED COMPONENTS
//================================

const StyledHero = styled.section`
  background-image: url("./img/bkg.jpg");
  background-repeat: repeat-x;
  background-size: contain;
  height: 359px;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  gap: 5.5rem;
`;

const TitleInfoIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--color-grey-0);
  margin-top: 4rem;
`;

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: lighter;
`;

const Span = styled.span`
  display: block;
  color: var(--color-grey-100);
  font-size: 3.6rem;
  margin-top: -0.7rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.3rem;
`;

const StoreIconsContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 2rem;
`;

const MobileImage = styled.img`
  height: 352px;
  margin-top: 4px;
  margin-right: -5rem;
`;

const P = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.1px;
`;
//================================

function Hero() {
  return (
    <StyledHero>
      <Container>
        <TitleInfoIconsContainer>
          <H1>
            HotForex App <Span>Your Indispensable Tool</Span>
          </H1>

          <TextContainer>
            <P>- Lorem ipsum dolor sit amet consectetur adipisicing. </P>
            <P>- Soluta omnis placeat sunt quam officia consequuntur</P>
            <P>- eaque totam id tempora repudiandae tenetur</P>
          </TextContainer>
          <StoreIconsContainer>
            <GooglePlayIcon />
            <AppStoreIcon />
          </StoreIconsContainer>
        </TitleInfoIconsContainer>
        <MobileImage src="./img/mobile.png" alt="mobile-icon" />
      </Container>
    </StyledHero>
  );
}

export default Hero;
