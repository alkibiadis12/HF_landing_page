import styled from "styled-components";
import GooglePlayIcon from "../../ui/GooglePlayIcon";
import AppStoreIcon from "../../ui/AppStoreIcon";
import { devices } from "../../styles/breakpoints";

//STYLED COMPONENTS
//================================

const StyledHero = styled.section`
  background-image: url("./img/bkg.jpg");
  background-repeat: repeat-x;
  background-size: contain;
  height: 35.9rem;
  @media (${devices.laptopL}) {
    background-image: none;
    background-color: #0b001b;
    height: 35.8rem;
  }
  @media (${devices.xl}) {
    height: 39.5rem;
  }
  @media (${devices.md}) {
    height: 56.8rem;
  }

  @media (${devices.sm}) {
    height: 41rem;
  }
  @media (${devices.mobileL}) {
    height: 39.5rem;
  }
  @media (${devices.xs}) {
    height: 41rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  gap: 5.5rem;
  @media (${devices.xl}) {
    gap: 1rem;
    padding: 0 4rem;
  }
  @media (${devices.md}) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
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
  @media (${devices.xl}) {
    font-size: 3.6rem;
  }
  @media (${devices.sm}) {
    font-size: 2.4rem;
  }
`;

const Span = styled.span`
  display: block;
  color: var(--color-grey-100);
  font-size: 3.6rem;
  margin-top: -0.7rem;
  @media (${devices.xl}) {
    font-size: 3.2rem;
  }
  @media (${devices.sm}) {
    font-size: 2rem;
    margin-top: -0.4rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StoreIconsContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 2rem;
  @media (${devices.sm}) {
    justify-content: center;
  }
`;

const MobileImage = styled.img`
  height: 35.2rem;
  margin-top: 6px;
  margin-right: -5rem;
  @media (${devices.xl}) {
    height: 25rem;
    margin-right: 0;
    align-self: flex-end;
  }
  @media (${devices.md}) {
    height: 20rem;
    margin-right: 0;
    margin-top: 1px;
    align-self: center;
  }
  @media (${devices.sm}) {
    height: 13.8rem;
  }
`;

const P = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.1px;
  @media (${devices.sm}) {
    font-size: 1rem;
  }
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
