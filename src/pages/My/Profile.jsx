import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CenterWrapper from '../../components/Layout/CenterWrapper.jsx';
import OAuthHeader from '../../components/OAuthHeader.jsx';
import Button from '../../components/UI/Button.jsx';
import ModalDeleteAccount from '../../components/UI/ModalDeleteAccount.jsx';
import InputText from '../../components/UI/InputText.jsx';
import GenderRadio from '../../components/OAuth/GenderRadio.jsx';
import Nav from '../../components/Nav.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';

// TODO: 로그인시 헤더 '로그아웃' 노출
const ProfilePage = () => {
  usePageSetup('profile');
  const deleteAccountModalRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    const fromPage = location.state?.from;
    // TODO: Redirect to Experience page
    if (fromPage === '/login') {
      navigate('/my/experience', { state: { from: '/profile' } });
    } else {
      alert('반영이 완료되었습니다.');
    }
  };

  const handleOpenAccountModal = () => {
    deleteAccountModalRef.current.open();
  };

  const blankDiv1 = <div className='h-7'></div>;
  const blankDiv2 = <div className='h-14'></div>;

  return (
    <>
      <OAuthHeader headerType='profile' off='true' />
      <div className='px-7'>
        {/* {blankDiv2} */}
        <InputText label='닉네임' placeholder='닉네임' />
        {blankDiv1}
        {/* TODO: 성별 - select box로 변경 */}
        {/* <InputText label='성별' placeholder='성별' /> */}
        <GenderRadio label='성별'></GenderRadio>
        {blankDiv1}
        <InputText type='date' label='생년월일' placeholder='닉네임' />
        {blankDiv1}
        <InputText type='number' label='신장(cm)' placeholder='신장' />
        {blankDiv1}
        <InputText type='number' label='체중(kg)' placeholder='체중' />
        {blankDiv2}
        <Button content='완료' onClick={onClick}></Button>
        {blankDiv1}
        <a className='mt-4 flex justify-center' onClick={handleOpenAccountModal}>
          <span className='text-sm text-gray-500 underline'>계정 삭제</span>
        </a>
      </div>
      <ModalDeleteAccount
        ref={deleteAccountModalRef}
        buttonCaption1='예'
        buttonCaption2='아니오'
        title='계정을 삭제하시겠습니까?'
      >
        입력한 정보와 수영 루틴이 모두 삭제되며, <br />
        복구할 수 없습니다.
      </ModalDeleteAccount>
      {/* TODO: login시에만 Nav 노출 */}
      <Nav></Nav>
    </>
  );
};

export default ProfilePage;
