import React from 'react';

import {
  HeaderWrapper,
  HeaderBackground,
  Layout,
  CollectionLinksRow,
  LogoLinkItem,
  NavigationLinksRow,
  Logo,
  NavigationMenuList,
  NavigationMenuItem,
} from './styles';

const collectionItems = [{ label: 'CLOTHING' }];
const navigationItems = [
  { label: 'SEARCH' },
  { label: 'ABOUT' },
  { label: 'ACCOUNT' },
  { label: 'CART' },
];

export const PageHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderBackground>
        <Layout>
          <CollectionLinksRow>
            <NavigationMenuList>
              {collectionItems.map(({ label }) => (
                <li key={label}>
                  <NavigationMenuItem>
                    <span>{label}</span>
                  </NavigationMenuItem>
                </li>
              ))}
            </NavigationMenuList>
          </CollectionLinksRow>
          <LogoLinkItem href="/">
            <Logo />
          </LogoLinkItem>
          <NavigationLinksRow>
            <NavigationMenuList>
              {navigationItems.map(({ label }) => (
                <li key={label}>
                  <NavigationMenuItem>
                    <span>{label}</span>
                  </NavigationMenuItem>
                </li>
              ))}
            </NavigationMenuList>
          </NavigationLinksRow>
        </Layout>
      </HeaderBackground>
    </HeaderWrapper>
  );
};
