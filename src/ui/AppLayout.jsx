import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

//STYLED COMPONENTS
//================================

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

//================================

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledAppLayout>
  );
}
