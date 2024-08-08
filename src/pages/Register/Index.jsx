import React, { useState } from 'react';
import { Form, json, redirect, useNavigate } from 'react-router-dom';
import OAuthHeader from '../../components/OAuthHeader.jsx';
import Button from '../../components/UI/Button.jsx';
import InputText from '../../components/UI/InputText.jsx';
import GenderRadio from '../../components/OAuth/GenderRadio.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';
import { customAxios } from '../../utils/https/axios/customAxios';
import SelectBox from '../../components/UI/SelectBox.jsx';
// import TermsAgreement from '../../components/OAuth/TermsAgreement.jsx';

const strokeOptions = ['자유형', '배영', '평영', '접영'];
const purposeOptions = ['다이어트', '근력 강화', '건강 증진', '재활'];

const ProfilePage = () => {
  usePageSetup('profile');

  const [preference, setPreference] = useState('자유형');
  const [mainGoal, setMainGoal] = useState('다이어트');

  const handleStrokeChange = value => {
    setPreference(value);
  };

  const handleGoalChange = value => {
    setMainGoal(value);
  };

  const blankDiv1 = <div className='h-7'></div>;
  const blankDiv2 = <div className='h-14'></div>;

  return (
    <>
      <OAuthHeader headerType='join' off='true' />
      <div className='px-7'>
        <p>
          <b>*</b> 항목은 필수 입력사항입니다.
        </p>
        <Form method='post' className='px-7'>
          {blankDiv1}
          <InputText name='name' label='닉네임 *' placeholder='닉네임' onChange={() => {}} />
          {blankDiv1}
          <GenderRadio name='gender' label='성별 *'></GenderRadio>
          {blankDiv1}
          <InputText name='birth' type='date' label='생년월일 *' placeholder='닉네임' onChange={() => {}} />
          {blankDiv1}
          <InputText name='height' type='number' label='신장(cm)' placeholder='신장' onChange={() => {}} />
          {blankDiv1}
          <InputText name='weight' type='number' label='체중(kg)' placeholder='체중' onChange={() => {}} />
          {blankDiv1}
          <input type='text' className='hidden' name='preference' value={preference} readOnly></input>
          <input type='text' className='hidden' name='goal' value={mainGoal} readOnly></input>
          <SelectBox
            label='선호 영법 *'
            value={preference}
            selectOption={strokeOptions}
            onChange={handleStrokeChange}
          ></SelectBox>
          {blankDiv1}
          <SelectBox
            label='주요 목표 *'
            value={mainGoal}
            selectOption={purposeOptions}
            onChange={handleGoalChange}
          ></SelectBox>
          {blankDiv2}
          <Button content='완료'></Button>
        </Form>
      </div>
    </>
  );
};

export async function action({ request }) {
  const formData = await request.formData();
  // const userData = {
  //   name: data.get('name'),
  //   gender: data.get('gender'),
  //   birth: data.get('birth'),
  //   height: data.get('height'),
  //   weight: data.get('weight'),
  //   preference: data.get('preference'),
  //   goal: data.get('goal')
  // };

  // TODO: 유효성 검사
  try {
    const { data, status } = await customAxios.post('users', formData);

    if (status === 200) {
      return redirect('/');
    }
  } catch (e) {
    console.log(e);
  }
}

export default ProfilePage;
