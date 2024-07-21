import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle.jsx';
import Steps from '../../components/UI/Steps.jsx';
import PageInfoText from '../../components/PageInfoText.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';
import Button from '../../components/UI/Button.jsx';
import TestForm from '../../components/My/TestForm.jsx';

const LevelTestPage = () => {
  const param = useParams();
  // console.log(1, param);
  usePageSetup('level-test');

  const [currentStep, setCurrentStep] = useState(1);
  
  const blankDiv3 = <div className='h-3'></div>;
  const blankDiv5 = <div className='h-5'></div>;
  const steps = ['speed', 'distance', 'technique'];

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
  
  const pageDescriptions = {
    speed: `${strokenameKr}으로 50m 완주 시 소요되는 시간을 선택해주세요.`,
    distance: `50분 동안 ${strokenameKr}으로 완주할 수 있는 거리를 선택해주세요.`,
    technique: `${strokenameKr} 기술적인 부분 중 본인이 가장 최근에 배운 것을 선택해주세요.`
  };

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
      {blankDiv5}
      <Steps key={currentStep} steps={[null, null, null]} currentStep={currentStep} />
      {blankDiv3}
      <PageInfoText content={contentForStep(currentStep)} />
      <TestForm />
      <div className='mt-4 flex justify-between'>
        {/* <button onClick={handlePreviousStep} disabled={currentStep == 1} />
        <button onClick={handleNextStep} disabled={currentStep == steps.length} /> */}
        <Button
          key='prev'
          path={handlePreviousStep}
          content='이전'
          type={currentStep == 1 ? 'disable' : 'default'}
        />
        <Button
          key='next'
          path={handleNextStep}
          content='다음'
          type={currentStep == steps.length ? 'disable' : 'default'}
        />
      </div>
    </>
  );
};

export default LevelTestPage;
