import React, { useRef, useEffect } from 'react';
import { CenterWrapper } from '../../components/CenterWrapper.jsx';
import { Header } from '../../components/Header.jsx';
import { Button } from '../../components/Button.jsx';
import { SelectBox } from '../../components/SelectBox.jsx';

const onClick = () => {};

const strokeOptions = ['자유형', '배영', '평영', '접영'];
const purposeOptions = ['다이어트', '근력 강화', '건강 증진', '재활'];

// TODO: 수영 경험 설정 페이지
// 헤더 로그인, 회원가입 없애야 함 && 헤더 중복? 문제 해결
// header text 잘림
export const ExperiencePage = () => {
  const handleStrokeChange = value => {
    console.log('Selected Stroke:', value);
  };

  const blankDiv1 = <div className='h-7'></div>;
  const blankDiv2 = <div className='h-14'></div>;
  const blankDiv3 = <div className='h-20'></div>;
  return (
    <CenterWrapper>
      <Header headerType='experience' />
      {blankDiv2}
      <SelectBox label='선호 영법' selectOption={strokeOptions} onChange={handleStrokeChange}></SelectBox>
      {blankDiv1}
      <SelectBox label='주요 목표' selectOption={purposeOptions}></SelectBox>
      {blankDiv3}
      <Button content='완료'></Button>
    </CenterWrapper>
  );
};
