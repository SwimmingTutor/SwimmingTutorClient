import { useEffect, useState, useCallback } from 'react';
import Menu from '../Menu.jsx';
import axios from '../../utils/https/axios/customAxios';
import INITIALLEVELS from '../../constants/initialLevels.js';

const LevelList = () => {
  const [levels, setLevels] = useState(INITIALLEVELS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get('/level', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = response.data;

      setLevels(prevLevels =>
        prevLevels.map(level => ({
          ...level,
          level: data[level.key] || '-'
        }))
      );
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
