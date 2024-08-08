import { useEffect, useState, useCallback } from 'react';
import Menu from '../Menu.jsx';
import { customAxios } from '../../utils/https/axios/customAxios';
import INITIALLEVELS from '../../constants/initialLevels.js';

const LevelList = () => {
  const [levels, setLevels] = useState(INITIALLEVELS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log('1 levels: ', levels);
  const fetchData = useCallback(async () => {
    try {
      const response = await customAxios.get('/level', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = response.data;
      // console.log('data: ', data);

      setLevels(prevLevels =>
        prevLevels.map(level => {
          const matchingData = data.find(item => item.lcTrainingName === level.name);
          if (matchingData) {
            return { ...level, level: matchingData.userLevel };
          }
          return level;
        })
      );
      // console.log('2 levels: ', levels);
    } catch (err) {
      setError('Failed to fetch levels. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='flex h-fit w-full flex-col gap-3 text-[0.9rem] font-light'>
      {levels.map(item => (
        <Menu key={item.key} name={`${item.name} / ${item.level}`} path={`/my/level/test/${item.key}`} />
      ))}
    </div>
  );
};

export default LevelList;
