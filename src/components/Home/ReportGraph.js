import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from '../../utils/https/axios/customAxios';

const ReportGraph = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxValues, setMaxValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/report', {
          params: {
            oauthLoginId: 'user1@gmail.com',
            oauthLoginPlatform: 'google'
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        });

        // 데이터 구조 변경 및 최대값 추출
        const transformedData = response.data
          .filter(item => ['랩 횟수', '속도', '심박수', '칼로리'].includes(item.recordId.category)) // 관심 있는 데이터 카테고리만 추출
          .reduce((acc, item) => {
            const { starttime } = item.recordId;
            const category = item.recordId.category;
            const value = item.value;

            if (!acc[starttime]) {
              acc[starttime] = { name: starttime };
            }

            acc[starttime][category] = value;
            return acc;
          }, []);

        const maxValues = response.data.reduce((acc, item) => {
          const category = item.recordId.category;
          const value = item.value;

          if (!acc[category] || value > acc[category]) {
            acc[category] = value;
          }

          return acc;
        }, {});

        setData(Object.values(transformedData));
        setMaxValues(maxValues);
        console.log('transformed data : ' + JSON.stringify(transformedData));
        console.log('max values : ' + JSON.stringify(maxValues));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const renderLines = () => {
    const categories = ['랩 횟수', '속도', '심박수', '칼로리'];

    if (selectedCategory === 'all') {
      return categories.map(category => (
        <Line key={category} type='monotone' dataKey={category} stroke={getColor(category)} name={category} />
      ));
    }

    return (
      <Line type='monotone' dataKey={selectedCategory} stroke={getColor(selectedCategory)} name={selectedCategory} />
    );
  };

  const getColor = category => {
    switch (category) {
      case '랩 횟수':
        return '#8884d8';
      case '속도':
        return '#82ca9d';
      case '심박수':
        return '#ffc658';
      case '칼로리':
        return '#ff7300';
      default:
        return '#000000';
    }
  };

  return (
    <div style={{ width: '100%', height: 'auto', minHeight: '600px' }}>
      <h1 style={{ fontSize: '1.5em', textAlign: 'center', marginBottom: '20px' }}>분석 보고서</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor='categorySelect'>카테고리 선택: </label>
        <select
          id='categorySelect'
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{
            padding: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value='all'>전체</option>
          <option value='랩 횟수'>랩 횟수</option>
          <option value='속도'>속도</option>
          <option value='심박수'>심박수</option>
          <option value='칼로리'>칼로리</option>
        </select>
      </div>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='name'
            type='category'
            label={{ value: 'StartTime', position: 'insideBottomRight', offset: -10 }}
          />
          <YAxis type='number' label={{ value: '데이터', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          {renderLines()}
        </LineChart>
      </ResponsiveContainer>
      <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
      <h1 style={{ fontSize: '1.5em', textAlign: 'center' }}>나의 기록</h1>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0', textAlign: 'left' }}>
        <div>
          {['랩 횟수', '속도', '심박수', '칼로리'].map(category => (
            <div key={category} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src='path_to_your_image.png'
                alt={category}
                style={{ width: '20px', height: '20px', marginRight: '10px' }}
              />
              <span>{category}</span>
            </div>
          ))}
        </div>
        <div style={{ marginLeft: '20px' }}>
          {['랩 횟수', '속도', '심박수', '칼로리'].map(category => (
            <div key={category} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span>{maxValues[category]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportGraph;
