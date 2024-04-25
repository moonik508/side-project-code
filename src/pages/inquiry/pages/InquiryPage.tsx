import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import '@/stylesheet/inquiry.css';

import InquiryStep1 from '@/pages/inquiry/component/InquiryStep1';
import InquiryStep2 from '@/pages/inquiry/component/InquiryStep2';
import InquiryStep3 from '@/pages/inquiry/component/InquiryStep3';
import InquiryStep4 from '@/pages/inquiry/component/InquiryStep4';
import InquiryStep5 from '@/pages/inquiry/component/InquiryStep5';
import InquiryStep6 from '@/pages/inquiry/component/InquiryStep6';
import LandingDetailPopup from '@/pages/landingList/pages/LandingDetailPopup';
import Modal from '@/components/template/Modal';
import useModal from '@/hooks/useModal';
import InquiryStep7 from '@/pages/inquiry/component/InquiryStep7';
import PrivacyPolicyModal from '@/components/template/PrivacyPolicyModal';
import PrivacyPolicyPopup from '@/pages/inquiry/component/PrivacyPolicyPopup';
// import { CardDetailData } from '@/definition/ElypecsLab';

export interface reqInquiry {
  type: string;
  productId?: number;
  categoryId?: number;
  startDateYear: number;
  startDateMonth: number;
  startDatePeriod: string;
  endDateYear: number;
  endDateMonth: number;
  endDatePeriod: string;
  desc: string;
  userName: string;
  email: string;
  phoneNumber: string;
  company?: string;
  projectName: string;
  termsAgree: boolean;
}
export interface chkFlag {
  name: boolean;
  email: boolean;
  phoneNumber: boolean;
}
export default function InquiryPage() {
  const location = useLocation();
  const urlParams: any = location.state;
  const { detailModal, detailModalState, privacyModal, privacyModalState } =
    useModal();
  const [upState, setUpState] = useState<boolean>(false);
  const [pageNo, setPageNo] = useState<number>(1);
  const [reqData, setReqData] = useState<reqInquiry>({} as reqInquiry);
  const [insertAllFlag, setInsertAllFlag] = useState<chkFlag>({} as chkFlag);
  const swiperRef = useRef<SwiperType>();

  const reqTypeFunction = (type: string, typeVal: string) => {
    setReqData((prev) => {
      return { ...prev, [type]: typeVal };
    });
  };

  const reqProductTypeFunction = (
    categoryValue: number,
    productValue: number,
  ) => {
    setReqData((prev) => {
      return { ...prev, productId: productValue, categoryId: categoryValue };
    });
  };
  const chkFlagFunction = (type: string, value: boolean) => {
    setInsertAllFlag((prev) => {
      return { ...prev, [type]: value };
    });
  };

  const chkTermsAgreeFunction = (value: boolean) => {
    setReqData((prev) => {
      return { ...prev, termsAgree: value };
    });
  };

  const setPageNoHandler = (num: number) => {
    setPageNo(num);
  };

  const setPeriodUpHandler = (dataType: string) => {
    if (dataType === 'startDateYear') {
      setReqData((prev) => {
        return { ...prev, startDateYear: prev.startDateYear + 1 };
      });
    }
    if (dataType === 'endDateYear') {
      setReqData((prev) => {
        return { ...prev, endDateYear: prev.endDateYear + 1 };
      });
    }
    if (dataType === 'startDateMonth') {
      setReqData((prev) => {
        if (prev.startDateMonth === 12) {
          alert('프로젝트 일정의 월은 12월을 넘길 수 없습니다.');
          return prev;
        }
        return { ...prev, startDateMonth: prev.startDateMonth + 1 };
      });
    }
    if (dataType === 'endDateMonth') {
      setReqData((prev) => {
        if (prev.endDateMonth === 12) {
          alert('프로젝트 일정의 월은 12월을 넘길 수 없습니다.');
          return prev;
        }
        return { ...prev, endDateMonth: prev.endDateMonth + 1 };
      });
    }
    if (dataType === 'startDatePeriod') {
      setReqData((prev) => {
        if (prev.startDatePeriod === '월초') {
          return { ...prev, startDatePeriod: '중순' };
        }
        if (prev.startDatePeriod === '중순') {
          return { ...prev, startDatePeriod: '월말' };
        }
        return { ...prev, startDatePeriod: '월초' };
      });
    }
    if (dataType === 'endDatePeriod') {
      setReqData((prev) => {
        if (prev.endDatePeriod === '월초') {
          return { ...prev, endDatePeriod: '중순' };
        }
        if (prev.endDatePeriod === '중순') {
          return { ...prev, endDatePeriod: '월말' };
        }
        return { ...prev, endDatePeriod: '월초' };
      });
    }
  };
  const setPeriodDownHandler = (dataType: string) => {
    if (dataType === 'startDateYear') {
      setReqData((prev) => {
        return { ...prev, startDateYear: prev.startDateYear - 1 };
      });
    }
    if (dataType === 'endDateYear') {
      setReqData((prev) => {
        return { ...prev, endDateYear: prev.endDateYear - 1 };
      });
    }
    if (dataType === 'startDateMonth') {
      setReqData((prev) => {
        if (prev.startDateMonth === 1) {
          alert('프로젝트 일정의 월은 1월 보다 작아질 수 없습니다.');
          return prev;
        }
        return { ...prev, startDateMonth: prev.startDateMonth - 1 };
      });
    }
    if (dataType === 'endDateMonth') {
      setReqData((prev) => {
        if (prev.endDateMonth === 1) {
          alert('프로젝트 일정의 월은 1월 보다 작아질 수 없습니다.');
          return prev;
        }
        return { ...prev, endDateMonth: prev.endDateMonth - 1 };
      });
    }
    if (dataType === 'startDatePeriod') {
      setReqData((prev) => {
        if (prev.startDatePeriod === '월초') {
          return { ...prev, startDatePeriod: '월말' };
        }
        if (prev.startDatePeriod === '중순') {
          return { ...prev, startDatePeriod: '월초' };
        }
        return { ...prev, startDatePeriod: '중순' };
      });
    }
    if (dataType === 'endDatePeriod') {
      setReqData((prev) => {
        if (prev.endDatePeriod === '월초') {
          return { ...prev, endDatePeriod: '월말' };
        }
        if (prev.endDatePeriod === '중순') {
          return { ...prev, endDatePeriod: '월초' };
        }
        return { ...prev, endDatePeriod: '중순' };
      });
    }
  };

  const initReqData = () => {
    const date = new Date();
    const initStartEndYear = date.getFullYear();
    const initStartEndMonth = date.getMonth() + 1;
    setReqData((prev) => {
      return {
        ...prev,
        startDateYear: initStartEndYear,
        startDateMonth: initStartEndMonth,
        startDatePeriod: '월초',
        endDateYear: initStartEndYear,
        endDateMonth: initStartEndMonth,
        endDatePeriod: '월말',
        termsAgree: false,
        categoryId: urlParams !== null ? urlParams.categoryId : 1,
        productId: urlParams !== null ? urlParams.itemId : 1,
      };
    });
    setInsertAllFlag((prev) => {
      return { ...prev, email: false, name: false, phoneNumber: false };
    });
  };

  useEffect(() => {
    initReqData();
  }, []);
  return (
    <>
      <div className="inquiry-container">
        <div className="inquiry_body">
          <div className="inquiry-body-wrap">
            <p className={pageNo === 7 ? 'hash_pager is_hidden' : 'hash_pager'}>
              <span className="acc">STEP.{pageNo <= 6 ? pageNo : 6}</span>
              <span> / 6</span>
            </p>
            <div className="slide">
              <div className="inquiry_btn_box">
                {pageNo === 1 || pageNo == 7 ? (
                  <></>
                ) : (
                  <button
                    className="btn prev"
                    onClick={() => {
                      swiperRef.current?.slidePrev();
                      setPageNo((prev) => {
                        return prev - 1;
                      });
                    }}
                  >
                    BACK
                  </button>
                )}
                {pageNo == 7 ? (
                  <></>
                ) : pageNo > 6 ? (
                  <button
                    className={
                      reqData.termsAgree
                        ? 'btn next send active'
                        : 'btn next send'
                    }
                    onClick={() => {
                      swiperRef.current?.slideNext();
                      setPageNo((prev) => {
                        return prev + 1;
                      });
                    }}
                  >
                    SEND
                  </button>
                ) : (
                  <button
                    className="btn next"
                    onClick={() => {
                      swiperRef.current?.slideNext();
                      setPageNo((prev) => {
                        return prev + 1;
                      });
                    }}
                    disabled={
                      (pageNo === 1 && reqData.type !== 'project') ||
                      (pageNo === 5 && !insertAllFlag.name) ||
                      (pageNo === 5 && !insertAllFlag.email) ||
                      (pageNo === 5 && !insertAllFlag.phoneNumber) ||
                      (pageNo === 6 && !reqData.termsAgree)
                    }
                  >
                    {pageNo === 6 ? 'SEND' : 'NEXT'}
                  </button>
                )}
              </div>
              <Swiper
                className="inquiry"
                grabCursor={false}
                speed={1000}
                pagination={{
                  type: 'progressbar',
                }}
                modules={[Pagination]}
                onBeforeInit={(swiper: any) => {
                  swiperRef.current = swiper;
                }}
              >
                <SwiperSlide>
                  <InquiryStep1
                    reqData={reqData}
                    reqTypeFunction={reqTypeFunction}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InquiryStep2
                    reqData={reqData}
                    urlParams={urlParams}
                    reqProductTypeFunction={reqProductTypeFunction}
                    setPageNo={setPageNoHandler}
                    swiperRef={swiperRef}
                    toggleModal={detailModal}
                    setUpState={setUpState}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InquiryStep3
                    reqData={reqData}
                    setPeriodUpHandler={setPeriodUpHandler}
                    setPeriodDownHandler={setPeriodDownHandler}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InquiryStep4
                    reqData={reqData}
                    reqTypeFunction={reqTypeFunction}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InquiryStep5
                    reqData={reqData}
                    insertAllFlag={insertAllFlag}
                    reqTypeFunction={reqTypeFunction}
                    chkFlagFunction={chkFlagFunction}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <InquiryStep6
                    checked={reqData.termsAgree}
                    setChecked={chkTermsAgreeFunction}
                    toggleModal={privacyModal}
                  />
                </SwiperSlide>
                <SwiperSlide className="last-inquiry">
                  <InquiryStep7 />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={detailModalState}
        toggleCallback={detailModal}
        scrollClass="scrollY"
        contents={
          <LandingDetailPopup
            upState={upState}
            upStateCallback={() => setUpState(false)}
            toggleModal={detailModal}
            urlParams={urlParams}
          />
        }
      ></Modal>
      <PrivacyPolicyModal
        isOpen={privacyModalState}
        toggleCallback={privacyModal}
        contents={<PrivacyPolicyPopup toggleModal={privacyModal} />}
      ></PrivacyPolicyModal>
    </>
  );
}
