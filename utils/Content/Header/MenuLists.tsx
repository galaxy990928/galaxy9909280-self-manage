import React from 'react';

export interface IList {
  id: number;
  title?: string;
  contents: (string | React.ReactElement)[];
}

export interface IMenuList {
  id: number;
  title: string;
  lists?: IList[];
}

export default [
  {
    id: 1,
    title: '์ ํ',
    lists: [
      {
        id: 1,
        contents: ['๐  ํ'],
      },
      {
        id: 2,
        contents: ['๐ ํ ์ํค', '๐ ํ๋ก์ ํธ์ ์์', '๐ ๋ฉ๋ชจ์ ๋ฌธ์'],
      },
      {
        id: 3,
        title: 'NOTION ์ด์ฉ๋์',
        contents: ['ํ', '๊ธฐ์', '์๊ฒฉ ๊ทผ๋ฌด', '๊ฐ์ธ', '์คํํธ์', '๊ต์ก'],
      },
      {
        id: 4,
        title: '๋ค๋ฅธ ์ฑ์์ ์ฎ๊ฒจ์ค๊ธฐ',
        contents: ['Evernote', 'Confluence'],
      },
    ],
  },
  {
    id: 2,
    title: '๋ค์ด๋ก๋',
    lists: [
      {
        id: 1,
        contents: ['iOS์ Android', 'Mac๊ณผ Windows', 'Web Clipper'],
      },
    ],
  },
  {
    id: 3,
    title: '์๋ฃ',
    lists: [
      {
        id: 1,
        contents: [
          '๊ณ ๊ฐ ์คํ ๋ฆฌ',
          '๊ฐ์ด๋์ ํํ ๋ฆฌ์ผ',
          '๋์๋ง๊ณผ ์ง์',
          '๋ธ๋ก๊ทธ',
          <div>
            API
            <span className="badge">๋ฒ ํ</span>
          </div>,
        ],
      },
    ],
  },
  {
    id: 4,
    title: '์๊ธ์ ',
  },
  {
    id: 5,
    title: '์ปค๋ฆฌ์ด',
  },
] as IMenuList[];
