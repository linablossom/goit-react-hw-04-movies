import styled from "styled-components";

export const MoviesListStyled = styled.ul`
  margin: 30px 40px;
  padding: 0;

  .homeListItem + .homeListItem {
    margin-top: 8px;
  }

  .homeListItem:hover,
  .activeHomeListLink {
    color: teal;
  }
`;
