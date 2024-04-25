import '@/stylesheet/pages.css';

const PrivacyPolicyPopup = (props: { toggleModal: () => void }) => {
  return (
    <>
      <div className="privacy_popup">
        <div className="popup_header_box">
          <p className="popup_title">개인정보 처리방침</p>
          <div className="modal_close_btn">
            <button
              onClick={() => {
                props.toggleModal();
              }}
            ></button>
          </div>
        </div>

        <div className="privacy_content">
          <ul>
            <li>
              <p className="content_title">수집 항목</p>
              <p className="content_info">
                필수 항목 : 회사명, 이름, 이메일, 연락처 <br />
                선택 항목 : 프로젝트명, 의뢰 내용
              </p>
            </li>
            <li>
              <p className="content_title">수집 목적</p>
              <p className="content_info">
                문의자 확인, 문의에 대한 회신 등의 처리
              </p>
            </li>
            <li>
              <p className="content_title">수집 목적</p>
              <p className="content_info">
                문의자 확인, 문의에 대한 회신 등의 처리
              </p>
            </li>
            <li>
              <p className="content_title">수집 목적</p>
              <p className="content_info">
                문의자 확인, 문의에 대한 회신 등의 처리
              </p>
            </li>
            <li>
              <p className="content_title">수집 목적</p>
              <p className="content_info">
                문의자 확인, 문의에 대한 회신 등의 처리
              </p>
            </li>
            <li>
              <p className="content_title">수집 목적</p>
              <p className="content_info">
                문의자 확인, 문의에 대한 회신 등의 처리
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPopup;
