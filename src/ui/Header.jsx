import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import { devices } from "../styles/breakpoints";

//STYLED COMPONENTS
//================================

const OuterContainer = styled.header`
  background-color: #000;
`;

const InnerContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${devices.xl}) {
    padding: 0 3rem;
  }
`;

//================================

export default function Header() {
  return (
    <OuterContainer>
      <InnerContainer>
        <Logo />
        <MainNav />
      </InnerContainer>
    </OuterContainer>
  );
}
