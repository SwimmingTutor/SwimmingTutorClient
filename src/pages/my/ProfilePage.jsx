import React, { useRef } from 'react';
import { CenterWrapper } from '../../components/CenterWrapper.jsx';
import { Header } from '../../components/Header.jsx';
import { Button } from '../../components/Button.jsx';
import { ModalDeleteAccount } from '../../components/ModalDeleteAccount.jsx';
import { InputText } from '../../components/InputText.jsx';
import GenderRadio from '../../components/GenderRadio.jsx';

const onClick = () => {};

// TODO: 프로필 설정 페이지
// 헤더 로그인, 회원가입 없애야 함 && 헤더 중복? 문제 해결
// header text 잘림
export const ProfilePage = () => {
  const deleteAccountModalRef = useRef();

  const handleOpenAccountModal = () => {
    deleteAccountModalRef.current.open();
  };

  const blankDiv5 = <div className='h-5'></div>;
  return (
    <CenterWrapper>
      <Header headerType='profile' />
      {blankDiv5}
      <InputText label='닉네임' placeholder='닉네임' />
      {blankDiv5}
      {/* TODO: 성별 - select box로 변경 */}
      {/* <InputText label='성별' placeholder='성별' /> */}
      <GenderRadio label='성별'></GenderRadio>
      {blankDiv5}
      <InputText type='date' label='생년월일' placeholder='닉네임' />
      {blankDiv5}
      <InputText type='number' label='신장(cm)' placeholder='신장' />
      {blankDiv5}
      <InputText type='number' label='체중(kg)' placeholder='체중' />
      {blankDiv5}
      {blankDiv5}
      <Button content='완료' onClick={onClick}></Button>
      {blankDiv5}
      <a className='mt-4 flex justify-center' onClick={handleOpenAccountModal}>
        <span className='text-sm text-gray-500 underline'>계정 삭제</span>
      </a>

      <ModalDeleteAccount
        ref={deleteAccountModalRef}
        buttonCaption1='예'
        buttonCaption2='아니오'
        title='계정을 삭제하시겠습니까?'
      >
        입력한 정보와 수영 루틴이 모두 삭제되며, <br />
        복구할 수 없습니다.
      </ModalDeleteAccount>
    </CenterWrapper>
  );
};
