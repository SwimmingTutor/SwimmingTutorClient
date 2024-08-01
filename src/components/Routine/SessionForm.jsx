import PageTitle from '../PageTitle.jsx';
import Button from '../UI/Button.jsx';

const blankDiv1 = <div className='h-1' />;
const blankDiv2 = <div className='h-2' />;

const SessionData = ({ title, data }) => {
  return (
    <div className='mx-2'>
      <div className='mt-2 mb-2 text-sm !text-sm'>
        <PageTitle title={title} />
      </div>
      <table className='min-w-full border border-gray-300 bg-white'>
        <thead>
          <tr>
            <th className='border-b px-4 py-2 text-center'>영법</th>
            <th className='border-b px-4 py-2 text-center'>거리</th>
            <th className='border-b px-4 py-2 text-center'>세트 수</th>
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
      {blankDiv1}
      
    </div>
  );
};

export default SessionData;
