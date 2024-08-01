import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceDot
} from 'recharts';
import axios from '../../utils/https/axios/customAxios';
import moment from 'moment';
import PageTitle from '../PageTitle.jsx';

const ReportGraph = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxValues, setMaxValues] = useState({});
  const [allDataEmpty, setAllDataEmpty] = useState(false);
  const [dateRange, setDateRange] = useState('');
  const [pageIndex, setPageIndex] = useState(0);

  const images = ['lap_count.png', 'speed.png', 'heart_rate.png', 'carlory.png'];
  const imagePaths = images.map(image => require(`../../assets/images/${image}`));
  const noDataImagePath = require('../../assets/images/swim-graph-nodata.png');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/report');

        console.log('Raw data:', response.data);

        const transformedData = response.data
          .filter(item => ['distance', 'speed', 'heartRate', 'calories'].includes(item.category))
          .reduce((acc, item) => {
            const { startTime } = item;
            const category = item.category;
            const value = item.value;

            const formattedDate = moment(startTime).valueOf(); // Unix timestamp 사용

            if (!acc[formattedDate]) {
              acc[formattedDate] = { name: formattedDate };
            }

            acc[formattedDate][category] = value;
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

        const sortedData = Object.values(transformedData).sort((a, b) => a.name - b.name);
        setData(sortedData);
        setMaxValues(maxValues);

        if (sortedData.length > 0) {
          setDateRangeForPage(sortedData, 0);
        }

        console.log('transformed data : ' + JSON.stringify(transformedData));
        console.log('max values : ' + JSON.stringify(maxValues));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const setDateRangeForPage = (data, pageIndex) => {
    const startIndex = pageIndex * 7;
    const endIndex = Math.min(startIndex + 7, data.length);
    const pageData = data.slice(startIndex, endIndex);

    if (pageData.length > 0) {
      const startDate = moment(pageData[0].name);
      const endDate = moment(pageData[pageData.length - 1].name).add(6, 'days');
      const dateRange = `${startDate.format('M.DD')} ~ ${endDate.format('M.DD')}`;
      setDateRange(dateRange);
    } else {
      setDateRange('');
    }
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      setDateRangeForPage(data, pageIndex - 1);
    }
  };

  const handleNextPage = () => {
    if ((pageIndex + 1) * 7 < data.length) {
      setPageIndex(pageIndex + 1);
      setDateRangeForPage(data, pageIndex + 1);
    }
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
              height: '300px',
              borderRadius: '15px'
            }}
          />
        </div>
      ) : (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
              fontWeight: 'bold'
            }}
          >
            <button
              onClick={handlePrevPage}
              disabled={pageIndex === 0}
              style={{ cursor: pageIndex === 0 ? 'not-allowed' : 'pointer' }}
            >
              {'<'}
            </button>
            <span style={{ margin: '0 10px' }}>{dateRange}</span>
            <button
              onClick={handleNextPage}
              disabled={(pageIndex + 1) * 7 >= data.length}
              style={{ cursor: (pageIndex + 1) * 7 >= data.length ? 'not-allowed' : 'pointer' }}
            >
              {'>'}
            </button>
          </div>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart
              data={data.slice(pageIndex * 7, (pageIndex + 1) * 7)}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                dataKey='name'
                type='number' // 시간 축을 사용하기 위해 number로 설정
                domain={['dataMin', moment('2024-06-01').add(6, 'days').valueOf()]}
                tick={{ fontSize: 12 }}
                tickFormatter={tick => moment(tick).format('MM-DD')}
              />
              <YAxis type='number' label={{ value: '데이터', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                labelFormatter={label => moment(label).format('YYYY-MM-DD HH:mm')}
                formatter={(value, name) => [value, name]}
              />
              <Legend />
              {renderLines()}
              {data.map(d => (
                <ReferenceDot key={d.name} x={d.name} y={d[selectedCategory]} r={4} fill='red' stroke='none' />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
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
