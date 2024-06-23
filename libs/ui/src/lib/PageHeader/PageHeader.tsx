import React from 'react';

import { HeaderWrapper, HeaderBackground, Layout } from './styles';

export const PageHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderBackground>
        <Layout></Layout>
      </HeaderBackground>
    </HeaderWrapper>
  );
};
