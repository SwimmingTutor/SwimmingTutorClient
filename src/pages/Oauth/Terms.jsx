import TermsAgreement from '../../components/OAuth/TermsAgreement.jsx';
import OAuthHeader from '../../components/OAuthHeader.jsx';
import Button from '../../components/UI/Button.jsx';

const TermsPage = () => {
  const blankDiv = <div className='h-20'></div>;

  const onClick = () => {};

  return (
    <>
      <OAuthHeader headerType='terms' off='true' />
      {blankDiv}
      <TermsAgreement></TermsAgreement>
      {blankDiv}
      <Button content='동의하고 시작하기' onClick={onClick}></Button>
    </>
  );
};

export default TermsPage;
