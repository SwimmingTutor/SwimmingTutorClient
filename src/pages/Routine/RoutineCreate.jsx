import { useRef } from 'react';
import PageTitle from '../../components/PageTitle.jsx';
import PageInfoText from '../../components/PageInfoText.jsx';
import SelectBox from '../../components/UI/SelectBox.jsx';
import MultiSelectBox from '../../components/UI/MultiSelectBox.jsx';

const RoutineCreatePage = () => {

  return (
    <>
      <PageTitle title='루틴 생성' />
      <SelectBox label='레인 길이' selectOption={['25m', '50m']} />

      <MultiSelectBox label='영법 선택' selectOption={['자유형', '배영', '평영', '접영']} placeholder='복수 선택 가능' />
    </>
  );
};

export default RoutineCreatePage;
