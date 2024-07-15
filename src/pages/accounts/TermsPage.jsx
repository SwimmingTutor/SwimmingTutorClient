import TermsAgreement from '../../components/TermsAgreement.jsx';
import { CenterWrapper } from '../../components/CenterWrapper.jsx';
import { Header } from '../../components/Header.jsx';
import { Button } from '../../components/Button.jsx';

export const TermsPage = () => {
  const blankDiv = <div className='h-20'></div>;

  const onClick = () => {};

  return (
    <CenterWrapper>
      <Header headerType='terms' />
      {blankDiv}
      <TermsAgreement></TermsAgreement>
      {blankDiv}
      <Button content='동의하고 시작하기' onClick={onClick}></Button>
    </CenterWrapper>
  );
};
