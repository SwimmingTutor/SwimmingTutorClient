import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { customAxios, fastApiAxios } from '../../utils/https/axios/customAxios';
import PageTitle from '../../components/PageTitle.jsx';
import Button from '../../components/UI/Button.jsx';
import SWIMTERMS from '../../constants/swimTerms.js';
import usePageSetup from '../../hooks/usePageSetup.js';
import InputText from '../../components/UI/InputText.jsx';
import SelectBox from '../../components/UI/SelectBox.jsx';
import BLANKDIV from '../../constants/blankDiv.js';

const LevelTestPage = () => {
  const { strokename } = useParams();
  const navigate = useNavigate();
  usePageSetup('level-test');

  const translateStrokeName = strokeKey => {
    const stroke = SWIMTERMS.find(stroke => stroke.key === strokeKey);
    return stroke ? stroke.name : strokeKey;
  };

  const strokeNameInKorean = translateStrokeName(strokename);

  const questions = {
    1: `50분 동안 ${strokeNameInKorean}으로 완주할 수 있는 거리를 입력해주세요.`,
    2: `${strokeNameInKorean}으로 50m 완주 시 소요되는 시간을 입력해주세요.`,
    3: `${strokeNameInKorean} 기술적인 부분 중 본인이 가장 최근에 배운 것을 선택해주세요.`
  };

  const techniqueMap = {
    자유형: ['기본 자세', '양측 호흡', '사이드 턴', '플립 턴'],
    배영: ['기본 자세', '안정적 자세', '배영 턴', '크로스 오버 턴'],
    평영: ['글라이딩', '돌핀 킥', '물 속 스타트'],
    접영: ['한팔 접영', '양팔 접영', '무호흡 양팔 접영 (25m)']
  };

  const [distance, setDistance] = useState('');
  const [speed, setSpeed] = useState('');
  const [technique, setTechnique] = useState('');
  const [techniqueOptions, setTechniqueOptions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const options = techniqueMap[strokeNameInKorean] || [];
    setTechniqueOptions(options);
  }, [strokeNameInKorean]);

  const handleSubmit = async () => {
    if (!distance || !speed || !technique) {
      alert('모든 문항에 답변을 입력 또는 선택해주세요 😅');
      return;
    }

    // 전송하는 데이터 확인
    const request = {
      prompt: 'Generate training routine',
      stroke: strokeNameInKorean,
      distance: parseInt(distance),
      speed: parseInt(speed),
      technique: technique
    };

    try {
      const response = await fastApiAxios.post('/lvtest', request);
      const resultData = response.data.completion.text;
      const resultJson = parseStringToJson(resultData);

      const level = resultJson.level;
      const description = resultJson.description;

      // 수영 레벨 저장
      await customAxios.post('/level/log', {
        style: strokeNameInKorean,
        level: level
      });

      // Redirect to result page
      navigate('/my/level/test/result', {
        state: {
          stroke: strokeNameInKorean,
          level: level,
          description: description
        }
      });
    } catch (error) {
      console.error('Error posting data:', error);
      alert('데이터 전송 중 오류가 발생했습니다.\n다시 시도해주세요.\n프로필을 입력하지 않았다면 먼저 입력해주세요.');
    }
  };

  return (
    <div className='px-7'>
      <PageTitle title={`수영 레벨 테스트`} />
      {BLANKDIV[6]}
      {error && <div className='error-message'>{error}</div>}
      <InputText name='distance' label={questions[1]} placeholder='예: 800' value={distance} onChange={setDistance} />
      {BLANKDIV[6]}
      <InputText name='speed' label={questions[2]} placeholder='예: 60' value={speed} onChange={setSpeed} />
      {BLANKDIV[6]}
      <SelectBox
        label={questions[3]}
        placeholder={'선택해주세요'}
        selectOption={techniqueOptions}
        value={technique || techniqueOptions[0]}
        onChange={setTechnique}
      />
      {BLANKDIV[9]}
      <Button size='large' content='결과확인' onClick={handleSubmit} />
    </div>
  );
};

const parseStringToJson = inputString => {
  // 문자열에서 level과 description 부분을 추출합니다.
  const regex = /level:\s*([^,]+),\s*description:\s*(.*)/;
  const matches = inputString.match(regex);

  if (matches) {
    const level = matches[1].trim();
    const description = matches[2].trim();

    // 객체로 변환합니다.
    const jsonObject = {
      level: level,
      description: description
    };

    return jsonObject;
  } else {
    return null;
  }
};

export default LevelTestPage;
