import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button.jsx';
import axios from '../../utils/https/axios/customAxios';
import CenterWrapper from '../../components/Layout/CenterWrapper.jsx';

const RoutinePage = () => {
  const [routineList, setRoutineList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/routine', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setRoutineList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <CenterWrapper>
      {routineList.map(routine => (
        <Link to={`/routine/${routine.routineNo}`}>
          <div key={routine.routineNo} className='my-4 border p-4'>
            <h3 className='text-xl font-bold'>{routine.routineName}</h3>
            <p className='text-gray-500'>{routine.created}</p>
          </div>
        </Link>
      ))}
      <Button content='루틴 생성' size='fit' path='/routine/create' />
    </CenterWrapper>
  );
};

export default RoutinePage;
