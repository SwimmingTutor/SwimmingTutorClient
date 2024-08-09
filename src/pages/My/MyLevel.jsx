import PageTitle from '../../components/PageTitle.jsx';
import PageInfoText from '../../components/PageInfoText.jsx';
import LevelList from '../../components/My/LevelList.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';
import BLANKDIV from '../../constants/blankDiv.js';

const MyLevelPage = () => {
  usePageSetup('level');
  // console.log('MyLevelPage');
  return (
    <div className='px-7'>
      <PageTitle title='내 수영 레벨' />
      {BLANKDIV[2]}
      <p style={{'font-size': 'small'}}>
        <b>'영법/레벨'</b> 클릭 시 레벨 테스트 페이지로 이동합니다.
      </p>
      {BLANKDIV[3]}
      <LevelList />
    </div>
  );
};

export default MyLevelPage;
