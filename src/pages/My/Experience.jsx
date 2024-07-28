import CenterWrapper from '../../components/Layout/CenterWrapper.jsx';
import OAuthHeader from '../../components/OAuthHeader.jsx';
import Button from '../../components/UI/Button.jsx';
import SelectBox from '../../components/UI/SelectBox.jsx';
import Nav from '../../components/Nav.jsx';

const onClick = () => {};

const strokeOptions = ['자유형', '배영', '평영', '접영'];
const purposeOptions = ['다이어트', '근력 강화', '건강 증진', '재활'];

// TODO: 로그인시 헤더 '로그아웃' 노출
const ExperiencePage = () => {
  const handleStrokeChange = value => {
    console.log('Selected Stroke:', value);
  };

  const blankDiv1 = <div className='h-7'></div>;
  const blankDiv2 = <div className='h-14'></div>;
  const blankDiv3 = <div className='h-20'></div>;
  return (
    <>
      <OAuthHeader headerType='experience' off='true' />
      <div className='px-7'>
        {blankDiv2}
        <SelectBox label='선호 영법' selectOption={strokeOptions} onChange={handleStrokeChange}></SelectBox>
        {blankDiv1}
        <SelectBox label='주요 목표' selectOption={purposeOptions}></SelectBox>
        {blankDiv3}
        <Button content='완료'></Button>
      </div>
      {/* TODO: login시에만 Nav 노출 */}
      <Nav></Nav>
    </>
  );
};
export default ExperiencePage;
