import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle.jsx';
import Steps from '../../components/UI/Steps.jsx';
import PageInfoText from '../../components/PageInfoText.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';

const LevelTestPage = () => {
  const param = useParams();
  // console.log(1, param);
  usePageSetup('level-test');

  const [currentStep, setCurrentStep] = useState(1);

  const blankDiv = <div className='h-10'></div>;
  const steps = ['speed', 'distance', 'technique'];

  const pageDescriptions = {
    speed: '속도 테스트를 수행합니다.',
    distance: '거리 테스트를 수행합니다.',
    technique: '기술 테스트를 수행합니다.'
  };

  const contentForStep = step => {
    switch (step) {
      case 1:
        return pageDescriptions.speed;
      case 2:
        return pageDescriptions.distance;
      case 3:
        return pageDescriptions.technique;
      default:
        return '해당 단계 정보가 없습니다.';
    }
  };

  const translateStrokeName = strokename => {
    // console.log(2, strokename);
    switch (strokename) {
      case 'freecrawl':
        return '자유형';
      case 'backstroke':
        return '배영';
      case 'breathstroke':
        return '평영';
      case 'butterfly':
        return '접영';
    }
  };
  const strokenameKr = translateStrokeName(param.strokename);

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // TODO: 영법 및 테스트 주제별 설문내용 구현
  return (
    <>
      <PageTitle title={`수영 레벨 테스트 - ${strokenameKr}`} />
      <PageInfoText content={contentForStep(currentStep)} />
      {blankDiv}
      <Steps key={currentStep} steps={[null, null, null]} currentStep={currentStep} />
      <div className='mt-4 flex justify-between'>
        <button onClick={handlePreviousStep} disabled={currentStep == 1} />
        <button onClick={handleNextStep} disabled={currentStep == steps.length} />
      </div>
    </>
  );
};

export default LevelTestPage;