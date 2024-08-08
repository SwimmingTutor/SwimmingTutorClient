import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PageTitle from '../../components/PageTitle.jsx';
import PageInfoText from '../../components/PageInfoText.jsx';
import CenterWrapper from '../../components/Layout/CenterWrapper.jsx';
import Button from '../../components/UI/Button.jsx';


const LevelTestResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <div className='container mx-auto'>
      <PageTitle title='테스트 결과' />
      {data ? (
        <CenterWrapper>
          <PageInfoText title={`${data.level}`} content={`${data.description}`} />
          <div className='h-14' />
          <Button content='확인' onClick={() => navigate('/my/level')} />
        </CenterWrapper>
      ) : (
        <p className='text-center'>결과 데이터를 불러오는 중입니다...</p>
      )}
    </div>
  );
};

export default LevelTestResult;
