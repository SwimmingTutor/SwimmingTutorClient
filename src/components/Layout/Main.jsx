const Main = ({ children }) => {
  return (
    <main id='main' className='relative w-full bg-slate-50/65 px-5 pb-3 pt-20 overflow-y-auto flex-1'>
      <div className='min-h-full pb-14'>
        {children}
      </div>
    </main>
  );
};
export default Main;
