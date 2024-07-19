import PageTitle from '../../components/PageTitle.jsx';
import PageInfoText from '../../components/PageInfoText.jsx';
import LevelList from '../../components/My/LevelList.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';

const blankDiv = <div className='h-7'></div>;

const MyLevelPage = () => {
  usePageSetup('level');
  // console.log('MyLevelPage');
  return (
    <>
      <PageTitle title='내 수영 레벨' />
      <PageInfoText content='클릭 시 레벨 테스트 페이지로 이동합니다.' />
      {blankDiv}
      <LevelList />
    </>
  );
};

export default MyLevelPage;
