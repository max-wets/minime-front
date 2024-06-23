import styled from 'styled-components';
import { color, spacing } from '../Theme/theme';

export const HeaderWrapper = styled.div`
  z-index: 3;
  padding: 8px;
  position: sticky;
`;

export const HeaderBackground = styled.header`
  background: ${color('header.background.color')};
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: 'collections logo navigation';
  grid-template-columns: 1fr auto 1fr;
  column-gap: 2rem;
`;

export const CollectionLinksRow = styled.nav`
  grid-area: collections;
`;

export const NavigationLinksRow = styled.nav`
  grid-area: navigation;
  display: flex;
  justify-self: end;
`;

export const NavigationMenuList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: ${spacing('3xs')};
  text-transform: uppercase;
  padding: 1.3rem 1.2rem 0.7rem;
  text-decoration: none;
`;
