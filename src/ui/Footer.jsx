import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Column from "./Column";
import Social from "./Social";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";
import { devices } from "../styles/breakpoints";
import { useMediaQuery } from "@uidotdev/usehooks";

//STYLED COMPONENTS
//============================================
const BackgroundColor = styled.div`
  background-color: #181818;
`;

const Container = styled.div`
  max-width: 120rem;
  height: 20rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 4rem;
  padding-bottom: 18rem;
  @media (${devices.xl}) {
    padding: 4rem 4rem 20rem 4rem;
  }
  @media (${devices.md}) {
    padding: 4rem 0 18rem 0;
    height: 60rem;
    gap: 5rem;
    margin-left: 7rem;
  }
  @media (${devices.sm}) {
    height: 45rem;
    flex-direction: column;
    gap: 3rem;
    margin-left: 7rem;
  }
  @media (${devices.mobileL}) {
    height: 55rem;
  }
`;

const H6 = styled.h6`
  font-size: 1.4rem;
  color: var(--color-grey-300);
  @media (${devices.sm}) {
    font-size: 1.2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  margin-right: 4rem;
  @media (${devices.xl}) {
    gap: 2rem;
  }
  @media (${devices.md}) {
    flex-wrap: wrap;
    gap: 3.5rem;
  }
`;

const FlexLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.4rem;
  color: var(--color-grey-300);
  @media (${devices.sm}) {
    font-size: 1rem;
    gap: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-grey-300);
    font-size: 1.4rem;
    transition: all 0.3s;
    @media (${devices.sm}) {
      font-size: 0.8rem;
    }
  }

  &:hover {
    color: var(--color-red-700);
    border-radius: var(--border-radius-sm);
  }
`;
//============================================

const Footer = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isXSDevice = useMediaQuery("only screen and (max-width : 320px)");

  return (
    <footer>
      <Social />
      <BackgroundColor>
        <Container>
          <Column $gap={isSmallDevice ? "1rem" : "1.5rem"}>
            <H6>CONTACT US</H6>
            <Column $gap={isSmallDevice ? "1rem" : "1.5rem"}>
              <FlexLink href="mailto:support@hfeu.com<">
                <AiOutlineMail
                  color="#b91c1c"
                  size={isSmallDevice ? "1.5rem" : "2rem"}
                />{" "}
                <span>support@hfeu.com</span>
              </FlexLink>

              <FlexLink href="tel:357-24-400165">
                <AiOutlinePhone
                  color="#b91c1c"
                  size={isSmallDevice ? "1.5rem" : "2rem"}
                />
                <span> +357-24-400165</span>
              </FlexLink>

              <FlexLink href="#">
                <AiOutlineMessage
                  color="#b91c1c"
                  size={isSmallDevice ? "1.5rem" : "2rem"}
                />{" "}
                <span>Live Chat</span>
              </FlexLink>
            </Column>
          </Column>
          <FlexContainer>
            <Column $gap="1rem">
              <H6>ABOUT</H6>
              <Column
                $gap="0.2rem"
                $mr={isSmallDevice && !isXSDevice ? "3rem" : ""}
              >
                <StyledNavLink to="/about">About HotForex</StyledNavLink>
                <StyledNavLink to="/about">Why HotForex</StyledNavLink>
                <StyledNavLink to="/about">
                  Regulation and License
                </StyledNavLink>
                <StyledNavLink to="/about">Securiy of Funds</StyledNavLink>
                <StyledNavLink to="/about">Awards</StyledNavLink>
              </Column>
            </Column>
            <Column $gap="1rem">
              <H6>PRODUCTS</H6>
              <Column $gap="0.2rem">
                <StyledNavLink to="/products">About</StyledNavLink>
                <StyledNavLink to="/products">Metals and 0il</StyledNavLink>
                <StyledNavLink to="/products">Indices</StyledNavLink>
                <StyledNavLink to="/products">Shares</StyledNavLink>
                <StyledNavLink to="/products">Commodity CFDs</StyledNavLink>
              </Column>
            </Column>
            <Column
              $gap="1rem"
              $mr={
                isSmallDevice && !isXSDevice
                  ? "4.5rem"
                  : isXSDevice
                  ? "1.5rem"
                  : ""
              }
            >
              <H6>TRADING</H6>
              <Column $gap="0.2rem">
                <StyledNavLink to="/tools">Trading Tools</StyledNavLink>
                <StyledNavLink to="/tools">Forex Education</StyledNavLink>
                <StyledNavLink to="/tools">Platforms</StyledNavLink>
                <StyledNavLink to="/tools">Account Types</StyledNavLink>
                <StyledNavLink to="/tools">Exclusive Analysis</StyledNavLink>
              </Column>
            </Column>
            <Column $gap="1rem">
              <H6>PROMOTIONS</H6>
              <Column $gap="0.2rem">
                <StyledNavLink to="/platforms">Loyalty Program</StyledNavLink>
                <StyledNavLink to="/platforms">Bonus Offerings</StyledNavLink>
                <StyledNavLink to="/platforms">
                  Contests & Rewards
                </StyledNavLink>
                <StyledNavLink to="/platforms">Free Funding</StyledNavLink>
                <StyledNavLink to="/platforms">Deposit</StyledNavLink>
              </Column>
            </Column>
            <Column $gap="1rem">
              <H6>AFFILIATES</H6>
              <Column $gap="0.2rem">
                <StyledNavLink to="/education">Affiliates</StyledNavLink>
                <StyledNavLink to="/education">
                  About HF Affiliates
                </StyledNavLink>
                <StyledNavLink to="/education">Affiliate Types</StyledNavLink>
                <StyledNavLink to="/education">Marketing Tools</StyledNavLink>
                <StyledNavLink to="/education">Analytics</StyledNavLink>
              </Column>
            </Column>
          </FlexContainer>
        </Container>
      </BackgroundColor>
    </footer>
  );
};

export default Footer;
