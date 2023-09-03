import styled from "styled-components";
import { GoTrophy } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGooglePlusSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";

//STYLED COMPONENTS
//============================================

const StyledSocial = styled.div`
  background-color: #202020;
`;

const Container = styled.div`
  max-width: 120rem;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Span = styled.span`
  display: block;
  font-size: 1.8rem;
  color: var(--color-grey-300);
`;

//============================================

const Social = () => {
  return (
    <StyledSocial>
      <Container>
        <Div>
          <GoTrophy color="#b91c1c" size="2rem" />
          <Span>Winner of 19 Industry Awards</Span>
        </Div>
        <Div>
          <a
            href="https://www.facebook.com/hotforex.broker.3/"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebookOption color="white" size="2.5rem" />
          </a>
          <a
            href=" https://twitter.com/hfmbroker?lang=el"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare color="white" size="2.5rem" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <AiFillGooglePlusSquare color="white" size="2.5rem" />
          </a>
          <a
            href="https://www.linkedin.com/company/hf-markets/?originalSubdomain=cy"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin color="white" size="2.5rem" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCpDk2sR2Lac7jZPLcxH-x0w"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube color="white" size="2.5rem" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <ImStatsDots color="white" size="2.5rem" />
          </a>
        </Div>
      </Container>
    </StyledSocial>
  );
};

export default Social;
