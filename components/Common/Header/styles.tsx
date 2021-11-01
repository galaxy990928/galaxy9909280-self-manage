import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 20px;

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
  width: 22px;
  height: 100%;
  display: block;

  @media screen and (min-width: 1020px) {
    display: none;
  }
`;
