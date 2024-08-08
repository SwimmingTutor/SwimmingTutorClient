import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { customAxios } from '../../utils/https/axios/customAxios';
import PageTitle from '../../components/PageTitle.jsx';
import Steps from '../../components/UI/Steps.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';
import Button from '../../components/UI/Button.jsx';
import TestForm from '../../components/My/TestForm.jsx';
import SWIMTERMS from '../../constants/swimTerms.js';
import { fastApiAxios } from '../../utils/https/axios/customAxios';
import BLANKDIV from '../../constants/blankDiv.js';

const LevelTestPage = () => {
  const param = useParams();
  usePageSetup('level-test');

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedValues, setSelectedValues] = useState([0, 0, 0]);
  // console.log('selectedValues:', selectedValues);

  const steps = ['distance', 'speed', 'technique'];

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = async () => {
    if (selectedValues[currentStep - 1] == 0 || selectedValues[currentStep - 1] == undefined) {
      alert('값을 선택해주세요 😅');
      return;
    }
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      return;
    }
    // Request to the server with customAxios
    try {
      const strokeNames = SWIMTERMS;
      const strokeName = strokeNames.find(stroke => stroke.key === param.strokename)?.name;

      if (currentStep != steps.length) {
        await customAxios.post('/level/log', {
          style: strokeName,
          distance: selectedValues[0],
          speed: selectedValues[1],
          technique: selectedValues[2]
        });
      } else {
        await fastApiAxios.post('/lvtest', {
          style: strokeName,
          distance: selectedValues[0],
          speed: selectedValues[1],
          technique: selectedValues[2]
        });
      }

      // Redirect to /my/level page
      window.location.href = '/my/level';
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleOptionSelect = value => {
    const updatedSelectedValues = [...selectedValues];
    updatedSelectedValues[currentStep - 1] = value;
    setSelectedValues(updatedSelectedValues);
    // console.log('updatedSelectedValues:', updatedSelectedValues);
  };

  return (
    <div className='px-7'>
      <PageTitle title={`수영 레벨 테스트`} />
      {BLANKDIV[5]}
      <Steps key={currentStep} steps={steps} currentStep={currentStep} />
      {BLANKDIV[2]}
      <TestForm
        strokename={param.strokename}
        currentStep={currentStep}
        onOptionSelect={handleOptionSelect}
        selectedValues={selectedValues}
      />
      {BLANKDIV[2]}
      <div className='mt-4 flex justify-between'>
        {/* <Button
          key='prev'
          onClick={handlePreviousStep}
          content='이전'
          type={currentStep === 1 ? 'disable' : 'default'}
        /> */}
        <Button key='next' onClick={handleNextStep} content={currentStep === steps.length ? '결과확인' : '다음'} />
      </div>
    </div>
  );
};

export default LevelTestPage;
