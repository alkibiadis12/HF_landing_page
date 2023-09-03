import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi2";

const Nav = styled.nav`
  align-self: flex-end;
`;

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    /* gap: 0.5rem; */

    color: var(--color-grey-0);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1.2rem 0.5rem;
    transition: all 0.3s;
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
    color: var(--color-red-700);
  }
`;

export default function MainNav() {
  return (
    <Nav>
      <NavList>
        <li>
          <StyledNavLink to="/home">
            <HiOutlineHome />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">ABOUT</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">PRODUCTS</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/accounts">ACCOUNTS</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/platforms">PLATFORMS</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/tools">TOOLS</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/education">EDUCATION</StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
}
