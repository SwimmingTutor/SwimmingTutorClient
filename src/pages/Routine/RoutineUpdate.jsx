import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { customAxios } from '../../utils/https/axios/customAxios';
import InputText from '../../components/UI/InputText.jsx';
import SelectBox from '../../components/UI/SelectBox.jsx';
import Button from '../../components/UI/Button.jsx';
import PageTitle from '../../components/PageTitle.jsx';
import BLANKDIV from '../../constants/blankDiv.js';

const RoutineUpdatePage = () => {
  const location = useLocation();
  const initialState = location.state || {};
  const navigate = useNavigate();

  const routineNo = initialState.routineNo;
  const targetDistance = initialState.targetDistance;
  const selStrokes = initialState.selStrokes;

  const [routineName, setRoutineName] = useState(initialState.routineName || '');
  const [poolLength, setPoolLength] = useState(initialState.poolLength || 25);

  const handleRoutineName = value => {
    setRoutineName(value);
    // console.log('routineName:', value);
  };

  const handleCancel = async () => {
    navigate('/routine');
  };

  const handleUpdate = async () => {
    try {
      // Send the updated data to the server
      await customAxios.put(`/routine/update/${routineNo}`, {
        routineName: routineName,
        poolLength: poolLength,
        targetDistance: targetDistance,
        selStrokes: selStrokes,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      console.log('Routine updated successfully!');
      navigate('/routine');
    } catch (error) {
      console.error('Failed to update routine:', error);
    }
  };

  return (
    <div className='px-7'>
      <PageTitle title='루틴 수정' />
      {BLANKDIV[5]}
      <InputText
        label='루틴명'
        placeholder={initialState.routineName}
        defaultValue={routineName}
        onChange={handleRoutineName}
      />
      {BLANKDIV[3]}
      <SelectBox label='레인 길이(m)' selectOption={[25, 50]} value={poolLength} onChange={setPoolLength} />
      {BLANKDIV[9]}
      <div className='mt-4 flex justify-between'>
        <Button key='cancel' onClick={handleCancel} content='취소' type='cancel' />
        <Button key='update' onClick={handleUpdate} content='수정완료' />
      </div>
    </div>
  );
};

export default RoutineUpdatePage;
