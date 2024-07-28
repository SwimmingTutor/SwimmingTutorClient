import React, { useState, useRef } from 'react';
import { ModalTerms } from '../ModalTerms.jsx';
import termsData from '../../assets/data/termsData.json';

// TODO: 이용약관 동의 페이지
// 헤더 로그인, 회원가입 없애야 함
// 약관 모달 글자 잘림
const TermsAgreement = () => {
  const serviceModalRef = useRef();
  const privacyModalRef = useRef();

  const [allChecked, setAllChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleOpenServiceModal = () => {
    serviceModalRef.current.open();
  };

  const handleOpenPrivacyModal = () => {
    privacyModalRef.current.open();
  };

  const handleAllChange = e => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    setServiceChecked(isChecked);
    setPrivacyChecked(isChecked);
  };

  const handleServiceChange = e => {
    const isChecked = e.target.checked;
    setServiceChecked(isChecked);
    if (!isChecked) {
      setAllChecked(false);
    } else if (privacyChecked) {
      setAllChecked(true);
    }
  };

  const handlePrivacyChange = e => {
    const isChecked = e.target.checked;
    setPrivacyChecked(isChecked);
    if (!isChecked) {
      setAllChecked(false);
    } else if (serviceChecked) {
      setAllChecked(true);
    }
  };

  const renderTermsContent = item => {
    return (
      <div>
        {termsData[item].map((term, index) => (
          <React.Fragment key={index}>
            <h2 className='text-lg font-bold'>{term.title}</h2>
            {term.content.map((contentItem, contentIndex) => (
              <React.Fragment key={contentIndex}>
                <h3 className='text-md font-semibold'>{contentItem.clause}</h3>
                {Array.isArray(contentItem.text) ? (
                  contentItem.text.map((textItem, textIndex) => (
                    <p key={textIndex} className='my-1 text-sm'>
                      {textItem}
                    </p>
                  ))
                ) : (
                  <p className='my-1 text-sm'>{contentItem.text}</p>
                )}
              </React.Fragment>
            ))}
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div
      className='mx-auto w-4/5 rounded-2xl border border-gray-200 bg-white p-6 shadow-md'
      style={{ boxShadow: '0 0 50% 1px rgba(0, 0, 0, 0.1)' }}
    >
      <div className='mb-4 flex items-center'>
        <input
          id='all-terms'
          type='checkbox'
          className='form-checkbox h-6 w-6 rounded-full text-blue-500'
          checked={allChecked}
          onChange={handleAllChange}
        />
        <label htmlFor='all-terms' className='ml-3 text-lg font-medium text-blue-800'>
          수영쌤 이용약관 전체 동의
        </label>
      </div>
      <hr className='my-4' />
      <div className='mb-4 flex items-center'>
        <input
          id='service-terms'
          type='checkbox'
          className='form-checkbox h-5 w-5 rounded-full text-blue-500'
          checked={serviceChecked}
          onChange={handleServiceChange}
        />
        <label htmlFor='service-terms' className='ml-3 text-base text-gray-800'>
          서비스 이용약관 (필수)
        </label>
        <button className='ml-auto text-gray-400' onClick={handleOpenServiceModal}>
          &gt;
        </button>
      </div>
      <div className='mb-4 flex items-center'>
        <input
          id='privacy-terms'
          type='checkbox'
          className='form-checkbox h-5 w-5 rounded-full text-blue-500'
          checked={privacyChecked}
          onChange={handlePrivacyChange}
        />
        <label htmlFor='privacy-terms' className='ml-3 text-base text-gray-800'>
          개인정보 수집 및 목적 (필수)
        </label>
        <button className='ml-auto text-gray-400' onClick={handleOpenPrivacyModal}>
          &gt;
        </button>
      </div>

      <ModalTerms ref={serviceModalRef} buttonCaption='닫기'>
        {renderTermsContent('ServiceTerms')}
      </ModalTerms>
      <ModalTerms ref={privacyModalRef} buttonCaption='닫기'>
        {renderTermsContent('PrivacyTerms')}
      </ModalTerms>
    </div>
  );
};

export default TermsAgreement;
