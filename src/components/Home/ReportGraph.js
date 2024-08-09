import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { customAxios } from '../../utils/https/axios/customAxios';
import PageTitle from '../PageTitle.jsx';
import BLANKDIV from '../../constants/blankDiv.js';
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

const ReportGraph = () => {
  // 상태 변수 선언
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxValues, setMaxValues] = useState({});
  const [allDataEmpty, setAllDataEmpty] = useState(false);
  const [dateRange, setDateRange] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  // 이미지 경로들
  const images = ['lap_count.png', 'speed.png', 'heart_rate.png', 'carlory.png'];
  const imagePaths = images.map(image => require(`../../assets/images/${image}`));
  const noDataImagePath = require('../../assets/images/swim-graph-nodata.png');

  // 카테고리 매핑
  const categoryMapping = {
    거리: 'distance',
    속도: 'speed',
    심박수: 'heartRate'
  };

  // 컴포넌트가 마운트될 때 데이터 가져오는 함수
  useEffect(() => {
    fetchData();
  }, []);

  // 데이터 가져오는 비동기 함수
  const fetchData = async () => {
    try {
      const response = await customAxios.get('/report');
      const transformedData = transformData(response.data);

      console.log('Transformed Data:', transformedData); // 변환된 데이터가 배열인지 확인

      const maxValues = calculateMaxValues(response.data);

      const isAllDataEmpty = checkIfAllDataEmpty(maxValues);
      setAllDataEmpty(isAllDataEmpty);

      if (isAllDataEmpty) {
        setData([]); // 빈 배열로 설정
        setMaxValues({});
      } else {
        if (Array.isArray(transformedData)) {
          setData(transformedData); // 배열로 설정된 transformedData 사용
          setDateRangeForPage(transformedData, 0);
        } else {
          console.error('Transformed data is not an array:', transformedData);
          setData([]); // 배열이 아닌 경우 빈 배열로 설정
        }
        setMaxValues(maxValues);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setIsUnauthorized(true);
      } else {
        console.error('Error fetching data:', error);
      }
    }
  };

  // 데이터 변환
  const transformData = rawData => {
    const transformedObject = rawData
      .filter(item => Object.values(categoryMapping).includes(item.category))
      .reduce((acc, item) => {
        const { startTime } = item;
        const category = item.category;
        const value = item.value;

        const formattedDate = moment(startTime).valueOf();

        if (!acc[formattedDate]) {
          acc[formattedDate] = { name: formattedDate };
        }

        acc[formattedDate][category] = value;
        return acc;
      }, {});

    // 객체를 배열로 변환
    const transformedArray = Object.values(transformedObject);
    console.log('Transformed Array:', transformedArray);
    return transformedArray;
  };

  // 최대값 계산
  const calculateMaxValues = rawData => {
    return rawData.reduce((acc, item) => {
      const category = item.category;
      const value = item.value;

      if (!acc[category] || value > acc[category]) {
        acc[category] = value;
      }

      return acc;
    }, {});
  };

  // 모든 데이터가 비어있는지 확인
  const checkIfAllDataEmpty = maxValues => {
    return Object.keys(maxValues).every(
      key => maxValues[key] === undefined || maxValues[key] === null || maxValues[key] === ''
    );
  };

  // 페이지에 해당하는 날짜 범위 설정
  const setDateRangeForPage = (data, pageIndex) => {
    const startIndex = pageIndex * 7;
    const endIndex = Math.min(startIndex + 7, data.length);
    const pageData = data.slice(startIndex, endIndex);

    if (pageData.length > 0) {
      const startDate = moment(pageData[0].name);
      const endDate = moment(startDate).add(6, 'days');
      const dateRange = `${startDate.format('MM.DD')} ~ ${endDate.format('MM.DD')}`;
      setDateRange(dateRange);
    } else {
      setDateRange('');
    }
  };

  // 카테고리 변경 핸들러
  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  // 이전 페이지로 이동
  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      setDateRangeForPage(data, pageIndex - 1);
    }
  };

  // 다음 페이지로 이동
  const handleNextPage = () => {
    if ((pageIndex + 1) * 7 < data.length) {
      setPageIndex(pageIndex + 1);
      setDateRangeForPage(data, pageIndex + 1);
    }
  };

  // 그래프 라인 렌더링
  const renderLines = () => {
    const categories = ['distance', 'speed', 'heartRate'];

    if (selectedCategory === 'all') {
      return categories.map(category => (
        <Line
          key={category}
          type='monotone'
          dataKey={category}
          stroke={getColor(category)}
          name={category}
          isAnimationActive={true}
        />
      ));
    }

    return (
      <Line
        type='monotone'
        dataKey={selectedCategory}
        stroke={getColor(selectedCategory)}
        name={selectedCategory}
        isAnimationActive={false}
      />
    );
  };

  // 카테고리별 색상 반환
  const getColor = category => {
    switch (category) {
      case 'distance':
        return '#8884d8';
      case 'speed':
        return '#82ca9d';
      case 'heartRate':
        return '#ffc658';
      default:
        return '#000000';
    }
  };

  return (
    <div style={{ width: '100%', height: 'auto', minHeight: '600px' }}>
      <PageTitle title='분석 보고서' />
      <div className='px-7'>
        {BLANKDIV[3]}
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
          <option value='distance'>거리</option>
          <option value='speed'>속도</option>
          <option value='heartRate'>심박수</option>
        </select>
      </div>
      {BLANKDIV[3]}
      {allDataEmpty || isUnauthorized ? (
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
                type='number'
                domain={[
                  data.length > 0
                    ? moment(data[pageIndex * 7].name)
                        .startOf('day')
                        .valueOf()
                    : 'dataMin',
                  data.length > 0
                    ? moment(data[pageIndex * 7].name)
                        .add(6, 'days')
                        .endOf('day')
                        .valueOf()
                    : 'dataMax'
                ]}
                tick={{ fontSize: 12 }}
                tickFormatter={tick => moment(tick).format('MM-DD')}
                ticks={
                  data.length > 0
                    ? Array.from({ length: 7 }, (_, i) =>
                        moment(data[pageIndex * 7].name)
                          .add(i, 'days')
                          .startOf('day')
                          .valueOf()
                      )
                    : []
                }
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
      {BLANKDIV[7]}
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
        {['거리(m)', '속도(m/s)', '심박수(bpm)'].map((category, index) => (
          <div key={category} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img
              src={imagePaths[index]}
              alt={category}
              style={{ width: '45px', height: '45px', marginRight: '10px' }}
            />
            <span style={{ flex: 1 }}>{category}</span>
            <span style={{ flex: 1, textAlign: 'left' }}>
              {maxValues[categoryMapping[category.split('(')[0]]] !== undefined
                ? maxValues[categoryMapping[category.split('(')[0]]]
                : '데이터가 없습니다'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportGraph;
