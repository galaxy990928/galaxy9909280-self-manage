import styled from 'styled-components';

interface ISubMenWrapProps {
  isShown: boolean;
}

export const MenuListWrap = styled.div`
  padding: 0 10px;
  .down {
    font-size: 10px;
    margin-left: 3px;
    position: relative;
    top: -2px;
  }
`;

export const TitleWrap = styled.div`
  cursor: pointer;
`;

export const SubMenuWrap = styled.div<ISubMenWrapProps>`
  display: ${(props) => (props.isShown ? 'block' : 'none')};
  position: absolute;
  left: -50%;
  background-color: white;
  box-shadow: rgb(15 15 15 / 5%) 0px 0px 0px 1px,
    rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px;
`;

export const SubTitleWrap = styled.div`
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;
  padding: 0.25em 15px;
  cursor: pointer;
`;

export const MenuUlWrap = styled.ul`
  list-style: none;
  & > li {
    text-indent: none;
  }
`;

export const MenuNameWrap = styled.li`
  padding: 0.25em 25px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
`;
