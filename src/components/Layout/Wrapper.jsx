const Wrapper = ({ children }) => {
  return (
    <div id='wrapper' className='container relative h-auto min-h-screen w-full max-w-[1200px] lg:w-app'>
      {children}
    </div>
  );
};
export default Wrapper;
