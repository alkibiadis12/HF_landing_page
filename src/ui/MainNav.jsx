import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { devices } from "../styles/breakpoints";
import { useState } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import { useMediaQuery } from "@uidotdev/usehooks";

//STYLED COMPONENTS
//======================================================================

const Nav = styled.nav`
  align-self: flex-end;
  @media (${devices.md}) {
    align-self: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
  @media (${devices.md}) {
    display: none;
  }
`;

const HamburgerNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 1rem 2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;

    color: var(--color-grey-0);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1.2rem 0.5rem;
    transition: all 0.3s;
    @media (${devices.md}) {
      color: black;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-red-700);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    color: var(--color-grey-0);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-red-700) !important;
  }
`;

const MenuIcon = styled(GiHamburgerMenu)`
  display: none;
  color: var(--color-grey-0);
  @media (${devices.md}) {
    display: block;
  }
`;

//================================================================
//A HELPER FUNCTION

function Navigation({ handleClose }) {
  const isDeviceMedium = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <>
      <li>
        <StyledNavLink to="/home" onClick={handleClose ? handleClose : null}>
          <HiOutlineHome color={isDeviceMedium ? "black" : "white"} />
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/about" onClick={handleClose ? handleClose : null}>
          ABOUT
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to="/products"
          onClick={handleClose ? handleClose : null}
        >
          PRODUCTS
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to="/accounts"
          onClick={handleClose ? handleClose : null}
        >
          ACCOUNTS
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to="/platforms"
          onClick={handleClose ? handleClose : null}
        >
          PLATFORMS
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/tools" onClick={handleClose ? handleClose : null}>
          TOOLS
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to="/education"
          onClick={handleClose ? handleClose : null}
        >
          EDUCATION
        </StyledNavLink>
      </li>
    </>
  );
}

Navigation.propTypes = {
  handleClose: PropTypes.func,
};

//=======================================================================

export default function MainNav() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Nav>
      <MenuIcon size="2.5rem" onClick={openModal} />
      {modal && (
        <Modal onClose={closeModal}>
          <HamburgerNav>
            <Navigation handleClose={closeModal} />
          </HamburgerNav>
        </Modal>
      )}
      <NavList>
        <Navigation />
      </NavList>
    </Nav>
  );
}
