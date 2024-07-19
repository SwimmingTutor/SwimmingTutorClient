import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button.jsx';
import CenterWrapper from '../../components/Layout/CenterWrapper.jsx';
// import PageInfoText from '../../components/PageInfoText.jsx';

const RoutineList = () => {
  const [routineList, setRoutineList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/routine')
      .then(response => response.json())
      .then(data => setRoutineList(data))
      .catch(error => console.error(error));
  }, []);
  // console.log(routineList);

  return (
    <CenterWrapper>
      {routineList.map(routine => (
        <div key={routine.routineId} className='my-4 border p-4'>
          <Link to={`/routine/detail`}>
            <h3 className='text-xl font-bold'>{routine.routineName}</h3>
          </Link>
          <p className='text-gray-500'>{routine.created}</p>
        </div>
      ))}
      <Button content='루틴 생성' size='fit' path='/routine/create' />
    </CenterWrapper>
  );
};

const RoutinePage = () => {
  return <RoutineList />;
};

export default RoutinePage;
