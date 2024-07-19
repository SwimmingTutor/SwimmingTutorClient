import React from 'react';
import Menu from '../Menu.jsx';

const levels = [
  {
    key: 'freecrawl',
    name: '자유형',
    level: '-'
  },
  {
    key: 'backstroke',
    name: '배영',
    level: '-'
  },
  {
    key: 'breathstroke',
    name: '평영',
    level: '-'
  },
  {
    key: 'butterfly',
    name: '접영',
    level: '-'
  }
];

const LEVEL_ELEMENT_INFO = levels.map(item => ({
  key: item.key,
  name: `${item.name} / ${item.level}`,
  path: `/my/level/test/${item.key}`
}));

const LevelList = () => {
  return (
    <div className='flex h-fit w-full flex-col gap-3 text-[0.9rem] font-light'>
      {LEVEL_ELEMENT_INFO.map(item => (
        <Menu key={item.key} name={item.name} path={item.path} />
      ))}
    </div>
  );
};

export default LevelList;
