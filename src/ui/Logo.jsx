import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { devices } from "../styles/breakpoints";

//STYLED COMPONENTS
//================================

const Image = styled.img`
  width: 195px;
  margin: 1rem 0;
  cursor: pointer;

  @media (${devices.sm}) {
    width: 100px;
  }
`;

//================================

export default function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return <Image src="./img/HFLOGO.png" alt="hf-logo" onClick={handleClick} />;
}
