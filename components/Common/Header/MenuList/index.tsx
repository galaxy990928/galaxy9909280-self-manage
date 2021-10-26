import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { IMenuList } from '@utils/Content/Header/MenuLists';
import { TitleWrap, MenuUlWrap, MenuNameWrap } from './styles';

interface IProps {
  content: IMenuList;
}

const MenuList = ({ content }: IProps): React.ReactElement => (
  <div>
    <div>
      {content.title}
      <span>
        <DownOutlined />
      </span>
      <div>
        {content.lists &&
          content.lists.map((list) => (
            <div key={list.id}>
              {list.title && (
                <TitleWrap key={list.title}>{list.title}</TitleWrap>
              )}
              <MenuUlWrap>
                {list.contents.map((menuName) => (
                  <MenuNameWrap>{menuName}</MenuNameWrap>
                ))}
              </MenuUlWrap>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default MenuList;
