import { useState } from 'react';

export default function useModal() {
  const [detailModalState, setDetailModalState] = useState<boolean>(false); //상세보기 모달 state 관리

  const detailModal = () => {
    if (detailModalState === true) {
      document.body.style.overflowY = 'auto';
    }
    setDetailModalState(!detailModalState);
  };

  const [sampleModalState, setSampleModalState] = useState<boolean>(false); //브랜드등록 모달 state 관리
  const sampleModal = () => {
    if (sampleModalState === true) {
      document.body.style.overflowY = 'auto';
    }
    setSampleModalState(!sampleModalState);
  };

  const [privacyModalState, setPrivacyModalState] = useState<boolean>(false); //브랜드등록 모달 state 관리
  const privacyModal = () => {
    if (privacyModalState === true) {
      document.body.style.overflowY = 'auto';
    }
    setPrivacyModalState(!privacyModalState);
  };

  return {
    detailModalState,
    detailModal,
    sampleModalState,
    sampleModal,
    privacyModalState,
    privacyModal,
  };
}
