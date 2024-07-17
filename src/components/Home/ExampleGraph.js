import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const Example = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8615/report', {
          params: {
            oauthLoginId: 'user1@gmail.com',
            oauthLoginPlatform: 'google'
          }
        });

        // 데이터 구조 변경
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

        setData(Object.values(transformedData));
        console.log('transformed data : ' + JSON.stringify(transformedData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis
        dataKey='name'
        type='category'
        label={{ value: 'StartTime', position: 'insideBottomRight', offset: -10 }}
      />
      <YAxis type='number' label={{ value: '데이터', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='랩 횟수' stroke='#8884d8' name='랩 횟수' />
      <Line type='monotone' dataKey='속도' stroke='#82ca9d' name='속도' />
      <Line type='monotone' dataKey='심박수' stroke='#ffc658' name='심박수' />
      <Line type='monotone' dataKey='칼로리' stroke='#ff7300' name='칼로리' />
    </LineChart>
  );
};

export default Example;
