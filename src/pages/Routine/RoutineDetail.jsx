import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SessionData from '../../components/Routine/SessionForm.jsx';
import axios from '../../utils/https/axios/customAxios';
import usePageSetup from '../../hooks/usePageSetup.js';

const RoutineDetailPage = () => {
  const { routineNo } = useParams();
  usePageSetup('routine-detail');

  const [trainings, setTrainings] = useState([]);
  
  const sessionName = ['워밍업', '코어', '쿨다운'];
  const warmupData = [];
  const coreData = [];
  const cooldownData = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/routine/${routineNo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        setTrainings(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  // console.log(trainings);

  trainings.map(training => {
    // console.log(training);
    switch (training.session) {
      case sessionName[0]:
        warmupData.push(training);
        break;
      case sessionName[1]:
        coreData.push(training);
        break;
      case sessionName[2]:
        cooldownData.push(training);
        break;
      default:
        break;
    }
  });

  return (
    <div>
      <SessionData key={sessionName[0]} title={sessionName[0]} data={warmupData} />
      <SessionData key={sessionName[1]} title={sessionName[1]} data={coreData} />
      <SessionData key={sessionName[2]} title={sessionName[2]} data={cooldownData} />
    </div>
  );
};

export default RoutineDetailPage;
