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

export default function AppStoreIcon() {
  return (
    <a
      href="https://apps.apple.com/ng/app/hfm-online-trading/id1097517968"
      target="_blank"
      rel="noreferrer"
    >
      <Image src="./img/appstore.png" alt="appstore-icon" />
    </a>
  );
}
