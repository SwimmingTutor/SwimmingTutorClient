import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OAuthHeader from '../../components/OAuthHeader.jsx';
import Button from '../../components/UI/Button.jsx';
import SelectBox from '../../components/UI/SelectBox.jsx';
import Nav from '../../components/Nav.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';
import axios from '../../utils/https/axios/customAxios';

const strokeOptions = ['자유형', '배영', '평영', '접영'];
const purposeOptions = ['다이어트', '근력 강화', '건강 증진', '재활'];

// TODO: 로그인시 헤더 '로그아웃' 노출
const ExperiencePage = () => {
  usePageSetup('experience');
  const navigate = useNavigate();

  const [preference, setPreference] = useState('');
  const [goal, setGoal] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users/experience');
        const { data } = response;
        const { preference, goal } = data;

        setPreference(preference);
        setGoal(goal);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleStrokeChange = value => setPreference(value);
  const handleGoalChange = value => setGoal(value);

  const save = async () => {
    try {
      const response = await axios.put('/users/experience', {
        preference,
        goal
      });

      navigate('/my');
    } catch (error) {
      console.error(error);
    }
  };

  const blankDiv1 = <div className='h-7'></div>;
  const blankDiv2 = <div className='h-14'></div>;
  const blankDiv3 = <div className='h-20'></div>;

  let content = '';

  if (preference === 0 || goal.length === 0) {
    content = <p>로딩중</p>;
  } else {
    content = (
      <>
        <OAuthHeader headerType='experience' off='true' />
        <div className='px-7'>
          {blankDiv2}
          <SelectBox
            label='선호 영법'
            value={preference}
            selectOption={strokeOptions}
            onChange={handleStrokeChange}
          ></SelectBox>
          {blankDiv1}
          <SelectBox
            label='주요 목표'
            value={goal}
            selectOption={purposeOptions}
            onChange={handleGoalChange}
          ></SelectBox>
          {blankDiv3}
          <Button content='완료' onClick={save}></Button>
        </div>
        {/* TODO: login시에만 Nav 노출 */}
        <Nav></Nav>
      </>
    );
  }

  return content;
};
export default ExperiencePage;
