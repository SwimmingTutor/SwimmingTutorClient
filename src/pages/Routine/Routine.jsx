import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button.jsx';
import { customAxios } from '../../utils/https/axios/customAxios';
import PageTitle from '../../components/PageTitle.jsx';
import PagiInfoText from '../../components/PageInfoText.jsx';
import moment from 'moment';
import BLANKDIV from '../../constants/blankDiv.js';

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
    <div className='px-7'>
      <PageTitle title='생성 루틴 목록' />
      {BLANKDIV[5]}
      {!routineList.length == 0 ? (
        routineList.map(routine => (
          <Link key={routine.routineNo} to={`/routine/${routine.routineNo}`}>
            <div className='my-4 border p-4'>
              <h3 className='text-xl font-bold'>{routine.routineName}</h3>
              <p className='text-gray-500'>{moment(routine.created).format('YYYY-MM-DD HH:mm:ss')}</p>
            </div>
          </Link>
        ))
      ) : (
        <PagiInfoText title='😢' content='생성된 루틴이 없습니다.' />
      )}
      {BLANKDIV[5]}
      <Button content='루틴 생성' size='fit' path='/routine/create' />
      {BLANKDIV[5]}
    </div>
  );
};

export default RoutinePage;
