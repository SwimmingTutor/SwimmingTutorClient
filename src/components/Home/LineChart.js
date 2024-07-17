import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyLineChart = () => {
  const [calorieData, setCalorieData] = useState([]);

  useEffect(() => {
    // 백엔드에서 데이터를 가져오는 코드
    const fetchData = async () => {
      const response = await fetch('/localhost:8080/report');
      const data = await response.json();
      console.log('data : ' + data);
      // 칼로리 데이터만 추출
      const calorieData = data.filter(item => item.recordId.category === '칼로리');
      setCalorieData(calorieData);
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width='100%' height={400}>
      <LineChart data={calorieData}>
        <XAxis dataKey='recordId.starttime' />
        <YAxis domain={[0, 'dataMax']} />

        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='value' stroke='#8884d8' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MyLineChart;
