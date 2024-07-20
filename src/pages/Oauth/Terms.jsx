import TermsAgreement from '../../components/OAuth/TermsAgreement.jsx';
import CenterWrapper from '../../components/Layout/CenterWrapper.jsx';
import Header from '../../components/Header.jsx';
import Button from '../../components/UI/Button.jsx';

const TermsPage = () => {
  const blankDiv = <div className='h-20'></div>;

  const onClick = () => {};

  return (
    <>
      {/* // <CenterWrapper> */}
      <Header headerType='terms' />
      {blankDiv}
      <TermsAgreement></TermsAgreement>
      {blankDiv}
      <Button content='동의하고 시작하기' onClick={onClick}></Button>
      {/* // </CenterWrapper> */}
    </>
  );
};
export default TermsPage;