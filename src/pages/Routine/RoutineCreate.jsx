import { useState } from 'react';
import PageTitle from '../../components/PageTitle.jsx';
import SelectBox from '../../components/UI/SelectBox.jsx';
import InputNumber from '../../components/Routine/InputNumber.jsx';
import MultiSelectBox from '../../components/UI/MultiSelectBox.jsx';
import InputText from '../../components/UI/InputText.jsx';
import Button from '../../components/UI/Button.jsx';
import { customAxios } from '../../utils/https/axios/customAxios';
import { useNavigate } from 'react-router-dom';
import BLANKDIV from '../../constants/blankDiv.js';

const RoutineCreatePage = () => {
  const navigate = useNavigate();
  const [routineName, setRoutineName] = useState('');
  const [targetDistance, setTargetDistance] = useState(1000);
  const [poolLength, setPoolLength] = useState(25);
  const [strokes, setStrokes] = useState([]);

  const handleRoutineName = value => {
    setRoutineName(value);
    // console.log('routineName:', value);
  };

  const handlePoolLength = value => {
    // 문자열 'm' 제거
    setPoolLength(value.replace('m', ''));
    // console.log('poolLength:', value);
  };

  const handleDistance = value => {
    setTargetDistance(value);
    // console.log('targetDistance:', value);
  };

  const handleStrokes = selectedStrokes => {
    // 배열을 콤마로 구분된 문자열로 변환
    setStrokes(selectedStrokes.join(','));
    // console.log('strokes:', selectedStrokes);
  };

  const onClick = async () => {
    if (!routineName) {
      alert('루틴 이름을 입력해주세요 😅');
      return;
    }

    if (strokes.length == 0) {
      alert('훈련할 영법을 선택해주세요 😅');
      return;
    }
    // Request to the server with customAxios
    try {
      const response = await customAxios.post('/routine', {
        routineName: routineName,
        poolLength: poolLength,
        targetDistance: targetDistance,
        selStrokes: strokes
      });
      const noLevelStrokes = response.data;
      if (noLevelStrokes.length == 0) {
        navigate('/routine');
      } else {
        alert(`${noLevelStrokes} 레벨 테스트를 먼저 진행해주세요 😅`);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <>
      <PageTitle title='루틴 생성' />
      <InputText
        label='루틴 이름'
        placeholder='루틴 이름을 입력하세요'
        defaultValue={routineName}
        onChange={handleRoutineName}
      />
      <SelectBox label='레인 길이(m)' selectOption={[25, 50]} defaultValue={poolLength} onChange={setPoolLength} />
      <InputNumber label='목표 거리' unit={100} defaultValue={targetDistance} onChange={handleDistance} />
      <MultiSelectBox
        label='영법 선택'
        selectOption={['자유형', '배영', '평영', '접영']}
        placeholder='훈련할 영법을 선택하세요'
        onChange={handleStrokes}
      />
      {BLANKDIV[9]}
      <Button key='create' content='생성하기' size='fit' onClick={onClick} />
    </>
  );
};

export default RoutineCreatePage;
