import styled from "styled-components";
import { devices } from "../styles/breakpoints";

//STYLED COMPONENTS
//====================
const Image = styled.img`
  height: 82px;
  @media (${devices.sm}) {
    height: 32px;
  }
`;

//====================

export default function GooglePlayIcon() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.hotforex.www.hotforex&hl=en_US&pli=1"
      target="_blank"
      rel="noreferrer"
    >
      <Image src="./img/googleplay.png" alt="googleplay-icon" />
    </a>
  );
}
