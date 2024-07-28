import Logo from './UI/Logo.jsx';

const AccounstHeader = () => {
  return (
    <header id='header' className='flex w-full justify-start'>
      <div className='header-container container flex w-fit flex-col justify-start p-2'>
        {/* <div className="logo-container w-36 pb-2">
                    <Logo />
                </div>
                <div className="title-container text-xs tracking-tighter">나만의 수영 루틴,
                    <span className="text-primary font-semibold text-lg"> 수영쌤</span>
                </div> */}
      </div>
    </header>
  );
};

export default AccounstHeader;
