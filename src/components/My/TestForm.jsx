import { useState, useEffect } from 'react';
import ClickableDiv from '../ClickableDiv.jsx';

const translateStrokeName = strokename => {
  switch (strokename) {
    case 'freestyle':
      return '자유형';
    case 'backstroke':
      return '배영';
    case 'breathstroke':
      return '평영';
    case 'butterfly':
      return '접영';
    default:
      return '알 수 없음';
  }
};

const optionsList = {
  freestyle: {
    1: [
      { key: '400m 미만', value: 1 },
      { key: '800m 미만', value: 2 },
      { key: '800m 이상', value: 3 }
    ],
    2: [
      { key: '1분 이상', value: 1 },
      { key: '1분 미만', value: 2 },
      { key: '45초 미만', value: 3 }
    ],
    3: [
      { key: '기본 자세', value: 1 },
      { key: '양측 호흡', value: 2 },
      { key: '사이드 턴', value: 3 },
      { key: '플립 턴', value: 4 }
    ]
  },
  backstroke: {
    1: [
      { key: '300m 미만', value: 1 },
      { key: '500m 미만', value: 2 },
      { key: '500m 이상', value: 3 }
    ],
    2: [
      { key: '1분 15초 이상', value: 1 },
      { key: '1분 15초 미만', value: 2 },
      { key: '55초 미만', value: 3 }
    ],
    3: [
      { key: '기본 자세', value: 1 },
      { key: '안정적 자세', value: 2 },
      { key: '배영 턴', value: 3 },
      { key: '크로스 오버 턴', value: 4 }
    ]
  },
  breathstroke: {
    1: [
      { key: '300m 미만', value: 1 },
      { key: '500m 미만', value: 2 },
      { key: '500m 이상', value: 3 }
    ],
    2: [
      { key: '1분 20초 이상', value: 1 },
      { key: '1분 20초 미만', value: 2 },
      { key: '1분 미만', value: 3 }
    ],
    3: [
      { key: '글라이딩', value: 1 },
      { key: '돌핀 킥', value: 2 },
      { key: '물 속 스타트', value: 3 }
    ]
  },
  butterfly: {
    1: [
      { key: '100m 미만', value: 1 },
      { key: '300m 미만', value: 2 },
      { key: '300m 이상', value: 3 }
    ],
    2: [
      { key: '1분 10초 이상', value: 1 },
      { key: '1분 10초 미만', value: 2 },
      { key: '50초 미만', value: 3 }
    ],
    3: [
      { key: '한팔 접영', value: 1 },
      { key: '양팔 접영', value: 2 },
      { key: '무호흡 양팔 접영(25m)', value: 3 }
    ]
  }
};

const TestForm = ({ strokename, currentStep, onOptionSelect, selectedValues }) => {
  const [selectedOption, setSelectedOption] = useState(selectedValues[currentStep - 1] || null);
  const strokenameKr = translateStrokeName(strokename);

  const questions = {
    1: `50분 동안 ${strokenameKr}으로 완주할 수 있는 거리를 선택해주세요.`,
    2: `${strokenameKr}으로 50m 완주 시 소요되는 시간을 선택해주세요.`,
    3: `${strokenameKr} 기술적인 부분 중 본인이 가장 최근에 배운 것을 선택해주세요.`
  };

  const options = optionsList[strokename][currentStep] || [];

  const handleClick = option => {
    setSelectedOption(option.value);
    onOptionSelect(option.value);
  };

  useEffect(() => {
    setSelectedOption(selectedValues[currentStep - 1] || null);
  }, [currentStep, selectedValues]);

  return (
    <>
      <div>{questions[currentStep]}</div>
      <div className='flex h-fit w-full flex-col gap-3 text-[0.9rem] font-light'>
        {options.map((item, index) => (
          <ClickableDiv
            key={index}
            item={item}
            isSelected={selectedOption === item.value}
            onClick={() => handleClick(item)}
          />
        ))}
      </div>
    </>
  );
};

export default TestForm;
