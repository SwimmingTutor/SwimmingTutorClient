import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../utils/https/axios/customAxios';
import PageTitle from '../../components/PageTitle.jsx';
import Steps from '../../components/UI/Steps.jsx';
import PageInfoText from '../../components/PageInfoText.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';
import Button from '../../components/UI/Button.jsx';
import TestForm from '../../components/My/TestForm.jsx';

const LevelTestPage = () => {
  const param = useParams();
  usePageSetup('level-test');

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedValues, setSelectedValues] = useState([0]);
  console.log('selectedValues:', selectedValues);

  const blankDiv3 = <div className='h-3'></div>;
  const blankDiv5 = <div className='h-5'></div>;
  const steps = ['distance', 'speed', 'technique'];

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = async () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Request to the server with axios
      try {
        // TODO: 500 (Internal Server Error) 해결
        // await axios.post(
        //   '/level/log',
        //   {
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     style: param.strokename,
        //     distance: selectedValues[0],
        //     speed: selectedValues[1],
        //     technique: selectedValues[2]
        //   }
        // );

        // Redirect to /my/level page
        window.location.href = '/my/level';
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
  };

  const handleOptionSelect = value => {
    const updatedSelectedValues = [...selectedValues];
    updatedSelectedValues[currentStep - 1] = value;
    setSelectedValues(updatedSelectedValues);
    console.log('updatedSelectedValues:', updatedSelectedValues);
  };

  return (
    <>
      <PageTitle title={`수영 레벨 테스트`} />
      {blankDiv5}
      <Steps key={currentStep} steps={steps} currentStep={currentStep} />
      {blankDiv3}
      <TestForm
        strokename={param.strokename}
        currentStep={currentStep}
        onOptionSelect={handleOptionSelect}
        selectedValues={selectedValues}
      />
      {blankDiv3}
      <div className='mt-4 flex justify-between'>
        {/* <Button
          key='prev'
          onClick={handlePreviousStep}
          content='이전'
          type={currentStep === 1 ? 'disable' : 'default'}
        /> */}
        <Button key='next' onClick={handleNextStep} content={currentStep === steps.length ? '결과확인' : '다음'} />
      </div>
    </>
  );
};

export default LevelTestPage;
