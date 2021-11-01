import React, { MouseEventHandler } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { IMenuList } from '@utils/Content/Header/MenuLists';
import {
  MenuListWrap,
  TitleWrap,
  SubTitleWrap,
  SubMenuWrap,
  MenuUlWrap,
  MenuNameWrap,
} from './styles';

interface IProps {
  content: IMenuList;
  isShown: boolean;
  onMouseOver: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
}

const MenuList = ({
  content,
  isShown,
  onMouseOver,
  onMouseLeave,
}: IProps): React.ReactElement => (
  <MenuListWrap>
    <TitleWrap onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {content.title}
      {content.lists && (
        <span className="down">
          <DownOutlined />
        </span>
      )}
    </TitleWrap>
    <SubMenuWrap isShown={isShown}>
      {content.lists &&
        content.lists.map((list) => (
          <div key={list.id}>
            {list.title && <SubTitleWrap>{list.title}</SubTitleWrap>}
            <MenuUlWrap>
              {list.contents.map((menuName) => (
                <MenuNameWrap>{menuName}</MenuNameWrap>
              ))}
            </MenuUlWrap>
          </div>
        ))}
    </SubMenuWrap>
  </MenuListWrap>
);

export default MenuList;
