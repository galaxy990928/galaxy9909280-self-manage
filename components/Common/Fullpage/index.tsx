import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

interface IProps {
  children: React.ReactElement;
}

const Fullpage = ({ children }: IProps) => (
  <ReactFullpage
    scrollingSpeed={1000}
    render={() => <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>}
  />
);

export default Fullpage;
