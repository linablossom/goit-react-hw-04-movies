import styled from "styled-components";

export const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  .navList {
    display: flex;
  }

  .navItem {
  }

  .navItem + .navItem {
    margin-left: 20px;
  }

  .activeNavLink {
    color: white;
  }
`;
