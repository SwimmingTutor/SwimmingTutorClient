import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button.jsx';
import { customAxios } from '../../utils/https/axios/customAxios';
import PageTitle from '../../components/PageTitle.jsx';
import moment from 'moment';

const RoutinePage = () => {
  const [routineList, setRoutineList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customAxios.get('/routine/list');
        setRoutineList(response.data);
      } catch (error) {
        console.error('Error fetching routine list:', error);
        setError('Failed to fetch routine list');
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <PageTitle title='생성 루틴 목록' />
      {routineList.map(routine => (
        <Link key={routine.routineNo} to={`/routine/${routine.routineNo}`}>
          <div className='my-4 border p-4'>
            <h3 className='text-xl font-bold'>{routine.routineName}</h3>
            <p className='text-gray-500'>{moment(routine.created).format('YYYY-MM-DD HH:mm:ss')}</p>
          </div>
        </Link>
      ))}
      <Button content='루틴 생성' size='fit' path='/routine/create' />
    </div>
  );
};

export default RoutinePage;
