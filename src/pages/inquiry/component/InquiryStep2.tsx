import { MutableRefObject } from 'react';

import { reqInquiry } from '@/pages/inquiry/pages/InquiryPage';

export default function InquiryStep2(props: {
  reqData: reqInquiry;
  urlParams: any;
  toggleModal: () => void;
  reqProductTypeFunction: (category: number, product: number) => void;
  setPageNo: (num: number) => void;
  swiperRef: MutableRefObject<any>;
  setUpState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="inquiry-items">
      <p className="inquiry_title">Question2</p>
      <div className="inquiry-card-box">
        <div
          className="inquiry-card"
          onClick={() => {
            props.reqProductTypeFunction(
              props.urlParams.categoryId,
              props.urlParams.itemId,
            );
          }}
        >
          <div
            className={
              props.reqData.productId !== 0 && props.reqData.categoryId !== 0
                ? 'data-box is_active'
                : 'data-box'
            }
          >
            <span className="inquiry-card-title">선택사항 1</span>
            <button
              className="btn_detail"
              onClick={() => {
                props.setUpState(true);
                props.toggleModal();
              }}
            >
              선택 상품 확인
            </button>
          </div>
        </div>
        <div className="inquiry-card">
          <div
            className={
              props.reqData.productId === 0 && props.reqData.categoryId === 0
                ? 'data-box is_active'
                : 'data-box'
            }
            onClick={() => {
              props.reqProductTypeFunction(0, 0);
            }}
          >
            <span className="inquiry-card-title">선택사항 2</span>
            <span>description</span>
          </div>
        </div>
      </div>
    </div>
  );
}
