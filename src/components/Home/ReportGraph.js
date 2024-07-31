import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from '../../utils/https/axios/customAxios';
import MyActiveIcon from '../../assets/icons/my-active.svg';
import PageTitle from '../PageTitle.jsx';

const ReportGraph = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxValues, setMaxValues] = useState({});
  const [allDataEmpty, setAllDataEmpty] = useState(false);

  const images = ['lap_count.png', 'speed.png', 'heart_rate.png', 'carlory.png'];
  const imagePaths = images.map(image => require(`../../assets/images/${image}`));
  const noDataImagePath = require('../../assets/images/swim-graph-nodata.png');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/report');

        // 데이터 구조 변경 및 최대값 추출
        console.log(response.data);

        const transformedData = response.data
          .filter(item => ['distance', 'speed', 'heartRate', 'calories'].includes(item.category)) // 관심 있는 데이터 카테고리만 추출
          .reduce((acc, item) => {
            const { startTime } = item;
            const category = item.category;
            const value = item.value;

            const formattedStartTime = startTime.replace('T', ' ').split(' ').join('\n');

            if (!acc[formattedStartTime]) {
              acc[formattedStartTime] = { name: formattedStartTime };
            }

            acc[formattedStartTime][category] = value;
            return acc;
          }, {});

        const maxValues = response.data.reduce((acc, item) => {
          const category = item.category;
          const value = item.value;

          if (!acc[category] || value > acc[category]) {
            acc[category] = value;
          }

          return acc;
        }, {});

        const allEmpty = Object.keys(maxValues).every(
          key => maxValues[key] === undefined || maxValues[key] === null || maxValues[key] === ''
        );
        setAllDataEmpty(allEmpty);

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
    const categories = ['distance', 'speed', 'heartRate', 'calories'];

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
      case 'distance':
        return '#8884d8';
      case 'speed':
        return '#82ca9d';
      case 'heartRate':
        return '#ffc658';
      case 'calories':
        return '#ff7300';
      default:
        return '#000000';
    }
  };

  const blankDiv = <div className='h-7'></div>;

  return (
    <div style={{ width: '100%', height: 'auto', minHeight: '600px' }}>
      <PageTitle title='분석 보고서' />
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
          <option value='distance'>랩 횟수</option>
          <option value='speed'>속도</option>
          <option value='heartRate'>심박수</option>
          <option value='calories'>칼로리</option>
        </select>
      </div>

      {allDataEmpty ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img
            src={noDataImagePath}
            alt='No Data Available'
            style={{
              width: '100%',
              maxWidth: '600px',
              height: '400px',
              borderRadius: '15px'
            }}
          />
        </div>
      ) : (
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='name'
              type='category'
              tickFormatter={tick => {
                const date = new Date(tick);
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                return `${month}/${day}`;
              }}
              interval={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis type='number' label={{ value: '데이터', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            {renderLines()}
          </LineChart>
        </ResponsiveContainer>
      )}

      {blankDiv}
      <PageTitle title='나의 기록' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          padding: '20px 0',
          textAlign: 'left',
          marginLeft: '10%'
        }}
      >
        {['랩 횟수', '속도', '심박수', '칼로리'].map((category, index) => (
          <div key={category} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img
              src={imagePaths[index]}
              alt={category}
              style={{ width: '45px', height: '45px', marginRight: '10px' }}
            />
            <span style={{ flex: 1 }}>{category}</span>
            <span style={{ flex: 1, textAlign: 'left' }}>
              {maxValues[category.toLowerCase()] !== undefined
                ? maxValues[category.toLowerCase()]
                : '데이터가 없습니다'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportGraph;
