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
    title: '제품',
    lists: [
      {
        id: 1,
        contents: ['🏠 홈'],
      },
      {
        id: 2,
        contents: ['📘 팀 위키', '🎒 프로젝트와 작업', '🙏 메모와 문서'],
      },
      {
        id: 3,
        title: 'NOTION 이용대상',
        contents: ['팀', '기업', '원격 근무', '개인', '스타트업', '교육'],
      },
      {
        id: 4,
        title: '다른 앱에서 옮겨오기',
        contents: ['Evernote', 'Confluence'],
      },
    ],
  },
  {
    id: 2,
    title: '다운로드',
    lists: [
      {
        id: 1,
        contents: ['iOS와 Android', 'Mac과 Windows', 'Web Clipper'],
      },
    ],
  },
  {
    id: 3,
    title: '자료',
    lists: [
      {
        id: 1,
        contents: [
          '고객 스토리',
          '가이드와 튜토리얼',
          '도움말과 지원',
          '블로그',
          <div>
            API
            <span className="badge">베타</span>
          </div>,
        ],
      },
    ],
  },
  {
    id: 4,
    title: '요금제',
  },
  {
    id: 5,
    title: '커리어',
  },
] as IMenuList[];
