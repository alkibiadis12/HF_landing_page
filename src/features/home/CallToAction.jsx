import styled, { css } from "styled-components";
import Column from "../../ui/Column";
import AppStoreIcon from "../../ui/AppStoreIcon";
import GooglePlayIcon from "../../ui/GooglePlayIcon";

//STYLED COMPONENTS
//=======================================

const StyledCallToAction = styled.section`
  max-width: 120rem;
  margin: 7rem auto 8rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const StoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const P = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--color-grey-800);
  margin-top: -20px;
`;

const Span = styled.span`
  display: block;
  text-align: center;
  ${(props) =>
    props.$bold &&
    css`
      color: var(--color-grey-700);
      font-weight: 600;
      font-size: 1.9rem;
    `}
`;

//=======================================

const CallToAction = () => {
  return (
    <StyledCallToAction>
      <Column>
        <P>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          <Span>
            It has roots in a piece of classical Latin literature from 45 BC,
          </Span>
          <Span>making it over 2000 year old.</Span>
          <Span $bold="true">DOWNLOAD IT NOW!</Span>
        </P>
        <StoreContainer>
          <GooglePlayIcon />
          <AppStoreIcon />
        </StoreContainer>
      </Column>
    </StyledCallToAction>
  );
};

export default CallToAction;
