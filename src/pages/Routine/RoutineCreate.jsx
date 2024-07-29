import { useState } from 'react';
import PageTitle from '../../components/PageTitle.jsx';
import SelectBox from '../../components/UI/SelectBox.jsx';
import InputNumber from '../../components/Routine/InputNumber.jsx';
import MultiSelectBox from '../../components/UI/MultiSelectBox.jsx';
import InputText from '../../components/UI/InputText.jsx'; // InputText 컴포넌트 추가
import Button from '../../components/UI/Button.jsx';
import axios from '../../utils/https/axios/customAxios';

const RoutineCreatePage = () => {
  const [routineName, setRoutineName] = useState(''); // 루틴 이름 상태 추가
  const [targetDistance, setTargetDistance] = useState(1000); // 상태 추가
  const [poolLength, setPoolLength] = useState('25m');
  const [strokes, setStrokes] = useState([]);

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
      // TODO: 404 (Not Found Error) 해결
      await axios.post(
        '/routine',
        {
          routineName: routineName,
          poolLength: poolLength,
          targetDistance: targetDistance,
          selStrokes: strokes
        },
        {
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
        onChange={e => setRoutineName(e.target.value)} // 루틴 이름 상태 업데이트
      />
      <SelectBox
        label='레인 길이'
        selectOption={['25m', '50m']}
        onChange={value => setPoolLength(value)} // 상태 업데이트
      />
      <InputNumber
        label='목표 거리'
        defaultValue={1000}
        unit={100}
        onChange={value => setTargetDistance(value)} // 상태 업데이트
      />
      <MultiSelectBox
        label='영법 선택'
        selectOption={['자유형', '배영', '평영', '접영']}
        placeholder='훈련할 영법을 선택하세요'
        onChange={value => setStrokes(value)} // 상태 업데이트
      />
      <Button key='create' content='생성하기' size='fit' onClick={onClick} />
    </>
  );
};

export default RoutineCreatePage;
