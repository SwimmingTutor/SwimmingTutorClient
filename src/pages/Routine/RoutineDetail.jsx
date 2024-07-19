import { useEffect, useState } from 'react';
import SessionData from '../../components/Routine/SessionForm.jsx';


const RoutineDetailPage = () => {
  const [trainings, setTrainings] = useState([]);
  const sessionName = ['워밍업', '코어', '쿨다운'];
  const warmupData = [];
  const coreData = [];
  const cooldownData = [];

  useEffect(() => {
    fetch('http://localhost:8080/routine/1?oauthLoginId=user1@gmail.com&oauthLoginPlatform=google')
      .then(response => response.json())
      .then(data => setTrainings(data))
      .catch(error => console.error(error));
  }, []);

  trainings.map(training => {
    console.log(training);
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
      <SessionData title={sessionName[0]} data={warmupData} />
      <SessionData title={sessionName[1]} data={coreData} />
      <SessionData title={sessionName[2]} data={cooldownData} />
    </div>
  );
};

export default RoutineDetailPage;
