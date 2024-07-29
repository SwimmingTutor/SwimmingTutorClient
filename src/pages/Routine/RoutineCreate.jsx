import { useState } from 'react';
import PageTitle from '../../components/PageTitle.jsx';
import SelectBox from '../../components/UI/SelectBox.jsx';
import InputNumber from '../../components/Routine/InputNumber.jsx';
import MultiSelectBox from '../../components/UI/MultiSelectBox.jsx';
import InputText from '../../components/UI/InputText.jsx';
import Button from '../../components/UI/Button.jsx';
import axios from '../../utils/https/axios/customAxios';

const RoutineCreatePage = () => {
  const [routineName, setRoutineName] = useState('');
  const [targetDistance, setTargetDistance] = useState(1000);
  const [poolLength, setPoolLength] = useState('25m');
  const [strokes, setStrokes] = useState([]);

  const handleRoutineName = value => {
    setRoutineName(value);
    // console.log('routineName:', value);
  };

  const handlePoolLength = value => {
    setPoolLength(value);
    // console.log('poolLength:', value);
  };

  const handleDistance = value => {
    setTargetDistance(value);
    // console.log('targetDistance:', value);
  };

  const handleStrokes = selectedStrokes => {
    setStrokes(selectedStrokes);
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
    // Request to the server with axios
    try {
      await axios.post(
        '/routine',
        {
          routineName: routineName,
          poolLength: poolLength,
          targetDistance: targetDistance,
          selStrokes: strokes,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      // Redirect to /routine page
      window.location.href = '/routine';
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
      <SelectBox
        label='레인 길이'
        selectOption={['25m', '50m']}
        defaultValue={poolLength}
        onChange={handlePoolLength}
      />
      <InputNumber label='목표 거리' unit={100} defaultValue={targetDistance} onChange={handleDistance} />
      <MultiSelectBox
        label='영법 선택'
        selectOption={['자유형', '배영', '평영', '접영']}
        placeholder='훈련할 영법을 선택하세요'
        onChange={handleStrokes}
      />
      <Button key='create' content='생성하기' size='fit' onClick={onClick} />
    </>
  );
};

export default RoutineCreatePage;
