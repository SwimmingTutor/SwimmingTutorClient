const Wrapper = ({ children }) => {
  return (
    <div id='wrapper' className='container relative h-auto min-h-screen w-full lg:w-app'>
      {children}
    </div>
  );
};
export default Wrapper;
