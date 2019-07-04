import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <StyledPage>
        <Meta />
        <Header />
        {children}
      </StyledPage>
    );
  }
}

export default Page;
