import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;

  @media screen and (min-width: 1020px) {
    height: 80px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const MenuWrap = styled.div`
  display: flex;
`;

export const MenuBarWrap = styled.div`
  svg {
    width: 22px;
    height: 100%;
    display: block;
    fill: inherit;
    flex-shrink: 0;
    user-select: auto;
  }
  @media screen and (min-width: 1020px) {
    display: none;
  }
`;
