import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OAuthHeader from '../../components/OAuthHeader.jsx';
import Button from '../../components/UI/Button.jsx';
import ModalDeleteAccount from '../../components/UI/ModalDeleteAccount.jsx';
import InputText from '../../components/UI/InputText.jsx';
import GenderRadio from '../../components/OAuth/GenderRadio.jsx';
import Nav from '../../components/Nav.jsx';
import usePageSetup from '../../hooks/usePageSetup.js';
import { customAxios } from '../../utils/https/axios/customAxios';

// TODO: 로그인시 헤더 '로그아웃' 노출
const ProfilePage = () => {
  usePageSetup('profile');
  const deleteAccountModalRef = useRef();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await customAxios.get('/users/profile');
        const { name, gender, birth, height, weight } = data;

        setName(name);
        setGender(gender);
        setBirth(birth);
        setHeight(height);
        setWeight(weight);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const onClick = async () => {
    try {
      await customAxios.put('/users/profile', {
        name,
        gender,
        birth,
        height,
        weight
      });

      navigate('/my');
    } catch (err) {
      console.error(err);
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
        <InputText label='닉네임' defaultValue={name} placeholder='닉네임' onChange={setName} />
        {blankDiv1}
        {/* TODO: 성별 - select box로 변경 */}
        {/* <InputText label='성별' placeholder='성별' /> */}
        <GenderRadio value={gender} label='성별' onChange={setGender}></GenderRadio>
        {blankDiv1}
        <InputText type='date' defaultValue={birth} label='생년월일' onChange={setBirth} />
        {blankDiv1}
        <InputText type='number' defaultValue={height} label='신장(cm)' placeholder='신장' onChange={setHeight} />
        {blankDiv1}
        <InputText type='number' defaultValue={weight} label='체중(kg)' placeholder='체중' onChange={setWeight} />
        {blankDiv2}
        <Button content='완료' onClick={onClick}></Button>
        {blankDiv1}
        {/* <a className='mt-4 flex justify-center' onClick={handleOpenAccountModal}>
          <span className='text-sm text-gray-500 underline'>계정 삭제</span>
        </a> */}
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
