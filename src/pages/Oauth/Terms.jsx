import TermsAgreement from '../../components/OAuth/TermsAgreement.jsx';
import OAuthHeader from '../../components/OAuthHeader.jsx';
import Button from '../../components/UI/Button.jsx';
import BLANKDIV from '../../constants/blankDiv.js';

const TermsPage = () => {
  const onClick = () => {};

  return (
    <>
      <OAuthHeader headerType='terms' off='true' />
      {BLANKDIV[9]}
      <TermsAgreement></TermsAgreement>
      {BLANKDIV[9]}
      <Button content='동의하고 시작하기' onClick={onClick}></Button>
    </>
  );
};

export default TermsPage;
