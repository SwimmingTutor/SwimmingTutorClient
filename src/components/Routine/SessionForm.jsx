import PageTitle from '../PageTitle.jsx';
import BLANKDIV from '../../constants/blankDiv.js';

const SessionData = ({ title, data }) => {
  return (
    <div>
      <div className='mb-2 mt-2 !text-sm text-sm'>
        <PageTitle title={title} size='lg' />
      </div>
      <table className='ml-4 min-w-full border border-gray-300 bg-white'>
        <thead>
          <tr>
            <th className='border-b px-2 py-1 text-center'>영법</th>
            <th className='border-b px-2 py-1 text-center'>거리</th>
            <th className='border-b px-2 py-1 text-center'>세트 수</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map(item => (
              <tr key={item.trainingId}>
                <td className='border-b px-2 py-1 text-center'>{item.strokeName}</td>
                <td className='border-b px-2 py-1 text-center'>{item.distance}</td>
                <td className='border-b px-2 py-1 text-center'>{item.sets}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className='border-b px-2 py-1 text-center' colSpan='3'>
                데이터가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {BLANKDIV[0]}
    </div>
  );
};

export default SessionData;
