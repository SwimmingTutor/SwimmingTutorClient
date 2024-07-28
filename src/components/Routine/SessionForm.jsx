import PageTitle from '../PageTitle.jsx';

const blankDiv3 = <div className='h-3' />;
const blankDiv5 = <div className='h-5' />;
const SessionData = ({ title, data }) => {
  return (
    <>
      <PageTitle title={title} />
      {blankDiv3}
      <table className='min-w-full border border-gray-300 bg-white'>
        <thead>
          <tr>
            <th className='border-b px-4 py-2 text-center'>영법</th>
            <th className='border-b px-4 py-2 text-center'>거리</th>
            <th className='border-b px-4 py-2 text-center'>기술</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map(item => (
              <tr key={item.trainingId}>
                <td className='border-b px-4 py-2 text-center'>{item.strokeName}</td>
                <td className='border-b px-4 py-2 text-center'>{item.distance}</td>
                <td className='border-b px-4 py-2 text-center'>{item.sets}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className='border-b px-4 py-2 text-center' colSpan='3'>
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {blankDiv5}
    </>
  );
};

export default SessionData;
