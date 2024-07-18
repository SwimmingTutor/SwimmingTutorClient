import React from 'react';
import { LevelList } from '../../components/LevelList.jsx';
import { PageTitle } from '../../components/PageTitle.jsx';
import { PageInfoText } from '../../components/PageInfoText.jsx';

const blankDiv = <div className='h-7'></div>;

export const MyLevelPage = () => {
  return (
    <>
      <PageTitle title='내 수영 레벨' />
      <PageInfoText content='클릭 시 레벨 테스트 페이지로 이동합니다.' />
      {blankDiv}
      <LevelList />
    </>
  );
};
